import Contact from "../Contact";
import Header from "../Header";
import Navbar from "../Navbar";

const LeftSection = () => {
    return (
        <div>
            <div className='sticky top-12 grid grid-rows-[35%_45%_20%] h-[80vh]'>
            <Header />
            <Navbar />
            <Contact />
            </div>
        </div>
    )
}

export default LeftSection;