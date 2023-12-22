import { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Signup.css'; 

const Signup= () => {
  const [name, setName] = useState('');
  const [fname, setFname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch('http://localhost:8000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password, phoneNumber, fname }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem('user', JSON.stringify(result.result));
    localStorage.setItem('token', JSON.stringify(result.auth));

    navigate('/');
  };

  return (
    <div className="login-box">
    <div className="card custom-card">
      <div className="card-body">
        <h1 className="login-header">Sign Up</h1>
        <div className="input-box">
        <label htmlFor="username" className="input-label">Full Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="John"
            onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="input-box">
        <label htmlFor="username" className="input-label">Father Name</label>
          <input
            type="text"
            className="input-field"
            placeholder="Doe"
            onChange={(e) => setFname(e.target.value)} value={fname} />
        </div>
        <div className="input-box">
        <label htmlFor="username" className="input-label">Email</label>
          <input
            type="text"
            className="input-field"
            placeholder="Doe"
            onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        {/* <div className="input-box">
        <label htmlFor="username" className="input-label">Phone Number</label>
          <input
            type="text"
            className="input-field"
            placeholder=" phone number"
            onChange={(e) => setEmail(e.target.value)} value={email} />
        </div> */}
        <div className="input-box">
  <label htmlFor="phone" className="input-label">Phone Number</label>
  <div style={{ display: 'flex' }}>
    <input
      type="text"
      className="input-field country-code"
      placeholder="+1"
      style={{ width: '20%' }} 
      onChange={(e) => setCountryCode(e.target.value)} value={countryCode} />
    <input
      type="text"
      className="input-field"
      placeholder="123-456-7890"
      style={{ width: '80%' }} 
      onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
  </div>
</div>
        <div className="input-box">
        <label htmlFor="username" className="input-label">Password</label>

          <input
            type="password"
            className="input-field"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <div  className='input-submit'>
          <button className="submit-btn" onClick={collectData}>
            Sign In
          </button>
        </div>
        <div className="sign-up-link">
          <span>Already Have an Account</span>
          <span ><Link to="/Login">Login now</Link></span>
        </div>
      </div>
     
    </div>
  </div>
    
  );
};

export default Signup;




