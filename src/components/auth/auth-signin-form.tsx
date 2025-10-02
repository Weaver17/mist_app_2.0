"use client";

import { TSignInSchema } from "@/types/types";
import { Form } from "../ui/form";
import { UseFormReturn } from "react-hook-form";

type AuthSignInFormProps = {
    customForm: UseFormReturn<TSignInSchema>;
    children: React.ReactNode;
    onSubmit: (data: TSignInSchema) => Promise<void>;
    handleSubmit: UseFormReturn<TSignInSchema>["handleSubmit"];
};

function AuthSignInForm({
    customForm,
    children,
    onSubmit,
    handleSubmit,
}: AuthSignInFormProps) {
    return (
        <Form {...customForm}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="flex flex-col gap-4 max-w-[400px] mx-auto"
            >
                <div className="flex flex-col gap-4">{children}</div>
            </form>
        </Form>
    );
}

export default AuthSignInForm;
