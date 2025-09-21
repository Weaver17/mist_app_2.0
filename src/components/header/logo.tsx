import React from "react";
import images from "@/lib/images";
import Image from "next/image";

function Logo() {
    return (
        <div className="h-[60px]">
            <Image
                src={images.logo}
                alt="Mist Logo"
                height={20}
                width={20}
                className="object-contain h-[60px] w-fit"
            />
        </div>
    );
}

export default Logo;
