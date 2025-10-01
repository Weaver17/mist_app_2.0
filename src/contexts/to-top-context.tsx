"use client";
import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

type ToTopContextType = {
    handleToTopBtn: () => void;
    onToTopClick: () => void;
    scrollPosition: number;
    showToTop: "visible" | "hidden";
};

const ToTopContext = createContext<ToTopContextType | null>(null);

export function ToTopProvider({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    const [scrollPosition, setScrollPosition] = useState(0);

    const [showToTop, setShowToTop] = useState("hidden");

    const handleToTopBtn = useCallback(() => {
        const position = window.scrollY;
        setScrollPosition(position);

        if (position > 100) {
            setShowToTop("visible");
        } else {
            setShowToTop("hidden");
        }
    }, []);

    const onToTopClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const values = useMemo(
        () => ({
            handleToTopBtn,
            onToTopClick,
            scrollPosition,
            showToTop: showToTop as "visible" | "hidden",
        }),
        [handleToTopBtn, scrollPosition, showToTop]
    );

    return (
        <ToTopContext.Provider value={values}>{children}</ToTopContext.Provider>
    );
}

export function useToTopContext() {
    const context = useContext(ToTopContext);
    if (!context) {
        throw new Error("useToTopContext must be used within a ToTopProvider");
    }
    return context;
}
