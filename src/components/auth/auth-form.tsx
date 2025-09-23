"use client";

import { Form } from "../ui/form";
import { FieldValues, UseFormReturn } from "react-hook-form";

type AuthFormProps = {
    customForm: UseFormReturn<FieldValues, FieldValues>;
    children: React.ReactNode;
};

const handleSubmit = (data: FieldValues) => {
    console.log(data);
};

function AuthForm({ customForm, children }: AuthFormProps) {
    return (
        <Form {...customForm}>
            <form
                onSubmit={customForm.handleSubmit(handleSubmit)}
                action=""
                className="flex flex-col gap-4 max-w-[400px] mx-auto"
            >
                <div className="flex flex-col gap-4">{children}</div>
            </form>
        </Form>
    );
}

export default AuthForm;
