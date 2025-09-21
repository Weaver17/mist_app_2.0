"use client";
import React from "react";
import { CustomButton } from "../custom/c_button";

type ShowMoreBtnProps = {
    onShowMoreClick: () => void;
};

function ShowMoreBtn({ onShowMoreClick }: ShowMoreBtnProps) {
    return (
        <CustomButton
            onClick={onShowMoreClick}
            className="font-special hover:bg-secondary"
        >
            Show More
        </CustomButton>
    );
}

export default ShowMoreBtn;
