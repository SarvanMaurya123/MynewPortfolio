import {
    FaEnvelope,
    FaGithub,
    FaGlobe,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from 'react-icons/fa';
import { portfolioData } from '../../../data/portfolioData';

const skillSections = [
    { title: 'Languages', key: 'languages' },
    { title: 'Frontend', key: 'frontend' },
    { title: 'Backend', key: 'backend' },
    { title: 'Database', key: 'database' },
    { title: 'Tools & Platforms', key: 'tools' },
    { title: 'Libraries & Technologies', key: 'libraries' },
    { title: 'Cloud & AWS', key: 'cloud' },
    { title: 'AI & Generative AI', key: 'ai' },
];

const Home = () => {
    const handlePointerMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - bounds.left;
        const y = event.clientY - bounds.top;
        event.currentTarget.style.setProperty('--cursor-x', `${x}px`);
        event.currentTarget.style.setProperty('--cursor-y', `${y}px`);
    };

    return (
        <main className="cursor-aura px-4 pb-12 pt-8 md:px-8" onMouseMove={handlePointerMove}>
            <section id="hero" className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[2fr_1fr]">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <p className="tag mb-4 inline-block rounded-full px-4 py-1 text-xs uppercase tracking-[0.24em]">
                        Full Stack Portfolio
                    </p>
                    <h1 className="text-3xl font-bold leading-tight text-white md:text-5xl">
                        {portfolioData.name}
                    </h1>
                    <p className="mt-2 text-lg text-sky-200">{portfolioData.title}</p>
                    <p className="mt-6 max-w-2xl text-justify leading-7 text-white/85">{portfolioData.summary}</p>
                    <p className="mt-4 rounded-xl border border-cyan-300/35 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
                        {portfolioData.heroPitch}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/85">
                        <span className="pill">
                            <FaMapMarkerAlt /> {portfolioData.location}
                        </span>
                        <a className="pill" href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}>
                            <FaPhoneAlt /> {portfolioData.phone}
                        </a>
                        <a className="pill" href={`mailto:${portfolioData.email}`}>
                            <FaEnvelope /> {portfolioData.email}
                        </a>
                        <span className="pill">{portfolioData.availability}</span>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <a className="glass-button" href={portfolioData.links.website} target="_blank" rel="noopener noreferrer">
                            <FaGlobe /> Live Website
                        </a>
                        <a className="glass-button" href={portfolioData.links.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub /> GitHub
                        </a>
                        <a className="glass-button" href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn
                        </a>
                    </div>
                </div>

                <div className="glass-panel rounded-3xl p-5 md:p-6">
                    <img
                        src="/portfolio.jpeg"
                        alt="Sarvan Maurya"
                        className="h-full min-h-[320px] w-full rounded-2xl border border-white/20 object-cover"
                    />
                </div>
            </section>

            <section id="highlights" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Founder Fit Highlights</h2>
                    <p className="mt-3 text-white/80">Built for founders who need responsible execution, clear communication, and quality delivery.</p>
                    <div className="mt-6 grid gap-4 md:grid-cols-4">
                        {portfolioData.quickStats.map((item) => (
                            <article key={item.label} className="sub-glass reveal-up rounded-2xl p-4">
                                <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">{item.label}</p>
                                <p className="mt-2 text-sm font-semibold text-white">{item.value}</p>
                            </article>
                        ))}
                    </div>

                    <article className="sub-glass reveal-up mt-6 rounded-2xl p-5 md:p-6">
                        <h3 className="text-xl font-semibold text-white">{portfolioData.founderMessage.title}</h3>
                        <p className="mt-3 leading-7 text-white/85">{portfolioData.founderMessage.summary}</p>
                        <ul className="mt-4 space-y-3 text-sm text-white/85">
                            {portfolioData.founderMessage.points.map((point) => (
                                <li key={point} className="list-item">
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p className="mt-4 rounded-xl border border-cyan-300/35 bg-cyan-400/10 p-3 text-sm text-cyan-100">
                            {portfolioData.founderMessage.cta}
                        </p>
                    </article>

                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {portfolioData.recruiterHighlights.map((item) => (
                            <article key={item.title} className="sub-glass reveal-up rounded-2xl p-5">
                                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/80">{item.description}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="summary" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Professional Summary</h2>
                    <p className="mt-4 leading-7 text-white/85">{portfolioData.summary}</p>
                </div>
            </section>

            <section id="services" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">What I Can Build For You</h2>
                    <p className="mt-3 text-white/80">End-to-end product development with speed, clarity, and engineering quality.</p>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {portfolioData.serviceOffers.map((service) => (
                            <article key={service.title} className="sub-glass reveal-up rounded-2xl p-5">
                                <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                                <p className="mt-3 text-sm leading-6 text-white/85">{service.detail}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="experience" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Work Experience</h2>
                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <article className="sub-glass rounded-2xl p-5">
                            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">{portfolioData.experience.period}</p>
                            <h3 className="mt-2 text-xl font-semibold text-white">{portfolioData.experience.company}</h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/85">
                                {portfolioData.experience.points.map((point) => (
                                    <li key={point} className="list-item">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </article>

                        <article className="sub-glass rounded-2xl p-5">
                            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Internship</p>
                            <h3 className="mt-2 text-xl font-semibold text-white">
                                {portfolioData.internship.company} | {portfolioData.internship.role}
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-white/85">
                                {portfolioData.internship.points.map((point) => (
                                    <li key={point} className="list-item">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section id="skills" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Skills</h2>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {skillSections.map((section) => (
                            <article key={section.key} className="sub-glass rounded-2xl p-5">
                                <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {portfolioData.skills[section.key].map((skill) => (
                                        <span key={skill} className="skill-chip">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="education" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Education</h2>
                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                        {portfolioData.education.map((item) => (
                            <article key={item.degree} className="sub-glass rounded-2xl p-5">
                                <p className="text-sm uppercase tracking-[0.15em] text-cyan-200">{item.period}</p>
                                <h3 className="mt-2 text-xl font-semibold text-white">{item.degree}</h3>
                                <p className="mt-2 text-white/80">{item.school}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section id="projects" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Project Case Studies</h2>
                    <p className="mt-3 text-white/75">Explore design and implementation walkthrough pages from this portfolio.</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        {portfolioData.projectLinks.map((project) => (
                            <a key={project.href} className="glass-button" href={project.href}>
                                {project.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="process" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Delivery Process</h2>
                    <p className="mt-3 text-white/75">A practical workflow I follow to deliver premium product quality.</p>
                    <div className="mt-6 grid gap-5 md:grid-cols-3">
                        {portfolioData.deliveryProcess.map((step) => (
                            <article key={step.stage} className="sub-glass reveal-up rounded-2xl p-5">
                                <p className="text-sm uppercase tracking-[0.16em] text-cyan-200">{step.stage}</p>
                                <p className="mt-3 text-sm leading-6 text-white/85">{step.detail}</p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-5 md:p-6">
                        <h3 className="text-lg font-semibold text-white">How We Can Work Together</h3>
                        <ul className="mt-4 space-y-3 text-sm text-white/85">
                            {portfolioData.engagementModels.map((model) => (
                                <li key={model} className="list-item">
                                    {model}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            <section id="contact" className="mx-auto mt-8 max-w-6xl">
                <div className="glass-panel rounded-3xl p-6 md:p-10">
                    <h2 className="section-title">Contact</h2>
                    <p className="mt-3 text-white/80">Available for full-stack, startup, and product-focused collaboration opportunities.</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <a className="glass-button" href={`mailto:${portfolioData.email}`}>
                            <FaEnvelope /> {portfolioData.email}
                        </a>
                        <a className="glass-button" href={`tel:${portfolioData.phone.replace(/\s+/g, '')}`}>
                            <FaPhoneAlt /> {portfolioData.phone}
                        </a>
                        <a className="glass-button" href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin /> LinkedIn Profile
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;