"use client";

import { TSignUpSchema } from "@/types/types";
import { UseFormReturn } from "react-hook-form";
import { Form } from "../custom/components/form/c_form";

type AuthSignUpFormProps = {
    customForm: UseFormReturn<TSignUpSchema>;
    children: React.ReactNode;
    onSubmit: (data: TSignUpSchema) => Promise<void>;
    handleSubmit: UseFormReturn<TSignUpSchema>["handleSubmit"];
};

function AuthSignUpForm({
    customForm,
    children,
    onSubmit,
    handleSubmit,
}: AuthSignUpFormProps) {
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

export default AuthSignUpForm;
