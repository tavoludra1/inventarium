"use client"

import { UserButton } from "@clerk/nextjs";
import { Crown } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";




const font = Poppins({
    weight: "600",
    subsets: ["latin-ext"],
})


export const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                <Link href="/">
                    <div className="flex items-center space-x-1">
                        <div className={cn(
                            "bg-gray-500 w-8 h-8 rounded-full flex items-center justify-center text-white text-lg",
                            font.className,
                        )}>
                            I
                        </div>
                        <span className={cn(
                            "fill-white dark:text-white text-lg",
                            font.className,
                        )}>
                            nventarium
                        </span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center gap-x-3">
                <Button variant="admin" size="sm">
                    Admin
                    <Crown className="h-4 w-4 fill-white text-white ml-2"/>
                    
                </Button>
                <ModeToggle />
                <UserButton />

            </div>
        </div>
    );
};