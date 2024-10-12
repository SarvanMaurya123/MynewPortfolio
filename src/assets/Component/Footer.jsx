
import { FaGithub } from 'react-icons/fa'; // GitHub
import { FaLinkedin } from 'react-icons/fa'; // LinkedIn
import { FaTwitter } from 'react-icons/fa'; // Twitter (add other icons as needed)

const Footer = () => {
    return (
        <footer className="bg-slate-600 text-white py-4">
            <div className="flex justify-center items-center gap-6">
                <a href="https://github.com/SarvanMaurya123" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-3xl hover:text-gray-300 transition duration-300" />
                </a>
                <a href="https://www.linkedin.com/in/sarvan-maurya-588877263" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-3xl hover:text-gray-300 transition duration-300" />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-3xl hover:text-gray-300 transition duration-300" />
                </a>
            </div>
            <p className="text-center mt-2">© {new Date().getFullYear()} Sarvan Maurya. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
