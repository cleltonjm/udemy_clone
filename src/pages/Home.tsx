import { BestSellers } from "../components/Best Sellers";
import { Carousel } from "../components/Carousel";
import { Partner } from "../components/Partner";

export function Home() {
    return (
        <div>
            <Carousel />
            <Partner />
            <BestSellers />
        </div>
    )
}