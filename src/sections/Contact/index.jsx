import { faFacebook, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='cursor-pointer hover:scale-125 hover:text-primaryContent transition-all' icon={faFacebook}/>
            <FontAwesomeIcon className='cursor-pointer hover:scale-125 hover:text-primaryContent transition-all' icon={faGithub}/>
        </div>
    )
}

export default Contact;