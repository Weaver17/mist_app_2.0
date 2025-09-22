import React from "react";
import Logo from "../header/logo";
import {
    CustomCard,
    CustomCardContent,
    CustomCardFooter,
} from "../custom/c_card";
import { MutedCustom } from "@/typography/custom";
import Link from "next/link";

function AuthLogo() {
    return (
        <div className="p-4 flex flex-col gap-4 w-5/6 mx-auto md:w-full md:p-12 lg:p-18">
            <CustomCard>
                <CustomCardContent className="flex flex-col gap-8">
                    <div className="flex justify-center items-center border-b pb-4">
                        <Logo />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-2 list-disc max-w-2/3 mx-auto font-semibold">
                            <li>Browse Hundreds of Games!</li>
                            <li>All of them Free!</li>
                            <li>See Specs and other details!</li>
                            <li>
                                Overwatch 2, Valorant, Marvel Heroes, and more!
                            </li>
                            <li>Sign Up to Save Games to Your Profile!</li>
                        </ul>
                    </div>
                </CustomCardContent>
                <CustomCardFooter className="mx-auto">
                    <MutedCustom className="text-center">
                        Made with help from{" "}
                        <Link
                            className="underline underline-offset-4 hover:text-foreground"
                            href="/"
                        >
                            www.freetogame.com
                        </Link>
                    </MutedCustom>
                </CustomCardFooter>
            </CustomCard>
        </div>
    );
}

export default AuthLogo;
