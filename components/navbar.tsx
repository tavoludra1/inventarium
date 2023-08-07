"use-client"

import { UserButton } from "@clerk/nextjs";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";



const font = Poppins({
    weight: "600",
    subsets: ["latin-ext"],
})


export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary ">
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center space-x-2">
                        <div className={cn(
                            "bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg",
                            font.className,
                        )}>
                            I
                        </div>
                        <span className={cn(
                            "text-lg text-gray-500",
                            font.className,
                        )}>
                            nventarium
                        </span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <UserButton />

            </div>
        </div>
    );
};