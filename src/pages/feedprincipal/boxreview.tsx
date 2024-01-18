import BoxReview from "../components/Boxreview"
import Navbar from "../components/Navbar"

export default function PageBoxReview() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className={``}>
                <BoxReview />
                <BoxReview />
                <BoxReview />
            </div>
        </div>
    )
}