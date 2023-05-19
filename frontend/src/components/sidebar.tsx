import React, { useState } from 'react';
import Link from 'next/link';
import { Nav } from 'react-bootstrap';

import './nav.css'

export default function Sidebar() {
    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen(!open);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <div className={`sidebar ${open ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <button className="close-btn" onClick={toggleSidebar}>
                        <span className="close-icon">&times;</span>
                    </button>
                </div>

                <div className="sidebar-menu">
                    <h3>Women</h3>
                    <ul className="category-list">
                        <li>
                            <Link href="/women/skirt"  >
                                <span className="category-item">Skirt</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/women/shirt">
                                <span className="category-item">Shirt</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/women/perfume">
                                <span className="category-item">Perfume</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/women/top">
                                <span className="category-item">Top</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/women/jeans">
                                <span className="category-item">Jeans</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/women/bag">
                                <span className="category-item">Bag</span>
                            </Link>
                        </li>
                    </ul>

                    <h3>Men</h3>
                    <ul className="category-list">
                        <li>
                            <Link href="/men/shirt">
                                <span className="category-item">Shirt</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/men/jeans">
                                <span className="category-item">Jeans</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/men/perfume">
                                <span className="category-item">Perfume</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <style jsx>{`
        
      `}</style>
        </>
    );
}