import React from "react";
import {
    CustomDialog,
    CustomDialogClose,
    CustomDialogContent,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger,
} from "../custom/c_dialog";
import { CustomButton } from "../custom/c_button";
import { CustomSeparator } from "../custom/c_separator";
import AvatarImg from "../avatar/avatar-img";
import avatars from "@/lib/avatars";
import { TAvatarImg, TSignUpSchema } from "@/types/types";
import { UseFormReturn } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import {
    CustomRadioGroup,
    CustomRadioGroupItem,
} from "../custom/c_radio-group";

type AvatarDialogProps = {
    customForm: UseFormReturn<TSignUpSchema>;
    label: string;
    name: keyof TSignUpSchema;
    errorMessage: string | undefined;
};

function AvatarDialog({
    customForm,
    label,
    name,
    errorMessage,
}: AvatarDialogProps) {
    return (
        <FormField
            control={customForm.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <CustomDialog>
                        <CustomDialogTrigger asChild>
                            <CustomButton
                                asChild
                                variant="link"
                                className="text-foreground! p-0! mr-auto font-mono! font-semibold!"
                            >
                                <FormLabel>{label}</FormLabel>
                            </CustomButton>
                        </CustomDialogTrigger>
                        <CustomDialogContent className="bg-border! border-card! text-card!">
                            <CustomDialogTitle className="hidden">
                                Select Avatar
                            </CustomDialogTitle>
                            <CustomDialogHeader>
                                Select an Avatar:
                            </CustomDialogHeader>
                            <CustomSeparator className="bg-card!" />
                            <FormControl>
                                <CustomRadioGroup
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="grid grid-cols-3 gap-4 mx-auto"
                                >
                                    {avatars.map((avatar: TAvatarImg) => (
                                        <FormItem
                                            key={avatar.id}
                                            className="flex gap-1 items-center"
                                        >
                                            <FormControl>
                                                <CustomRadioGroupItem
                                                    value={avatar.alt}
                                                />
                                            </FormControl>
                                            <FormLabel asChild>
                                                <AvatarImg
                                                    src={avatar.src}
                                                    alt={avatar.alt}
                                                    title={avatar.title}
                                                />
                                            </FormLabel>
                                        </FormItem>
                                    ))}
                                </CustomRadioGroup>
                            </FormControl>
                            <CustomSeparator className="bg-card!" />
                            <CustomDialogClose asChild>
                                <CustomButton>Confirm</CustomButton>
                            </CustomDialogClose>
                        </CustomDialogContent>
                    </CustomDialog>
                    {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
                </FormItem>
            )}
        />
    );
}

export default AvatarDialog;
