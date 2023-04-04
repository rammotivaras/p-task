import React, { useState } from 'react';
import './Register.css';

function Register() {
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [businessType, setBusinessType] = useState('');

  const handleBusinessNameChange = (event) => {
    setBusinessName(event.target.value);
  };

  const handleBusinessAddressChange = (event) => {
    setBusinessAddress(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleBusinessTypeChange = (event) => {
    setBusinessType(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        businessName: businessName,
        businessAddress: businessAddress,
        name: name,
        email: email,
        password: password,
        businessType: businessType
      })
    });

    const data = await response.json();

    // Do something with the response data, like redirecting to a new page
    console.log(data);
  };

  return (
    <form onSubmit={handleFormSubmit} className="register-form">
      <label>
        Business Name:
        <input type="text" value={businessName} onChange={handleBusinessNameChange} className="register-input" />
      </label>
      <br />
      <label>
        Business Address:
        <input type="text" value={businessAddress} onChange={handleBusinessAddressChange} className="register-input" />
      </label>
      <br />
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} className="register-input" />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleEmailChange} className="register-input" />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="register-input" />
      </label>
      <br />
      <label>
        Business Type:
        <select value={businessType} onChange={handleBusinessTypeChange} className="register-input">
          <option value="restaurant">Restaurant</option>
          <option value="retail">Retail</option>
          <option value="service">Service</option>
        </select>
      </label>
      <br />
      <button  className="register-button" type="submit">Register</button>
    </form>
  );
}

export default Register;
