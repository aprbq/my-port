import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const TitleLink = ({isHighLight, title, link}) => {

    if(!link) {
        return <div className={`${isHighLight ? "text-primaryContent":""}`}>{title}</div>
    }
    
    return (
        <div className={`${isHighLight ? "text-primaryContent":""}`}>
            <a href={link} target="_blank">
                {title}
                <FontAwesomeIcon className={`px-2 text-xss -rotate-45 duration-500 ease-out ${isHighLight ? "translate-x-1 -translate-y-1" : ""}`} icon={faArrowRight}/>
            </a>
        </div>
    )
}

export default TitleLink;