"use client"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="flex justify-end pr-4 space-x-4 bg-black text-white ">
            <Link href='/' className="hover:underline">
                Home
            </Link>
            <Link href='/about' className="hover:underline">
                About
            </Link>
            <Link href='' className="hover:underline">
                Skill
            </Link>
            <Link href='' className="hover:underline">
                Contract    
            </Link>

        </nav>
    )
}

export default Nav