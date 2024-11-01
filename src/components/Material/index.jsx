import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({icon, link}) => {
    return (
            <a href={link} target="_blank"><FontAwesomeIcon className="cursor-pointer hover:scale-110 transition-all hover:text-primaryContent" icon={icon}/></a>
    )
}

export default Material;