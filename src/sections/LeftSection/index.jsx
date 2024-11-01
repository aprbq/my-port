import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
    return (
        <div className="px-5">
            <div className='sticky top-12 grid gap-y-5 lg:grid-rows-[35%_45%_20%] lg:h-[83vh]'>
            <Header />
            <Navbar />
            <Contact />
            </div>
        </div>
    )
}

export default LeftSection;