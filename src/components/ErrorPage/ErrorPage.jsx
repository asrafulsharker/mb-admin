import React from 'react';
import { Link } from 'react-router-dom';


function ErrorPage() {
 

  return (
    <div className='flex' style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <h1>404 not found</h1>
        <Link className='btn btn-primary' to='/'>
        Back to Home
      </Link>
        
    </div>
  );
}

export default ErrorPage;