"use client"
import Link from "next/link"

const Nav = () => {
    return (
        <nav className="flex justify-end pr-4 space-x-4 bg-black text-white text-2xl font-caveat ">
            <div>
                <div>
                    <ul className="flex space-x-4 md:">
                        <li>
                            <Link href='/' className="hover:underline">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link href='/about' className="hover:underline ">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='' className="hover:underline ">
                                Skill
                            </Link>
                        </li>
                        <li>
                            <Link href='' className="hover:underline ">
                                Contract
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>


        </nav>
    )
}

export default Nav