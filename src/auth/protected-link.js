import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedLink = ({ url, name }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <>
      <a href={url} className="nav-link" >{name}</a>
    </>
  )
}

export default ProtectedLink