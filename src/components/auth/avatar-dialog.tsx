import React from "react";

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
} from "../custom/components/form/c_form";
import { Button } from "../custom/components/buttons/c_button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../custom/components/modals/c_dialog";
import { Separator } from "../custom/components/c_separator";
import {
    RadioGroup,
    RadioGroupItem,
} from "../custom/components/form/c_radio-group";

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
                    <Dialog>
                        <DialogTrigger asChild className="[box-shadow:(0,0,0)]">
                            <Button
                                asChild
                                variant="shadowless"
                                className="text-foreground! p-0! mr-auto font-mono! font-semibold!"
                            >
                                <FormLabel>{label}</FormLabel>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="bg-border! border-card! text-card!">
                            <DialogTitle className="hidden">
                                Select Avatar
                            </DialogTitle>
                            <DialogHeader>Select an Avatar:</DialogHeader>
                            <Separator className="bg-card!" />
                            <FormControl>
                                <RadioGroup
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
                                                <RadioGroupItem
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
                                </RadioGroup>
                            </FormControl>
                            <Separator className="bg-card!" />
                            <DialogClose asChild>
                                <Button>Confirm</Button>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                    {errorMessage && <FormMessage>{errorMessage}</FormMessage>}
                </FormItem>
            )}
        />
    );
}

export default AvatarDialog;
