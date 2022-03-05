import React, { useState } from "react";

function checkEmail(email) {
  const cEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return cEmail.test(String(email).toLowerCase());
}

function checkPassword(input) {
  const cPassword = /^[A-Za-z]\w{7,14}$/;
  if (input.match(cPassword)) {
    return true;
  }
  return false;
}



function Contact() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

 
  const handleFormInput = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

   if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'text') {
      setName(inputValue);
    } else {
      setPassword(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!checkEmail(email)) {
      setError('Email is not Valid.');
      return;
    }
    if (!checkPassword(password)) {
      setError(`Password is not Valid.`);
      return;
    }
    alert(`Welcome ${name}`);

    setName('');
    setPassword('');
    setEmail('');

    };

  return (
    <div>
      <p>You can contact me with your name and email.</p>
      <form className="form">
        <input value={email} name="email" onChange={handleFormInput} type="email" placeholder="email" />
        <input value={name} name="name" onChange={handleFormInput} type="text" placeholder="username" />
        <input value={password} name="password" onChange={handleFormInput} type="password" placeholder="Password" />
        <button type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;