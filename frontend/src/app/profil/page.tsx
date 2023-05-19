'use client'

import React from 'react';
import ProfilForm from './ProfilForm';
import './ProfilForm.css';
import Link from 'next/link';

export default function Login() {
  return (
    
    <div id="login-page">
     
     
       <div className="d-flex">
      <div className="d-flex flex-row mb-4">                 
      <div className="p-2">
  
</div>

<div className="p-2">
  <Link href="/compte" legacyBehavior>
    <a className='nav-row__item link' tabIndex={0}>
      Compte
    </a>
  </Link>
</div>
     
<div className="p-2">
  <Link href="/aide" legacyBehavior>
    <a className='nav-row__item link' tabIndex={0}>
      Aide
    </a>
  </Link>
</div>

<div className="p-2">
  <Link href="/parametres" legacyBehavior>
    <a className='nav-row__item link' tabIndex={0}>
      Paramétres
    </a>
  </Link>
</div>
        <div className='zds-divider layout-user-navigation__divider' role='presentation'></div>
        
      </div>
    </div>


    <div className='d-flex justify-content-center'>
    <div aria-hidden="true">
    <div className='zds-empty-state__title'>
        
        <span className='phrase' >Vous n'avez pas encore passé une commande</span></div>
    </div>
    </div>

    
      <ProfilForm />
    </div>
  );
}