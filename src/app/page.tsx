import { Hero } from "app/components/Home/Hero";
import { Footer } from "app/components/shared/Footer";
import { HomeHeader } from "app/components/shared/Header/HomeHeader";


export default function HomePage() {
    return (
        <div>
            <HomeHeader/>
            <Hero/>
            <Footer></Footer>
        </div>
    );
}