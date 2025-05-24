"use client";

import React from "react";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";
import "@/app/globals.css";

import { getUsers } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export const Login = () => {
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
    <ul>
      {users.map((user) => (
        <li key={user.email}>{user.email}</li>
      ))}
    </ul>
  );
};
export default Login;
