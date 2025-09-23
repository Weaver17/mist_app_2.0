import { CustomButton } from "@/components/custom/c_button";
import { H1Custom, H3Custom } from "@/typography/custom";
import React from "react";

function ProfilePage() {
    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto">
            <div className="border-b border-secondary pb-4 flex flex-col gap-4 w-full mx-auto">
                <H1Custom className="text-center font-special">
                    Username
                </H1Custom>
            </div>
            <div className="flex gap-12 py-4 px-8">
                <div className="w-1/4">
                    <div className="flex flex-col gap-8 py-20">
                        <CustomButton variant="secondary">
                            Change Username
                        </CustomButton>
                        <CustomButton
                            variant="outline"
                            className="text-muted-light! bg-muted-dark! hover:bg-card! hover:text-foreground!"
                        >
                            Sign Out
                        </CustomButton>
                    </div>
                </div>
                <div className="w-3/4">
                    <H3Custom>Saved Games</H3Custom>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
