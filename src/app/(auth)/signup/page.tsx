"use client";
import { H1 } from "@/typography/custom";
import React from "react";
import AuthSubmit from "@/components/auth/auth-submit";
import { TSignUpSchema } from "@/types/types";
import { useRouter } from "next/navigation";
import { useSignUpFormContext } from "@/hooks/use-auth-context";
import AuthSignUpForm from "@/components/auth/auth-singup-form";
import AuthSignUpInput from "@/components/auth/auth-signup-input";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/user-context";
import LoadingOverlay from "@/components/loading/loading-overlay";
import AvatarDialog from "@/components/auth/avatar-dialog";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/custom/components/cards/c_card";
import { BorderBeam } from "@/components/custom/components/animated/c_border-beam";

// obi1@jedi.com

function SignUpPage() {
    const signUpForm = useSignUpFormContext();

    const { signUp } = useUserContext();

    const router = useRouter();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = signUpForm;

    const onSubmit = async (data: TSignUpSchema) => {
        try {
            await signUp(
                {
                    name: data.name,
                    email: data.email,
                    image: data.image,
                },
                data.password,
                data.confirmPassword
            );
            signUpForm.reset();
            router.push("/signin");
            toast.success(
                "Signed Up Successfully! Please sign in to continue..."
            );
        } catch (error) {
            console.error(error);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            {isSubmitting && <LoadingOverlay />}
            <Card className="min-w-[260px] relative">
                <CardHeader className="border-b pb-2!">
                    <H1 className="text-center font-special">Sign Up</H1>
                </CardHeader>
                <CardContent>
                    <AuthSignUpForm
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        customForm={signUpForm}
                    >
                        <AuthSignUpInput
                            customForm={signUpForm}
                            label="Username"
                            name="name"
                            placeholder="Choose a Username"
                            description="Min 4 characters"
                            errorMessage={errors.name?.message}
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
                        <AvatarDialog
                            customForm={signUpForm}
                            label="Select Avatar"
                            name="image"
                            errorMessage={errors.image?.message}
                        />
                        <AuthSubmit
                            isSubmitting={isSubmitting}
                            submittingText="Signing Up..."
                            buttonText="Sign Up"
                            linkHref="/signin"
                            linkText="Sign In"
                        />
                    </AuthSignUpForm>
                </CardContent>
                <BorderBeam colorFrom="#0284b8" colorTo="#e8c902" />
            </Card>
        </div>
    );
}

export default SignUpPage;
