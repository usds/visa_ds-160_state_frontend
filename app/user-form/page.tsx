"use client";
import React, { useState } from 'react';
import '../globals.css';
import UserForm from '../../components/UserForm';
import "@trussworks/react-uswds/lib/uswds.css";
import "@trussworks/react-uswds/lib/index.css";

export default function UserFormPage() {
    return (
        <div style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '100vh' }}>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1 style={{ marginBottom: '20px' }}>User Registration</h1>
                <UserForm />
            </div>
        </div>
    );
}
