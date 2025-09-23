"use client";
import { H1Custom } from "@/typography/custom";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "@/components/custom/c_card";
import React from "react";
import { useForm } from "react-hook-form";
import AuthForm from "@/components/auth/auth-form";
import AuthInput from "@/components/auth/auth-input";
import AuthSubmit from "@/components/auth/auth-submit";

function SignInPage() {
    const signInForm = useForm();

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            <CustomCard>
                <CustomCardHeader className="border-b pb-2!">
                    <H1Custom className="text-center font-special">
                        Sign In
                    </H1Custom>
                </CustomCardHeader>
                <CustomCardContent>
                    <AuthForm customForm={signInForm}>
                        <AuthInput
                            customForm={signInForm}
                            label="Email"
                            description="Enter your Email"
                            type="email"
                        />
                        <AuthInput
                            customForm={signInForm}
                            label="Password"
                            description="Enter Your Password"
                            type="password"
                        />
                        <AuthSubmit
                            buttonText="Sign In"
                            linkHref="/signup"
                            linkText="Sign Up"
                        />
                    </AuthForm>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignInPage;
