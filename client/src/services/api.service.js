

export default async function sendAuth(url, account) {
  try {
    const response = await fetch(import.meta.env.VITE_API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(account),
    });
    return response;
  } catch (error) {
    console.error("Erreur lors de l'envoi des données : ", error);
    return null;
  }
}
