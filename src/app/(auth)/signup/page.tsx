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

function SignUpPage() {
    const signUpForm = useForm();

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            <CustomCard className="min-w-[260px]">
                <CustomCardHeader className="border-b pb-2!">
                    <H1Custom className="text-center font-special">
                        Sign Up
                    </H1Custom>
                </CustomCardHeader>
                <CustomCardContent>
                    <AuthForm customForm={signUpForm}>
                        <AuthInput
                            customForm={signUpForm}
                            label="Username"
                            placeholder="Choose a Username"
                            description="Min 4 characters"
                        />
                        <AuthInput
                            customForm={signUpForm}
                            label="Email"
                            placeholder="gamer@example.com"
                            description="Enter your Email"
                            type="email"
                        />
                        <AuthInput
                            customForm={signUpForm}
                            label="Password"
                            placeholder="Choose Your Password"
                            description="Min 8 characters, 1 letter, 1 number, 1 special character"
                            type="password"
                        />
                        <AuthInput
                            customForm={signUpForm}
                            label="Confirm Password"
                            placeholder="Passwords Must Match"
                            description="Confirm Your Password"
                            type="password"
                        />
                        <AuthSubmit
                            buttonText="Sign Up"
                            linkHref="/signin"
                            linkText="Sign In"
                        />
                    </AuthForm>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignUpPage;
