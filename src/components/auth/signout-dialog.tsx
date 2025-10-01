"use client";
import {
    CustomDialog,
    CustomDialogClose,
    CustomDialogContent,
    CustomDialogFooter,
    CustomDialogHeader,
    CustomDialogTitle,
    CustomDialogTrigger,
} from "../custom/c_dialog";
import { useUserContext } from "@/contexts/user-context";
import { CustomButton } from "../custom/c_button";
import { CustomSeparator } from "../custom/c_separator";

function SignOutDialog() {
    const { currentUser, logout } = useUserContext();

    const onSignOutClick = () => {
        logout();
    };

    return (
        <CustomDialog>
            <CustomDialogTrigger asChild>
                <CustomButton
                    variant="outline"
                    className="bg-muted-dark/50! hover:bg-card!"
                >
                    Sign Out
                </CustomButton>
            </CustomDialogTrigger>
            <CustomDialogContent className="bg-card!">
                <CustomDialogTitle className="hidden">
                    Sign Out
                </CustomDialogTitle>
                <CustomDialogHeader className="text-center font-semibold">
                    Are you sure you want to sign out, {currentUser?.name}?
                </CustomDialogHeader>
                <CustomSeparator />
                <CustomDialogFooter className="mx-auto mt-4">
                    <CustomButton
                        variant="destructive"
                        onClick={onSignOutClick}
                    >
                        Sign Out
                    </CustomButton>
                    <CustomDialogClose asChild>
                        <CustomButton variant="outline">Cancel</CustomButton>
                    </CustomDialogClose>
                </CustomDialogFooter>
            </CustomDialogContent>
        </CustomDialog>
    );
}

export default SignOutDialog;
