import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce application with user authentication, product management, cart functionality, and payment integration.',
            image: null,
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'Full Stack',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, team features, and progress tracking.',
            image: null,
            tags: ['Angular', 'Java', 'Spring Boot', 'PostgreSQL'],
            category: 'Full Stack',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 3,
            title: 'Mobile Banking App',
            description: 'A secure mobile banking application with biometric authentication, transaction history, and bill payments.',
            image: null,
            tags: ['React Native', 'Java', 'REST API', 'SQL'],
            category: 'Mobile',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 4,
            title: 'Analytics Dashboard',
            description: 'An interactive analytics dashboard with real-time data visualization, custom reports, and export functionality.',
            image: null,
            tags: ['React', 'D3.js', 'Node.js', 'MongoDB'],
            category: 'Frontend',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 5,
            title: 'Social Media App',
            description: 'A social networking mobile application with posts, stories, messaging, and notification features.',
            image: null,
            tags: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
            category: 'Mobile',
            liveUrl: '#',
            githubUrl: '#',
        },
        {
            id: 6,
            title: 'Inventory Management',
            description: 'An enterprise inventory management system with barcode scanning, stock alerts, and supplier management.',
            image: null,
            tags: ['Angular', 'Java', 'Spring Boot', 'MySQL'],
            category: 'Full Stack',
            liveUrl: '#',
            githubUrl: '#',
        },
    ];

    return (
        <section id="projects" className="projects section">
            <div className="container">
                <h2 className="section-title">
                    My <span>Projects</span>
                </h2>
                <p className="section-subtitle">
                    A selection of projects I've worked on, showcasing my skills and expertise
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div className="project-placeholder">
                                    <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                                        <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                                    </svg>
                                    <span>Project Image</span>
                                </div>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href={project.liveUrl} className="project-link" title="Live Demo">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                                            </svg>
                                        </a>
                                        <a href={project.githubUrl} className="project-link" title="GitHub">
                                            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <span className="project-category">{project.category}</span>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="projects-cta">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View All Projects on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
