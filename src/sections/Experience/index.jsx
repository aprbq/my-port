import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import picExp from "../../assets/exp.png"
import picExp1 from "../../assets/exp1.png"
import { useState } from "react";

const Experince = () => {

    const [mouseEnterFirst, setMouseEnterFirst] = useState(false);
    const [mouseEnterSecond, setMouseEnterSecond] = useState(false);

    return (
        <div className="">
            <div className="text-primaryTitle font-medium">Experience</div>
            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${mouseEnterFirst ? "bg-primaryProject":""}`}
                onMouseEnter={() => setMouseEnterFirst(true)}
                onMouseLeave={() => setMouseEnterFirst(false)}
            >
                <div>
                    <div>
                        <span className={`text-sm ${mouseEnterFirst ? "text-primaryContent": ""}`}>Sep 2024</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`${mouseEnterFirst ? "text-primaryContent":""}`}>Cafe Ecommerce</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div className={`text-sm ${mouseEnterFirst ? "text-primaryContent": ""}`}>A simple and minimalist for software analyst built with React, Ant Design and Golang.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterFirst ? "text-primaryContent" : "text-primaryBg"}`}>Reat</div>
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterFirst ? "text-primaryContent" : "text-primaryBg"}`}>Ant Design</div>
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterFirst ? "text-primaryContent" : "text-primaryBg"}`}>Golang</div>
                    </div>
                </div>
            </div>

            <div 
                className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${mouseEnterSecond ? "bg-primaryProject":""}`}
                onMouseEnter={() => setMouseEnterSecond(true)}
                onMouseLeave={() => setMouseEnterSecond(false)}
            >
                <div>
                    <div>
                        <span className={`text-sm ${mouseEnterSecond ? "text-primaryContent": "text-primaryTitle"}`}>Aug 2024</span>
                    </div>
                    <div>
                        <img src={picExp} className="w-5/6 rounded-md border-2"/>
                    </div>
                </div>
                <div className="grid gap-y-4">
                    <div className={`${mouseEnterSecond ? "text-primaryContent":"text-primaryTitle"}`}>Cafe Ecommerce1</div>
                    <div className="flex gap-4 text-xl">
                        <FontAwesomeIcon icon={faGithub}/>
                    </div>
                    <div className={`text-sm ${mouseEnterSecond ? "text-primaryContent": ""}`}>A simple and minimalist for software analyst built with React, Ant Design and Golang.</div>
                    <div className="flex gap-4 text-sm">
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterSecond ? "text-primaryContent" : "text-primaryBg"}`}>Reat</div>
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterSecond ? "text-primaryContent" : "text-primaryBg"}`}>Ant Design</div>
                        <div className={`bg-primarySubContent px-2 py-1 rounded-md ${mouseEnterSecond ? "text-primaryContent" : "text-primaryBg"}`}>Golang</div>
                    </div>
                </div>
            </div>
            
        </div>
        
    )
}

export default Experince;