"use client";
import { H1Custom } from "@/typography/custom";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "@/components/custom/c_card";
import React from "react";
import AuthSubmit from "@/components/auth/auth-submit";
import { TSignUpSchema } from "@/types/types";
import { createUser } from "@/actions/actions";
import { useRouter } from "next/navigation";
import { useSignUpFormContext } from "@/hooks/use-auth-context";
import AuthSignUpForm from "@/components/auth/auth-singup-form";
import AuthSignUpInput from "@/components/auth/auth-signup-input";
import { toast } from "sonner";

// obi1@jedi.com

function SignUpPage() {
    const signUpForm = useSignUpFormContext();

    const router = useRouter();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = signUpForm;

    const onSubmit = async (data: TSignUpSchema) => {
        try {
            await createUser(data);
            signUpForm.reset();
            router.push("/");
            toast.success(
                "Signed Up Successfully! Sending you to the homepage..."
            );
        } catch (error) {
            console.error(error);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            <CustomCard className="min-w-[260px]">
                <CustomCardHeader className="border-b pb-2!">
                    <H1Custom className="text-center font-special">
                        Sign Up
                    </H1Custom>
                </CustomCardHeader>
                <CustomCardContent>
                    <AuthSignUpForm
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        customForm={signUpForm}
                    >
                        <AuthSignUpInput
                            customForm={signUpForm}
                            label="Username"
                            name="username"
                            placeholder="Choose a Username"
                            description="Min 4 characters"
                            errorMessage={errors.username?.message}
                        />
                        <AuthSignUpInput
                            customForm={signUpForm}
                            label="Email"
                            name="email"
                            placeholder="gamer@example.com"
                            description="Enter your Email"
                            type="email"
                            errorMessage={errors.email?.message}
                        />
                        <AuthSignUpInput
                            customForm={signUpForm}
                            label="Password"
                            name="password"
                            placeholder="Choose Your Password"
                            description="Min 8 characters, 1 letter, 1 number, 1 special character"
                            type="password"
                            errorMessage={errors.password?.message}
                        />
                        <AuthSignUpInput
                            customForm={signUpForm}
                            label="Confirm Password"
                            name="confirmPassword"
                            placeholder="Passwords Must Match"
                            description="Confirm Your Password"
                            type="password"
                            errorMessage={errors.confirmPassword?.message}
                        />
                        <AuthSubmit
                            isSubmitting={isSubmitting}
                            submittingText="Signing Up..."
                            buttonText="Sign Up"
                            linkHref="/signin"
                            linkText="Sign In"
                        />
                    </AuthSignUpForm>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignUpPage;
