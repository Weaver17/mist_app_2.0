"use client";
import React from "react";
import { Button } from "../custom/components/buttons/c_button";

type ShowMoreBtnProps = {
    onShowMoreClick: () => void;
};

function ShowMoreBtn({ onShowMoreClick }: ShowMoreBtnProps) {
    return (
        <Button onClick={onShowMoreClick} className="font-special">
            Show More
        </Button>
    );
}

export default ShowMoreBtn;
