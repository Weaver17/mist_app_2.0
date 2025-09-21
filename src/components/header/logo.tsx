import React from "react";
import images from "@/lib/images";
import Image from "next/image";

function Logo() {
    return (
        <div className="shadow-lg bg-border rounded-sm p-2">
            <Image
                src={images.logo2}
                alt="Mist Logo"
                height={60}
                width={187}
                className="object-contain h-[40px]! w-fit md:h-[60px]!"
            />
        </div>
    );
}

export default Logo;
