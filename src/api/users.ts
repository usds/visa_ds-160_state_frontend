// TODO: baseUrl as env variable
const baseURL = "http://localhost:8000/api";

export const getUsers = async () => {
  const response = await fetch(`${baseURL}/users/`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const getUserByEmail = async (email: string) => {
  const response = await fetch(`${baseURL}/users/${email}/`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const createUser = async (user: { email: string }) => {
  const response = await fetch(`${baseURL}/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};
