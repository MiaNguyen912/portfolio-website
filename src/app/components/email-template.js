import * as React from 'react';

export const EmailTemplate = ({name, email, message}) => (
  <div>
    <h1>Inquiry request</h1>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
    <p>Message: {message}</p>
  </div>
);