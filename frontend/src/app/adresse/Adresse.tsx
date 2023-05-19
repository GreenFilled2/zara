'use client';
import React from 'react';
import Link from 'next/link';

export default function Adresse() {
  return (
    <div id="achat-page">
      <div className="d-flex bg-light mb-3">
        <div className="me-auto p-2">
          <Link href={"/ajouter"} legacyBehavior>
            <button className='nav-row__item link' tabIndex={0}>
              Ajouter une adresse
            </button>
          </Link>
        </div>
     
      </div>
    </div>
  );
}