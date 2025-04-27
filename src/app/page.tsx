import { Hero } from "app/components/Home/Hero";
import { HomeHeader } from "app/components/shared/Header/HomeHeader";


export default function HomePage() {
    return (
        <div>
            <HomeHeader/>
            <Hero/>
        </div>
    );
}