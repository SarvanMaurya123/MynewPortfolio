import { FaEnvelope, FaGithub, FaLinkedin, FaGlobe, FaPhoneAlt } from 'react-icons/fa';
import { portfolioData } from '../../data/portfolioData';

const Footer = () => {
    return (
        <footer className="px-4 pb-8 pt-10 md:px-8">
            <div className="glass-panel mx-auto flex max-w-6xl flex-col gap-6 rounded-3xl px-6 py-8 md:flex-row md:items-center md:justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">{portfolioData.name}</h2>
                    <p className="mt-2 text-sm text-white/70">{portfolioData.title} | Navi Mumbai, Panvel</p>
                </div>

                <div className="flex flex-wrap gap-4 text-white/90">
                    <a className="footer-link" href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}>
                        <FaPhoneAlt />
                        <span>{portfolioData.phone}</span>
                    </a>
                    <a className="footer-link" href={`mailto:${portfolioData.email}`}>
                        <FaEnvelope />
                        <span>Email</span>
                    </a>
                    <a className="footer-link" href={portfolioData.links.website} target="_blank" rel="noopener noreferrer">
                        <FaGlobe />
                        <span>Website</span>
                    </a>
                    <a className="footer-link" href={portfolioData.links.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                        <span>GitHub</span>
                    </a>
                    <a className="footer-link" href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>

            <p className="mx-auto mt-5 max-w-6xl text-center text-sm text-white/65">
                Copyright {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
