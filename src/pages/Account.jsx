import React from 'react';
import Helmet from '../components/Helmet';
import LoginForm from '../components/LoginForm';


function Account() {

  return (
    <div className="Account">
      <Helmet title='Account'>
        <LoginForm />
      </Helmet>
      
    </div>
  )
}

export default Account