"use server";
import { redirect } from 'next/navigation';
import { pool } from '@/lib/db/postgres'

export async function register(formData) {
    console.log('Form submitted:', formData);
    const data = Object.fromEntries(formData)
    console.log(pool);

    if (data.password.length < 8) {
      return {
        error: "Username must be at least 8 characters long"
      }
    }
    try {
      const usernameAvailable = await checkUsernameAvailable(data.username);
      if(!usernameAvailable) {
          return {
            error: "Username is already taken"
          }
      }
      //posts data to register user
      const res = await fetch('/register', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-Type': 'application/json' }
      })

      const response = await res.json();

      if (res.ok) {
          redirect('/login');
          return {
            success: true,
            message: `${data.user_type} has registered!`
          }
      } else {
          return {
            error: 'Registration failed. Please try again.'
          }
      }

    }
    catch (err) {
      console.error(err);
      return {
        error: 'An error occurred during registration.'
      }
    }

};

async function checkUsernameAvailable(username) {
  if(!username) {
    return false;
  }
  try {
    const result = await pool.query(`SELECT 1 FROM person WHERE username = '${username}' LIMIT 1`);
    if(result.rowCount > 0) {
      return false;
  } else {
      return true;
  }
  } catch (err) {
    console.error(err);
    return false;
  }
}

async function registerUser() {
  
}