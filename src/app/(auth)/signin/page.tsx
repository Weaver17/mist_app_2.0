"use client";
import { H1Custom } from "@/typography/custom";
import {
    CustomCard,
    CustomCardContent,
    CustomCardHeader,
} from "@/components/custom/c_card";
import AuthSubmit from "@/components/auth/auth-submit";
import AuthSignInForm from "@/components/auth/auth-signin-form";
import AuthSignInInput from "@/components/auth/auth-signin-input";
import { useSignInFormContext } from "@/hooks/use-auth-context";
import { useRouter } from "next/navigation";
import { TSignInSchema } from "@/types/types";
import { signIn } from "@/actions/actions";
import { toast } from "sonner";
import { useUserContext } from "@/contexts/user-context";

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
            const user = await signIn(data);
            await login(user);
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
                </CustomCardContent>
            </CustomCard>
        </div>
    );
}

export default SignInPage;
