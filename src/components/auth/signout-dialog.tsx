"use client";

import { useUserContext } from "@/contexts/user-context";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../custom/components/modals/c_dialog";
import { Button } from "../custom/components/buttons/c_button";
import { Separator } from "../custom/components/c_separator";

function SignOutDialog() {
    const { currentUser, logout } = useUserContext();

    const onSignOutClick = () => {
        logout();
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-muted/50! hover:bg-card!"
                >
                    Sign Out
                </Button>
            </DialogTrigger>
            <DialogContent className="bg-card!">
                <DialogTitle className="hidden">Sign Out</DialogTitle>
                <DialogHeader className="text-center font-semibold">
                    Are you sure you want to sign out, {currentUser?.name}?
                </DialogHeader>
                <Separator />
                <DialogFooter className="mx-auto mt-4">
                    <Button variant="destructive" onClick={onSignOutClick}>
                        Sign Out
                    </Button>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default SignOutDialog;
