"use client";
import { H1 } from "@/typography/custom";
import AuthSubmit from "@/components/auth/auth-submit";
import AuthSignInForm from "@/components/auth/auth-signin-form";
import AuthSignInInput from "@/components/auth/auth-signin-input";
import { useSignInFormContext } from "@/hooks/use-auth-context";
import { useRouter } from "next/navigation";
import { TSignInSchema } from "@/types/types";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/user-context";
import LoadingOverlay from "@/components/loading/loading-overlay";
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/custom/components/cards/c_card";
import { BorderBeam } from "@/components/custom/components/animated/c_border-beam";

function SignInPage() {
    const signInForm = useSignInFormContext();

    const { login } = useUserContext();

    const router = useRouter();
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
    } = signInForm;

    const onSubmit = async (data: TSignInSchema) => {
        try {
            await login(data);
            signInForm.reset();
            router.push("/");
            toast.success(
                "Signed In Successfully! Sending you to the homepage..."
            );
        } catch (error) {
            console.error(error);
            toast.error("Invalid Credentials");
        }
    };

    return (
        <div className="p-4 flex flex-col gap-4 w-full mx-auto md:p-12 lg:p-18">
            {isSubmitting && <LoadingOverlay />}
            <Card className="relative">
                <CardHeader className="border-b pb-2! ">
                    <H1 className="text-center font-special">Sign In</H1>
                </CardHeader>
                <CardContent>
                    <AuthSignInForm
                        onSubmit={onSubmit}
                        handleSubmit={handleSubmit}
                        customForm={signInForm}
                    >
                        <AuthSignInInput
                            customForm={signInForm}
                            label="Email"
                            name="email"
                            description="Enter your Email"
                            type="email"
                            errorMessage={errors.email?.message}
                        />
                        <AuthSignInInput
                            customForm={signInForm}
                            label="Password"
                            name="password"
                            description="Enter Your Password"
                            type="password"
                            errorMessage={errors.password?.message}
                        />
                        <AuthSubmit
                            isSubmitting={isSubmitting}
                            submittingText="Signing In..."
                            buttonText="Sign In"
                            linkHref="/signup"
                            linkText="Sign Up"
                        />
                    </AuthSignInForm>
                </CardContent>
                <BorderBeam colorFrom="#0284b8" colorTo="#e8c902" />
            </Card>
        </div>
    );
}

export default SignInPage;
