"use client";
import { motion } from "motion/react";
import React from "react";

function FadingSidebar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
        >
            <div className="mx-auto max-w-[320px] rounded-sm bg-card/90 blur-lg min-h-[500px]"></div>
            <div className="absolute flex flex-col gap-4 py-8 max-w-[320px] top-0 left-1/2 -translate-x-1/2 lg:gap-8 ">
                {children}
            </div>
        </motion.div>
    );
}

export default FadingSidebar;
