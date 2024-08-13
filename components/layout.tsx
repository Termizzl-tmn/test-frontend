"use client";

import Image from "next/image";
import Logo from "@/public/logo.png"
import Link from "next/link";

export default function LayoutComoponent({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="w-full">
            <div className="flex items-center justify-between w-[1440px] max-w-[1440px] mx-auto">
                <Image src={Logo} alt="logo" />
                <div className="grid grid-cols-6 gap-4 text-center">
                    <Link href={"#"} className="hover:underline">Home</Link>
                    <Link href={"#"} className="hover:underline">Solution</Link>
                    <Link href={"#"} className="hover:underline">News & Events</Link>
                    <Link href={"#"} className="hover:underline">Join Us</Link>
                    <Link href={"#"} className="hover:underline">About Us</Link>
                    <Link href={"#"} className="hover:underline">Contact Us</Link>
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}