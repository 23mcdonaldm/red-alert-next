"use client";
import React, { useState } from 'react';
import { register } from './registration';
import './RegisterForm.css';

export default function RegisterForm() {
  const [userType, setUserType] = useState('');

  //server action function
  async function handleSubmit(formData) {
    const result = await register(formData)
    
    if (result.error) {
      setMessage(result.error)
    } else if (result.success) {
      setMessage(result.message)
    }
  }

  return (
    <form className="user-form" action={handleSubmit}>
      <div className="user-type">
        <label>Select User Type</label>
        <div>
          <label>
            <input
              type="radio"
              value="Student"
              checked={userType === 'Student'}
              onChange={() => setUserType('Student')}
            />
            Student
          </label>
          <label>
            <input
              type="radio"
              value="Admin"
              checked={userType === 'Admin'}
              onChange={() => setUserType('Admin')}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="Guardian"
              checked={userType === 'Guardian'}
              onChange={() => setUserType('Guardian')}
            />
            Guardian
          </label>
        </div>
      </div>

      <h2>Create New User</h2>

      <input
        type="text"
        name="fullName"
        placeholder="Full Name"
      />

      <input
        type="text"
        name="schoolName"
        placeholder="Full School Name"
      />

      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
      />

      <input
        type="text"
        name="username"
        placeholder="Username"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        
      />

      {userType === 'Student' && (
        <input
          type="text"
          name="studentId"
          placeholder="Student ID"
        />
      )}

      {userType === 'Admin' && (
        <input
          type="text"
          name="position"
          placeholder="Position"
        />
      )}

      {userType === 'Guardian' && (
        <>
          <input
            type="text"
            name="yourStudent"
            placeholder="Your Student"
          />
          <input
            type="text"
            name="affiliation"
            placeholder="Affiliation"
          />
        </>
      )}

      <button type="submit">Register</button>
    </form>
  );
}
