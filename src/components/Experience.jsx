import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            type: 'work',
            title: 'Software Engineer',
            company: 'Tech Company',
            location: 'India',
            period: '2022 - Present',
            description: [
                'Developed and maintained web applications using React and Angular',
                'Built RESTful APIs using Java Spring Boot',
                'Collaborated with cross-functional teams to deliver high-quality software',
                'Implemented responsive designs and optimized application performance',
            ],
        },
        {
            id: 2,
            type: 'work',
            title: 'Junior Developer',
            company: 'Software Solutions',
            location: 'India',
            period: '2021 - 2022',
            description: [
                'Worked on frontend development using React and JavaScript',
                'Participated in code reviews and team meetings',
                'Fixed bugs and implemented new features',
                'Gained experience with version control systems (Git)',
            ],
        },
        {
            id: 3,
            type: 'education',
            title: 'Bachelor of Computer Science',
            company: 'University',
            location: 'India',
            period: '2017 - 2021',
            description: [
                'Graduated with honors',
                'Specialized in Software Engineering',
                'Completed projects in web development and databases',
                'Active member of coding club',
            ],
        },
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <h2 className="section-title">
                    My <span>Experience</span>
                </h2>
                <p className="section-subtitle">
                    My professional journey and educational background
                </p>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-content">
                                <div className="timeline-icon">
                                    {exp.type === 'work' ? (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
                                        </svg>
                                    ) : (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
                                        </svg>
                                    )}
                                </div>
                                <span className="timeline-period">{exp.period}</span>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <h4 className="timeline-company">
                                    {exp.company} <span>• {exp.location}</span>
                                </h4>
                                <ul className="timeline-description">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
