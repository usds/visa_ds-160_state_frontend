"use client";

import React, { useEffect } from "react";
import "../globals.css";
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

export default function ApplicationsPage() {
  type Application = {
    id: string;
    userEmail: string;
    data: {
      passportType: string | null;
      passportCountry: string | null;
      passportBookNumber: string | null;
      passportIssuanceDate: Date | null;
      passportExpirationDate: Date | null;
      surname: string;
      givenName: string;
      nativeAlphabetName: string | null;
      otherNames: string[];
    };
  };

  const [applications, setApplications] = React.useState<Application[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/applications/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setApplications(json);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Applications</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && (
        <ul>
          {applications.map((application) => (
            <li key={application.id}>
              {application.data.surname}, {application.data.givenName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
