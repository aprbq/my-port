import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/exp.png"
import picExp1 from "../../assets/exp1.png"

const Experince = () => {
    return (
        <div className="space-y-4">
            <div className="text-primaryTitle font-medium">Experience</div>
            <div className="grid grid-cols-[25%_75%]">
                <div>
                    <div>
                        <span className="text-sm">Aug 2024</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primaryTitle">Cafe Ecommerce</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div className="text-sm">A simple and minimalist for software analyst built with React, Ant Design and Golang.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Reat</div>
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Ant Design</div>
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Golang</div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-[25%_75%]">
                <div>
                    <div>
                        <span className="text-sm">Aug 2024</span>
                    </div>
                    <div>
                        <img src={picExp1} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className="text-primaryTitle">Cafe Ecommerce</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div className="text-sm">A simple and minimalist for software analyst built with React, Ant Design and Golang.</div>
                    <div className="flex gap-4 text-sm">
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Reat</div>
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Ant Design</div>
                        <div className="bg-primarySubContent px-2 py-1 rounded-md text-primaryBg">Golang</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Experince;