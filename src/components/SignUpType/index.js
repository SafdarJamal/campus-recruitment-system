import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const SignUpType = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={ROUTES.SIGN_UP_COMPANY}>Sign Up as Company</Link>
        </li>
        <li>
          <Link to={ROUTES.SIGN_UP_STUDENT}>Sign Up as Student</Link>
        </li>
      </ul>
    </div>
  );
};

export default SignUpType;
