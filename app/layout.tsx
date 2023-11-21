/*'use client'*/
import type {Metadata} from 'next';
import {Nunito, Alegreya_Sans} from 'next/font/google';
import './globals.css';
import './styles/index.scss';
import Header from '../app/components/header';
import Footer from '../app/components/footer';
import {Providers} from './providers';
import MobileMenu from "./components/mobile-menu-area/mobileMenu";
import Navbar from "./components/navbar";


const nunito = Nunito({
    subsets: ['latin'],
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '900'],
    variable: '--font-nunito',
});
const alegreya = Alegreya_Sans({
    subsets: ['latin'],
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900'],
    variable: '--font-alegreyasans',
})
export const metadata: Metadata = {
    title: "Front End Magazine",
    description: "Front End Developer",
    /*   icons: [{ rel: 'icon', url: Favicon.src }],*/
};
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    /*
        useEffect(() => {
            const storedLanguage = localStorage.getItem('language');

            const defaultLanguage = 'en';

            i18n.changeLanguage(storedLanguage || defaultLanguage);
        }, []);
    */

    return (
        <>
            <html lang="en" className={`${nunito.variable} ${alegreya.variable}`}>
            <body>
            <Providers>
                <div className={'bg-light dark:bg-dark h-screen '}>

                    {/*header start*/}
                    <Header/>
                    {/* header end */}

                    {/* navbar start */}
                    <Navbar/>
                    {/* navbar end */}

                    {/* mobile menu start */}
                    <MobileMenu/>
                    {/* mobile menu end */}

                    {children}

                    {/*footer start*/}
                    <Footer/>
                    {/*footer end*/}
                </div>
            </Providers>
            </body>
            </html>
        </>
    );
}
