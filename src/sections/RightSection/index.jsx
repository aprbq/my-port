import ContentContainer from "../../components/ContentContainer";
import About from "../About";
import { data as experienceData } from "../../contents/experience"
import { data as projectData } from "../../contents/project"
import { data as articleData } from "../../contents/article"
import Footer from "../Footer";
const RightSection = ({ onInitial }) => {
    return (
        <div className="grid gap-y-10 lg:gap-y-40 px-5">
            <About 
                onInitial={onInitial}
                title = "About"
            />
            <ContentContainer 
                onInitial={onInitial}
                title = "Experience"
                data={experienceData}
            />
            <ContentContainer 
                onInitial={onInitial}
                title = "Project"
                data={projectData}
            />
            <ContentContainer 
                onInitial={onInitial}
                title = "Article"
                data={articleData}
            />
            <Footer />
        </div>
    )
}

export default RightSection;