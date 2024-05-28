import Link from "next/link";
import Clock from "@/components/clock";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {FaGithub} from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="  px-10 md:px-20 lg:px-40 bg-gray-400  py-6 flex justify-between items-center rounded-md  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
            <Link href="/" className="text-2xl text-gray-900 font-bold">TaskIt</Link>
            <div className="flex gap-6 items-center">
                <div>
                    <Clock/>
                </div>
                <div className="flex gap-4 items-center">
                    <SignedOut>
                        <SignInButton className=" bg-black text-white px-2 py-1 rounded-md"/>
                        <SignUpButton className=" border-[2px] border-black px-2 py-1 rounded-md"/>
                    </SignedOut>

                    <SignedIn>
                        <UserButton/>
                    </SignedIn>
                </div>
            </div>
        </div>
    )
}