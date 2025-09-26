import AuthLogo from "@/components/auth/auth-logo";
import React, { ReactNode } from "react";

function AuthLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className=" flex flex-col-reverse justify-center items-center gap-0 lg:min-h-screen lg:max-w-[1380px] lg:mx-auto lg:flex-row">
            <div className="lg:w-1/2">
                <AuthLogo />
            </div>
            <div className="lg:border-l-2 lg:w-1/2">{children}</div>
        </div>
    );
}

export default AuthLayout;
