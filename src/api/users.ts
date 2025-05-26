// TODO: baseUrl as env variable
const baseURL = "http://localhost:8000/api";

async function fetchJson<T>(url: string, options?: RequestInit): Promise<T> {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export const getUsers = () =>
  fetchJson(`${baseURL}/users/`, { cache: "no-store" });

export const getUserByEmail = (email: string) =>
  fetchJson(`${baseURL}/users/${email}/`, { cache: "no-store" });

export const createUser = (user: { email: string }) =>
  fetchJson(`${baseURL}/users/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
