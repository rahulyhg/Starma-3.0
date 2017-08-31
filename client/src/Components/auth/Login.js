import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
  return(
    <div>
      <h3>Login</h3>
      <div>
        <a href="/auth/google" className="waves-effect waves-light btn-large">Login with Google+</a>
      </div>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Login;