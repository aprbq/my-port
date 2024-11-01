import { faFacebook, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <a href="https://www.facebook.com/boatqc" target="_blank"><FontAwesomeIcon className='cursor-pointer hover:scale-125 hover:text-primaryContent transition-all' icon={faFacebook}/></a>
            <a href="https://github.com/aprbq" target="_blank"><FontAwesomeIcon className='cursor-pointer hover:scale-125 hover:text-primaryContent transition-all' icon={faGithub}/></a>
        </div>
    )
}

export default Contact;