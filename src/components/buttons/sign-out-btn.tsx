"use client";
import { useUserContext } from "@/contexts/user-context";
import { CustomButton } from "../custom/c_button";

function SignOutBtn() {
    const { logout } = useUserContext();

    const onSignOutClick = () => {
        logout();
    };
    return (
        <CustomButton
            variant="outline"
            className="bg-muted-dark/50! hover:bg-card!"
            onClick={onSignOutClick}
        >
            Sign Out
        </CustomButton>
    );
}

export default SignOutBtn;
