import React, { ReactNode } from "react";

function ClientLayout({ children }: Readonly<{ children: ReactNode }>) {
    return <>{children}</>;
}

export default ClientLayout;
