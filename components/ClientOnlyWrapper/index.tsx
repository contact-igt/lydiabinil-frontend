"use client";
import { useEffect, useState } from "react";


export interface data {
    children: any
}

export const ClientOnly = ({ children }: data) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return children;
}
