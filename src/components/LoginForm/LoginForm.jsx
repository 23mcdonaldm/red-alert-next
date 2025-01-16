"use client";
import React, { useState } from 'react';
import { register } from './login';
import './LoginForm.css';

export default function LoginForm() {
  
  //server action function
  async function handleSubmit(formData) {
    const result = await login(formData)
    
    if (result.error) {
      setMessage(result.error)
    } else if (result.success) {
      setMessage(result.message)
    }
  }

  return (
    <form className="user-form" action={handleSubmit}>
      

      <h2>Log In User</h2>


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

      <button type="submit">Login</button>
    </form>
  );
}
