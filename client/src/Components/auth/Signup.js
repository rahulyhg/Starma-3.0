import React from 'react';
import {Link} from 'react-router-dom';

const Signup = () => {
  return (
    <div>
      <h3>Sign up</h3>
      <div>
        <a href="/auth/google" className="waves-effect waves-light btn-large">Sign up with Google+</a>
      </div>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Signup;