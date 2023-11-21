'use client'
import Link from 'next/link'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
export default function NotFound() {
    const { t } = useTranslation();
    return <div className={"h-128 flex  items-center justify-center"}>
        <div>
            <h1>{t("notFound.title")}</h1>
            <div>
                <Link href={t("notFound.link.url")}>{t("notFound.link.title")}</Link>
            </div>
        </div>

    </div>
}
