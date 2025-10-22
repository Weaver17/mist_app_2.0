import React from "react";

import { UseFormReturn } from "react-hook-form";
import { TSignUpSchema } from "@/types/types";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../custom/components/form/c_form";
import { SquareInput } from "../custom/components/form/c_input";

type AuthSignUpInputProps = {
    customForm: UseFormReturn<TSignUpSchema>;
    label: string;
    name: keyof TSignUpSchema;
    placeholder?: string;
    description?: string;
    type?: string;
    errorMessage: string | undefined;
};

function AuthSignUpInput({
    customForm,
    label,
    name,
    placeholder,
    description,
    type,
    errorMessage,
}: AuthSignUpInputProps) {
    return (
        <FormField
            control={customForm.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel className="font-mono font-semibold">
                        {label}
                    </FormLabel>
                    <FormControl>
                        <SquareInput
                            placeholder={placeholder || ""}
                            {...field}
                            type={type || "text"}
                            value={field.value}
                        />
                    </FormControl>
                    {errorMessage ? (
                        <FormMessage>{errorMessage}</FormMessage>
                    ) : (
                        <FormDescription className="text-xs font-semibold">
                            {description}
                        </FormDescription>
                    )}
                </FormItem>
            )}
        />
    );
}

export default AuthSignUpInput;
