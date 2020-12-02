import logo from './logo.svg';
import './App.css';
import JSEncrypt from 'jsencrypt';
import { useEffect } from 'react';


function App() {
  let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTA5LCJpYXQiOjE2MDY4OTQ4MTMsImV4cCI6MTYwNjk4MTIxM30.5Lp7Uvc-1SSmqRzg6hQYejtT9s4oZ8RwA38MV6KM_hg';
  useEffect(()=>{
    const rsa_public_key = `-----BEGIN ${process.env.REACT_APP_RSA_KEY_FORMAT} KEY-----${process.env.REACT_APP_RSA_PUBLIC_KEY}-----END ${process.env.REACT_APP_RSA_KEY_FORMAT} KEY-----`;
    function encryptMessage(message, publicKey) {
      const jsEncrypt = new JSEncrypt();
      jsEncrypt.setPublicKey(publicKey);
      return jsEncrypt.encrypt(message);
    }
    let e_key = encryptMessage(token, rsa_public_key);

    console.log("rsa_public_key  ->", rsa_public_key);
    console.log("encrypted key ->", e_key);

  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          RSA TEST APP
        </p>

      </header>
    </div>
  );
}

export default App;
