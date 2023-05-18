'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from "react";
import axios from "axios";

export default function Ajouter() {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState(0);
  const [adresse, setAdresse] = useState('');

  return (
    <div>
      <div className='information'>
        <label>prenom:</label>
        <input type='text' onChange={(event) => { setPrenom(event.target.value) }} />
        <label>name:</label>
        <input type='text' onChange={(event) => { setNom(event.target.value) }} />
        <label>telephone:</label>
        <input type='number' onChange={(event) => { setTelephone(event.target.value) }} />
        <label>adresse:</label>
        <input type='text' onChange={(event) => { setAdresse(event.target.value) }} />
        <br />
      </div>
    </div>
  );
}