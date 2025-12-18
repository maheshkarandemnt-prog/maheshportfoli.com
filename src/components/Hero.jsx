import './Hero.css';
import myprofile from '../assets/myprofile.jpg';

const Hero = () => {
    const handleDownloadCV = () => {
        // You can add your CV download logic here
        alert('Add your CV file to enable download!');
    };

    return (
        <section id="home" className="hero">
            <div className="hero-background">
                <div className="hero-shape shape-1"></div>
                <div className="hero-shape shape-2"></div>
                <div className="hero-shape shape-3"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge animate-fadeInUp">
                        <span className="badge-dot"></span>
                        <span>Available for opportunities</span>
                    </div>

                    <h1 className="hero-title animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                        Hi, I'm <span className="gradient-text">Mahesh Karande</span>
                    </h1>

                    <h2 className="hero-subtitle animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                        Software Engineer
                    </h2>

                    <p className="hero-description animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        Passionate about building robust, scalable applications with modern technologies.
                        Specializing in React, Angular, Java, and cross-platform development with React Native.
                    </p>

                    <div className="hero-buttons animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                        <a href="#contact" className="btn btn-primary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                            Get In Touch
                        </a>
                        <a href="#projects" className="btn btn-secondary">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                            View Projects
                        </a>
                    </div>

                    <div className="hero-stats animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                        <div className="stat-item">
                            <span className="stat-number">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">20+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">5+</span>
                            <span className="stat-label">Technologies</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                    <div className="image-wrapper">
                        <div className="image-bg"></div>
                        <img
                            src={myprofile}
                            alt="Mahesh Karande"
                            className="profile-image"
                        />
                        <div className="floating-card card-1">
                            <span className="card-icon">⚛️</span>
                            <span>React</span>
                        </div>
                        <div className="floating-card card-2">
                            <span className="card-icon">☕</span>
                            <span>Java</span>
                        </div>
                        <div className="floating-card card-3">
                            <span className="card-icon">🅰️</span>
                            <span>Angular</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
