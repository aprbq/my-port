import About from "../About";
import Experince from "../Experience";

const RightSection = () => {
    return (
        <div className="grid gap-y-40 px-5">
            <About />
            <Experince />
            <div>Project</div>
            <div>Article</div>
            <div>Article</div>
            <div>Article</div>
        </div>
    )
}

export default RightSection;