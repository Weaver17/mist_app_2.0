import React from "react";
import { Muted } from "@/typography/custom";
import Link from "next/link";
import { Button } from "../custom/components/buttons/c_button";

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
            <Button className="w-full  font-special">
                {isSubmitting ? submittingText : buttonText}
            </Button>
            <Muted className="text-center">
                Already have an account?{" "}
                <Link
                    href={linkHref}
                    className="underline underline-offset-4 hover:text-foreground"
                >
                    {linkText}
                </Link>
            </Muted>
        </>
    );
}

export default AuthSubmit;
