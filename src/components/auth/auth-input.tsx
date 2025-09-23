import React from "react";
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { CustomInput } from "../custom/c_input";
import { FieldValues, UseFormReturn } from "react-hook-form";

type AuthInputProps = {
    customForm: UseFormReturn<FieldValues, FieldValues>;
    label: string;
    name: string;
    placeholder?: string;
    description?: string;
    type?: string;
};

function AuthInput({
    customForm,
    label,
    name,
    placeholder,
    description,
    type,
}: AuthInputProps) {
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
                        <CustomInput
                            className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                            placeholder={placeholder || ""}
                            {...field}
                            type={type || "text"}
                            value={field.value}
                        />
                    </FormControl>
                    <FormDescription className="text-xs font-semibold">
                        {description}
                    </FormDescription>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}

export default AuthInput;
