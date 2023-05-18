'use client'

import React from 'react';
import Modifier from './Modifier';
import './Modifier';
import Link from 'next/link';

export default function modifier() {
  return (
    <div id="modifier-page">
       <div className="d-flex bg-light mb-3">
        <div className="me-auto p-2">Flex item</div>
        <div className="p-2">Flex item</div>
        
      </div>
      <Modifier />
    </div>
  );
  
  }