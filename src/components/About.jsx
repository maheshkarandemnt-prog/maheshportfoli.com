import './About.css';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <h2 className="section-title">
                    About <span>Me</span>
                </h2>
                <p className="section-subtitle">
                    Get to know more about me and my journey in software development
                </p>

                <div className="about-container">
                    <div className="about-image">
                        <div className="about-image-wrapper">
                            <div className="about-image-bg"></div>
                            <div className="about-placeholder">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <div className="experience-badge">
                                <span className="exp-number">3+</span>
                                <span className="exp-text">Years of Experience</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-content">
                        <h3 className="about-heading">
                            A passionate Software Engineer based in India 🇮🇳
                        </h3>

                        <p className="about-text">
                            I'm Mahesh Karande, a dedicated Software Engineer with a passion for creating
                            efficient, scalable, and user-friendly applications. With expertise in both
                            frontend and backend technologies, I bring ideas to life through clean code
                            and innovative solutions.
                        </p>

                        <p className="about-text">
                            My journey in software development has equipped me with strong skills in
                            React, Angular, Java, and React Native. I enjoy tackling complex problems
                            and continuously learning new technologies to stay at the forefront of
                            the ever-evolving tech landscape.
                        </p>

                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-icon">📧</span>
                                <div className="info-content">
                                    <span className="info-label">Email</span>
                                    <span className="info-value">mahesh.karande@email.com</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">📍</span>
                                <div className="info-content">
                                    <span className="info-label">Location</span>
                                    <span className="info-value">India</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">💼</span>
                                <div className="info-content">
                                    <span className="info-label">Experience</span>
                                    <span className="info-value">3+ Years</span>
                                </div>
                            </div>

                            <div className="info-item">
                                <span className="info-icon">🎓</span>
                                <div className="info-content">
                                    <span className="info-label">Degree</span>
                                    <span className="info-value">Bachelor's in Computer Science</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-buttons">
                            <a href="#contact" className="btn btn-primary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                Contact Me
                            </a>
                            <a href="#" className="btn btn-secondary" download>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
                                </svg>
                                Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
