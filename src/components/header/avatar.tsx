import React from "react";
import {
    CustomAvatar,
    CustomAvatarFallback,
    CustomAvatarImage,
} from "../custom/c_avatar";
import images from "@/lib/images";

function Avatar() {
    const avatar = images.logo;

    return (
        <div className="bg-border rounded-lg p-4 shadow-md">
            <CustomAvatar>
                <CustomAvatarImage src={avatar} alt="Avatar" />
                <CustomAvatarFallback className="text-secondary">
                    AZ
                </CustomAvatarFallback>
            </CustomAvatar>
        </div>
    );
}

export default Avatar;
