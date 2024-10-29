import { faFacebook, faGithub, faMedium } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className='flex items-end gap-4 text-2xl'>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faFacebook}/>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faGithub}/>
            <FontAwesomeIcon className='hover:scale-125 hover:text-primaryContent transition-all' icon={faMedium}/>
        </div>
    )
}

export default Contact;