import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import React, { ReactNode } from "react";

function ClientLayout({ children }: Readonly<{ children: ReactNode }>) {
    return (
        <div className="min-h-screen flex flex-col gap-2 md:gap-4 lg:gap-8">
            <div className=" bg-gradient-to-t from-primary/0 to-primary/50">
                <Header />
            </div>
            {children}
            <div className="border-t-4 border-primary bg-border mt-auto">
                <Footer />
            </div>
        </div>
    );
}

export default ClientLayout;
