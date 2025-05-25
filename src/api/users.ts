// TODO: Query client with base URL

export const getUsers = async () => {
  console.log(
    "getUsers called on",
    typeof window === "undefined" ? "server" : "client",
  );
  try {
    const response = await fetch("http://localhost:8000/api/users/", {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("getUsers error:", err);
    throw err;
  }
};

export const getUserByEmail = async (email: string) => {
  const response = await fetch(`http://localhost:8000/api/users/${email}/`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

export const createUser = async (user: { email: string }) => {
  const response = await fetch("http://localhost:8000/api/users/", {
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

export const deleteUser = async (email: string) => {
  const response = await fetch(`http://localhost:8000/api/users/${email}/`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};
