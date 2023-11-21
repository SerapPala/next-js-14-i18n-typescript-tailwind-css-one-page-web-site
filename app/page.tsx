'use client'

import HeroBanner from "./components/hero-banner";
import Features from "./components/features";
import Categories from "./components/categories";
import PopulerBlogs from "./components/populer-blogs";

export default function Home() {
    return (
        <main>
            <div className={"dark:bg-dark bg-white"}>

                {/*hero banner start*/}
                <HeroBanner/>
                {/*hero banner end*/}

                {/*features start*/}
                <Features/>
                {/*features end*/}

                {/*blog categories start*/}
                <Categories/>
                {/*blog categories end*/}

                {/*populer blogs start*/}
                <PopulerBlogs/>
                {/*populer blogs end*/}

                {/*Categories start*/}
               {/* <Categories/>*/}
                {/*Categories end*/}

            </div>
        </main>
    );
}
