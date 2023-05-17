'use client';

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Component() {
    const [id, setId] = useState("")
    useEffect(() => {
        setId(window.location.pathname.split("/")[2])
    }, [])

    return (
        <Link href="/">{id}</Link>
    );
}