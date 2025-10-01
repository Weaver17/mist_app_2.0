"use client";
import { changeUsername } from "@/actions/actions";
import { CustomButton } from "@/components/custom/c_button";
import {
    CustomDialog,
    CustomDialogClose,
    CustomDialogContent,
    CustomDialogDescription,
    CustomDialogFooter,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger,
} from "@/components/custom/c_dialog";
import { CustomInput } from "@/components/custom/c_input";
import { CustomSeparator } from "@/components/custom/c_separator";
import { Form, FormField } from "@/components/ui/form";
import { useUserContext } from "@/contexts/user-context";
import { changeUsernameSchema } from "@/schema/auth";
import { TChangeUsernameSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function EditDialog() {
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const { currentUser, editUsername } = useUserContext();

    const [usernameValue, setUsernameValue] = useState(currentUser!.name);

    const editUsernameForm = useForm<TChangeUsernameSchema>({
        resolver: zodResolver(changeUsernameSchema),
        defaultValues: {
            newName: currentUser?.name,
        },
    });

    const { handleSubmit } = editUsernameForm;

    const handleEditClick = () => {
        setIsEditDialogOpen(true);
    };

    const handleEditClose = () => {
        setIsEditDialogOpen(false);
    };

    const onSubmit = async (data: { newName: string | undefined }) => {
        try {
            if (data.newName === undefined) {
                throw Error("Username must be more than 4 characters");
            }
            await changeUsername(currentUser!.email, {
                newName: data.newName,
            });
            editUsername(data.newName.trim());
            setUsernameValue(data.newName.trim());
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            setIsEditDialogOpen(false);
        }
    };

    return (
        <CustomDialog>
            <CustomDialogTrigger asChild>
                <CustomButton
                    onClick={handleEditClick}
                    variant="secondary"
                    className="w-full"
                >
                    Change Username
                </CustomButton>
            </CustomDialogTrigger>
            <CustomDialogContent
                aria-describedby="edit-username"
                className="bg-card!"
            >
                <Form {...editUsernameForm}>
                    <form
                        className="flex flex-col gap-2 p-2"
                        onSubmit={handleSubmit(onSubmit)}
                        action=""
                    >
                        <CustomDialogTitle className="hidden">
                            Edit Username
                        </CustomDialogTitle>
                        <CustomDialogHeader className="text-sm font-special md:text-lg lg:text-2xl">
                            Edit Username
                        </CustomDialogHeader>
                        <CustomDialogDescription>
                            Edit your username here. Click save to apply
                            changes.
                        </CustomDialogDescription>
                        <CustomSeparator className="mb-6" />
                        <FormField
                            control={editUsernameForm.control}
                            name="newName"
                            render={({ field }) => (
                                <CustomInput
                                    className="rounded-none! border-t-0 border-r-0 border-b! border-l! border-foreground! font-mono"
                                    defaultValue={usernameValue}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <CustomDialogFooter className="mt-4 justify-center!">
                            <CustomDialogClose asChild>
                                <CustomButton
                                    type="button"
                                    variant="outline"
                                    className="bg-muted-dark/50! hover:bg-card!"
                                    onClick={handleEditClose}
                                >
                                    Cancel
                                </CustomButton>
                            </CustomDialogClose>
                            <CustomDialogClose asChild>
                                <CustomButton
                                    type="submit"
                                    className="bg-primary! hover:bg-secondary!"
                                >
                                    Save
                                </CustomButton>
                            </CustomDialogClose>
                        </CustomDialogFooter>
                    </form>
                </Form>
            </CustomDialogContent>
        </CustomDialog>
    );
}

export default EditDialog;
