'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
export default function Compte() {
  const [name, setName] = useState([]);
  const [showname, setShowNames] = useState(false);

  const handleFetchNames = async () => {
    try {
      const res = await axios.get('http://localhost:3001/nom/compte');
      setName(res.data);
      setShowNames(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="d-flex flex-column mb-3">
        <div className="p-2">
        <button className='nav-row__item link' tabIndex={0} onClick={handleFetchNames}>
                    Name
             </button>
          
        </div>
        <div className="p-2">
        <Link href={"/adresse"} legacyBehavior>
            <a className='nav-row__item link' tabIndex={0}>
              Adresse
            </a>
          </Link>


        </div>
        <div className="p-2">
        <Link href={"/modifier"} legacyBehavior>
            <a className='nav-row__item link' tabIndex={0}>
              Modifier mot de passe
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}