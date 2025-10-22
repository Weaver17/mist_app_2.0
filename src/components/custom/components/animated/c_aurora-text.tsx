"use client";

import React, { memo } from "react";

interface AuroraTextProps {
    children: React.ReactNode;
    className?: string;
    colors?: string[];
    speed?: number;
}

export const AuroraColorText = memo(
    ({
        children,
        className = "",
        colors = ["#0f52ba", "#0064ff", "#3885fd", "#ba0fa7"],
        speed = 1,
    }: AuroraTextProps) => {
        const gradientStyle = {
            backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${
                colors[0]
            })`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animationDuration: `${10 / speed}s`,
        };

        return (
            <span className={`relative inline-block ${className}`}>
                <span className="sr-only">{children}</span>
                <span
                    className="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
                    style={gradientStyle}
                    aria-hidden="true"
                >
                    {children}
                </span>
            </span>
        );
    }
);

AuroraColorText.displayName = "AuroraColorText";
