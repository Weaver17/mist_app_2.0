import React from "react";
import {
    CustomAvatar,
    CustomAvatarFallback,
    CustomAvatarImage,
} from "../custom/c_avatar";
import images from "@/lib/images";
import ProfileSheet from "../profile/profile-sheet";

function Avatar() {
    const avatar = images.logo;

    return (
        <div className="bg-border rounded-lg p-4 shadow-md">
            <ProfileSheet />
        </div>
    );
}

export default Avatar;
