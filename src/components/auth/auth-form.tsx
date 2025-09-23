"use client";

import { MutedCustom } from "@/typography/custom";
import { CustomButton } from "../custom/c_button";
import { Form } from "../ui/form";
import Link from "next/link";
import { FieldValues, UseFormReturn } from "react-hook-form";
import AuthSubmit from "./auth-submit";

type AuthFormProps = {
    customForm: UseFormReturn<FieldValues, FieldValues>;
    children: React.ReactNode;
};

function AuthForm({ customForm, children }: AuthFormProps) {
    return (
        <Form {...customForm}>
            <form
                action=""
                className="flex flex-col gap-4 max-w-[400px] mx-auto"
            >
                <div className="flex flex-col gap-4">{children}</div>
            </form>
        </Form>
    );
}

export default AuthForm;
