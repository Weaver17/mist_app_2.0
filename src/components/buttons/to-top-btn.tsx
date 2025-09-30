import { useCallback } from "react";
import { CustomButton } from "../custom/c_button";

type ToTopBtnProps = {
    onToTopClick: () => void;
    scrollPosition: number;
};

function ToTopBtn({ onToTopClick, scrollPosition }: ToTopBtnProps) {
    return (
        <CustomButton
            onClick={onToTopClick}
            type="button"
            className={`fixed bottom-[32px] left-[65px] z-20 opacity-50 ${
                scrollPosition < 100 ? "hidden" : "visible"
            } hover:opacity-100`}
        >
            To Top
        </CustomButton>
    );
}

export default ToTopBtn;
