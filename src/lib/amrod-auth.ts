let cachedToken: { token: string; expires: number } | null = null;

export async function getAmrodToken() {
  if (cachedToken && Date.now() < cachedToken.expires) {
    return cachedToken.token;
  }

  try {
    const response = await fetch("https://identity.amrod.co.za/VendorLogin", {
      method: "POST",   
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Username: process.env.AMROD_USER,
        Password: process.env.AMROD_PASS,
      }),
      next: { revalidate: 3500 }, // Revalidate before 1hr expiration
    });

    if (!response.ok) throw new Error("Authentication failed");

    const { access_token, expires_in } = await response.json();

    cachedToken = {
      token: access_token,
      expires: Date.now() + expires_in * 1000 - 30000, // 30s buffer
    };

    return access_token;
  } catch (error) {
    console.error("Amrod Auth Error:", error);
    throw new Error("Failed to authenticate with Amrod API");
  }
}
