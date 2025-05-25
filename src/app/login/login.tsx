"use client";

import React from "react";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import "@/app/globals.css";

import { getUsers } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export const Login = () => {
  console.log(
    "login/login.tsx running on",
    typeof window === "undefined" ? "server" : "client",
  );
  const {
    data: users,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Login</h1>
      <p>Welcome to the login page!</p>
      <p>Click on a user to &quot;log in&quot;.</p>
      <ul>
        {users.map((user) => (
          <li key={user.email}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
};
export default Login;
