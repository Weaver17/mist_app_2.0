import React from "react";
import { CustomButton } from "../custom/c_button";
import { MutedCustom } from "@/typography/custom";
import Link from "next/link";

type AuthSubmitProps = {
    isSubmitting: boolean;
    submittingText: string;
    buttonText: string;
    linkText: string;
    linkHref: string;
};

function AuthSubmit({
    submittingText,
    isSubmitting,
    buttonText,
    linkHref,
    linkText,
}: AuthSubmitProps) {
    return (
        <>
            <CustomButton className="w-full text-muted-light font-special">
                {isSubmitting ? submittingText : buttonText}
            </CustomButton>
            <MutedCustom className="text-center">
                Already have an account?{" "}
                <Link
                    href={linkHref}
                    className="underline underline-offset-4 hover:text-foreground"
                >
                    {linkText}
                </Link>
            </MutedCustom>
        </>
    );
}

export default AuthSubmit;
