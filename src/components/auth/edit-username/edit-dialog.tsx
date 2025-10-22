"use client";
import { changeUsername } from "@/actions/actions";
import { Button } from "@/components/custom/components/buttons/c_button";
import { Form, FormField } from "@/components/custom/components/form/c_form";
import { SquareInput } from "@/components/custom/components/form/c_input";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/custom/components/modals/c_dialog";

import { useUserContext } from "@/contexts/user-context";
import { changeUsernameSchema } from "@/schema/auth";
import { TChangeUsernameSchema } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Separator } from "@radix-ui/react-select";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function EditDialog() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

    const { currentUser, editUsername } = useUserContext();

    const [usernameValue, setUsernameValue] = useState(currentUser?.name);

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
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    onClick={handleEditClick}
                    variant="secondary"
                    className="w-full"
                >
                    Change Username
                </Button>
            </DialogTrigger>
            <DialogContent
                aria-describedby="edit-username"
                className="bg-card!"
            >
                <Form {...editUsernameForm}>
                    <form
                        className="flex flex-col gap-2 p-2"
                        onSubmit={handleSubmit(onSubmit)}
                        action=""
                    >
                        <DialogTitle className="hidden">
                            Edit Username
                        </DialogTitle>
                        <DialogHeader className="text-sm font-special md:text-lg lg:text-2xl">
                            Edit Username
                        </DialogHeader>
                        <DialogDescription>
                            Edit your username here. Click save to apply
                            changes.
                        </DialogDescription>
                        <Separator className="mb-6" />
                        <FormField
                            control={editUsernameForm.control}
                            name="newName"
                            render={({ field }) => (
                                <SquareInput
                                    className="font-mono"
                                    defaultValue={usernameValue}
                                    onChange={field.onChange}
                                />
                            )}
                        />
                        <DialogFooter className="mt-4 justify-center!">
                            <DialogClose asChild>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="bg-muted/50! hover:bg-card!"
                                    onClick={handleEditClose}
                                >
                                    Cancel
                                </Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button
                                    type="submit"
                                    className="bg-primary! hover:bg-secondary!"
                                >
                                    Save
                                </Button>
                            </DialogClose>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

export default EditDialog;
