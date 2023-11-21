"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode} from "react-icons/md";
import {BsSun} from "react-icons/bs";
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
            <button  onClick={() => setTheme("light")} className={"hidden dark:block dark:text-primary"}  aria-label={t("switcherButton.0")} ><BsSun/></button>
            <button  onClick={() => setTheme("dark")} className={"block dark:hidden text-darkColor"} aria-label={t("switcherButton.1")}><MdOutlineDarkMode/></button>
        </React.Fragment>
    );
};

export default ThemeSwitcher;
