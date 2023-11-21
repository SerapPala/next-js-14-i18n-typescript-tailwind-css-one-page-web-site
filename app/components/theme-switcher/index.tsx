"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoSunnySharp } from "react-icons/io5";
import {useTranslation} from "react-i18next";
const ThemeSwitcher = () => {
    const { t } = useTranslation();
    const [mounted, setMounted] = useState(false);
    const { setTheme } = useTheme();
    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return (
        <React.Fragment>
            <button  onClick={() => setTheme("light")} className={"hidden dark:block dark:text-white group-hover:text-primary transition duration-500"}  aria-label={t("header.buttons.0.title")} ><IoSunnyOutline /></button>
            <button  onClick={() => setTheme("dark")} className={"block dark:hidden"} aria-label={t("header.buttons.0.title2")}><IoSunnySharp IoSunnyOutline/></button>
        </React.Fragment>
    );
};

export default ThemeSwitcher;
