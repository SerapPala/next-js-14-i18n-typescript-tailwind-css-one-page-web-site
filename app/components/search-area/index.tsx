'use client'
import {FaSearch} from "react-icons/fa";
import {useTranslation} from "react-i18next";
import i18n from "../../../i18n";

const SearchArea = ({}) => {
    const {t} = useTranslation();
    return (
        <div className={"w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden"}>
                <span className={"absolute left-4 top-3 text-lg text-gray-400"}>
                <FaSearch/>
                </span>
            <input type="text"
                   className={"pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary  focus:ring-2 focus:ring-inset focus:ring-primary bg-transparent"}
                   placeholder={i18n.t("searchArea.placeHolder")}/>
            <button type={"submit"} aria-label={i18n.t("searchArea.button")} title={i18n.t("searchArea.button")}
                    className={"bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition duration-500"}>{i18n.t("searchArea.button")}</button>
            <div>
            </div>
        </div>
    );
};
export default SearchArea;
