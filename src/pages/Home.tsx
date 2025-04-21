import { BestSellers } from "../components/Best Sellers";
import { Carousel } from "../components/Carousel";
import { Features } from "../components/Features";
import { Partner } from "../components/Partner";
import { Plans } from "../components/Plans";
import { Testmonials } from "../components/Testmonials";

export function Home() {
    return (
        <div>
            <Carousel />
            <Partner />
            <BestSellers />
            <Features />
            <Plans />
            <Testmonials />
        </div>
    )
}