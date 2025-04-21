import { BestSellers } from "../components/Best Sellers";
import { Carousel } from "../components/Carousel";
import { Features } from "../components/Features";
import { Partner } from "../components/Partner";
import { Plans } from "../components/Plans";
import { Reports } from "../components/Reports";
import { Testmonials } from "../components/Testmonials";
import { Trending } from "../components/Trending";

export function Home() {
    return (
        <div>
            <Carousel />
            <Partner />
            <BestSellers />
            <Features />
            <Plans />
            <Testmonials />
            <Reports />
            <Trending />
        </div>
    )
}