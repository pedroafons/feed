import BoxReview from "../components/Boxreview"
import Navbar from "../components/Navbar"

export default function PageBoxReview() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="font-bold text-4xl text-center pt-32 pb-6">
                feed
            </div>
            <div className={``}>
                <BoxReview />
                <BoxReview />
                <BoxReview />
            </div>
        </div>
    )
}