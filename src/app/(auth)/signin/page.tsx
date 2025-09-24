"use client";
import { H1Custom } from "@/typography/custom";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "@/components/custom/c_card";
import React from "react";
import AuthSubmit from "@/components/auth/auth-submit";
import AuthSignInForm from "@/components/auth/auth-signin-form";
import AuthSignInInput from "@/components/auth/auth-signin-input";
import { useSignInFormContext } from "@/hooks/use-auth-context";
import { useRouter } from "next/navigation";
import { TSignInSchema } from "@/types/types";
import { signIn } from "@/actions/actions";

function SignInPage() {
    const signInForm = useSignInFormContext();

    const router = useRouter();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = signInForm;

    const onSubmit = async (data: TSignInSchema) => {
        try {
            await signIn(data);
            signInForm.reset();
            router.push("/");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            <CustomCard>
                <CustomCardHeader className="border-b pb-2!">
                    <H1Custom className="text-center font-special">
                        Sign In
                    </H1Custom>
                </CustomCardHeader>
                <CustomCardContent>
                    <AuthSignInForm
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        errors={errors}
                        isSubmitting={isSubmitting}
                        customForm={signInForm}
                    >
                        <AuthSignInInput
                            customForm={signInForm}
                            label="Email"
                            name="email"
                            description="Enter your Email"
                            type="email"
                        />
                        <AuthSignInInput
                            customForm={signInForm}
                            label="Password"
                            name="password"
                            description="Enter Your Password"
                            type="password"
                        />
                        <AuthSubmit
                            buttonText="Sign In"
                            linkHref="/signup"
                            linkText="Sign Up"
                        />
                    </AuthSignInForm>
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignInPage;
