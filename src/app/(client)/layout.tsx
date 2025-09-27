import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React, { ReactNode } from "react";

function ClientLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="min-h-screen flex flex-col gap-2">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default ClientLayout;
