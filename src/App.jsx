import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import './index.css';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const Typewriter = ({ strings }) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const fullText = strings[currentStringIndex];

    if (!isDeleting && currentText === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentStringIndex((currentStringIndex + 1) % strings.length);
      timeout = setTimeout(() => {}, 500); 
    } else {
      const nextText = isDeleting 
        ? fullText.substring(0, currentText.length - 1)
        : fullText.substring(0, currentText.length + 1);
      
      timeout = setTimeout(() => setCurrentText(nextText), isDeleting ? 40 : 100);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentStringIndex, strings]);

  return <span>{currentText}<span className="cursor">|</span></span>;
};

export default function App() {

  const skillsData = [
    { category: "Web & UI Automation", icon: "🌐", skills: ["Playwright", "Cypress", "Selenium WebDriver", "Appium", "Katalon Studio"] },
    { category: "API & Backend Testing", icon: "⚡", skills: ["Postman", "REST Assured", "SoapUI", "Karate", "GraphQL Testing"] },
    { category: "AI & Next-Gen QA", icon: "🤖", skills: ["Applitools (Visual AI)", "GitHub Copilot", "Testim.io", "ChatGPT Prompts", "Mabl"] },
    { category: "Test Management & DevOps", icon: "⚙️", skills: ["Jira / Xray", "TestRail", "Jenkins / GitHub Actions", "Docker", "Agile / Scrum"] },
    { category: "Performance & Security", icon: "🛡️", skills: ["JMeter", "K6", "OWASP ZAP", "LoadRunner", "SonarQube"] },
    { category: "Data Science & Analytics", icon: "📊", skills: ["Python (Pandas, NumPy)", "PostgreSQL / SQL", "Tableau", "Machine Learning", "Time Series"] }
  ];

  const projectsData = [
    {
      title: "Predicting Probability of Credit Card Default",
      course: "Supervised Learning",
      date: "Jan 2024",
      icon: "💳",
      desc: "Developed a supervised learning model to predict default probability analyzing account, purchase, and delinquency variables to optimize credit allocation and mitigate risks.",
      tags: ["Discriminant Analysis", "Logistic Regression", "Python", "Data Visualization"]
    },
    {
      title: "FRA - Default Prediction and Stock Market Risk Analysis",
      course: "Finance and Risk Analytics",
      date: "Jan 2024",
      icon: "📈",
      desc: "Assessed companies' debt capabilities and analyzed market risk computing mean and standard deviation of stock returns for informed investment strategies.",
      tags: ["Financial Analysis", "Balance Sheet", "Default Prediction"]
    },
    {
      title: "Customer Buying Patterns & Revenue Boost",
      course: "Marketing & Retail Analytics",
      date: "Dec 2023",
      icon: "🛒",
      desc: "Analyzed 3 years of automotive POS transaction data to recommend customized cluster marketing strategies and attractive combo discounts.",
      tags: ["Python", "EDA", "KNIME", "Market Basket Analysis", "RFM"]
    },
    {
      title: "Visualizing Insurance Claims",
      course: "Data Visualization using TABLEAU",
      date: "Nov 2023",
      icon: "📊",
      desc: "Created highly interactive Tableau dashboards providing level-up problem-solving visual analytics to guide the CEO in company policymaking.",
      tags: ["Business Intelligence", "Tableau", "Dashboard Designing"]
    },
    {
      title: "Forecasting Wine Sales for ABC Estate",
      course: "Time Series Forecasting",
      date: "Oct 2023",
      icon: "🍷",
      desc: "Created multiple forecast models analyzing historical monthly sales data to predict revenue optimally for the 12-month future horizon.",
      tags: ["Time Series", "ARIMA/SARIMA", "Exponential Smoothing"]
    },
    {
      title: "DSBA SQL - New Wheels Case Study",
      course: "SQL Data Analysis",
      date: "Sep 2023",
      icon: "🚗",
      desc: "Performed critical data aggregation, filtered out noise, and conducted quarterly business performance analysis via complex SQL inner & outer joins.",
      tags: ["SQL", "Data Aggregation", "Sub-queries", "Data Visualization"]
    },
    {
      title: "Election Exit Poll & Presidential Speech Analysis",
      course: "Machine Learning",
      date: "Aug 2023",
      icon: "🗳️",
      desc: "Employed NLP and Text Analytics to analyze USA Presidential inaugural metadata and constructed predictive models for constituent exit polling.",
      tags: ["SVM / KNN / Naive Bayes", "Ensemble Techniques", "Text Mining"]
    },
    {
      title: "Gems & Holiday Package Prediction",
      course: "Predictive Modeling",
      date: "Jul 2023",
      icon: "✈️",
      desc: "Used linear regression to predict precious gem prices and deployed logistic classification to target specific holiday package customer bases.",
      tags: ["Linear Regression", "Logistic Regression", "LDA"]
    },
    {
      title: "Segmentation using Clustering and PCA",
      course: "Data Mining",
      date: "Jun 2023",
      icon: "🧩",
      desc: "Orchestrated advanced K-Means clustering & PCA on digital marketing data to identify optimum principal variance targets across census reports.",
      tags: ["Clustering", "PCA", "Silhouette Score", "Data Mining"]
    },
    {
      title: "Advanced Statistics Graded Project",
      course: "Advanced Statistics",
      date: "May 2023",
      icon: "📉",
      desc: "Solved complex problems on Probability, Probability Distributions, and utilized Hypothesis Testing and ANOVA techniques for analytical forecasting.",
      tags: ["Probability", "Distribution", "Hypothesis Testing", "ANOVA"]
    },
    {
      title: "Explore Auto Data & Go Digit Problem",
      course: "Statistical Methods for Decision Making",
      date: "Apr 2023",
      icon: "🚙",
      desc: "Evaluated efficiency of a major SUV/Sedan manufacturer's marketing campaign utilizing rigorous descriptive statistics and exploratory data frameworks.",
      tags: ["Python", "Descriptive Statistics", "EDA"]
    },
    {
      title: "E-Commerce Revenue Management",
      course: "Python for Data Science",
      date: "Mar 2023",
      icon: "💻",
      desc: "Tackled core business bottlenecks to identify high-volume region sales, best-selling product categories, and major brand utilizers.",
      tags: ["Numpy", "Pandas", "Python", "Data Visualization"]
    }
  ];

  return (
    <div className="app-container">
      {/* Animated Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <nav className="glass-nav">
        <div className="nav-content">
          <div className="logo">Soni.</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>
      </nav>

      <motion.header 
        className="hero" 
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-text">
          <motion.div 
             className="status-badge"
             initial={{ opacity: 0, scale: 0.5 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.5 }}
          >
             <div className="status-dot"></div> Available for Work
          </motion.div>
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm <span className="highlight">Soni Jha</span>
          </motion.h1>
          <motion.h2 
            className="subtitle"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Typewriter strings={[
              "Software Test Engineer",
              "Data Analyst",
              "Quality Advocate",
              "Automation Specialist",
              "Data Storyteller"
            ]} />
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Passionate about ensuring software quality, automation, and extracting insights from complex data. I bring ideas to life with precision and care.
          </motion.p>
          <motion.a 
            href="#contact" 
            className="btn primary-btn"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </div>
        <motion.div 
          className="hero-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="image-wrapper">
            <img src="/avatar.png" alt="Soni Jha - Professional Avatar" />
          </div>
        </motion.div>
      </motion.header>

      <motion.section 
        id="about" 
        className="about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <h2 className="section-title">About Me</h2>
        <div className="glass-card about-card">
          <p>With a dual background in <strong>Software Test Engineering</strong> and <strong>Data Analysis</strong>, I bridge the gap between building reliable software and driving data-informed decisions. My expertise ranges from crafting robust testing frameworks to visualizing complex datasets.</p>
          <p>I thrive in dynamic environments where I can leverage my keen eye for detail to uncover bugs and my analytical mindset to spot hidden trends, ensuring high quality deliverables at every stage.</p>
        </div>
      </motion.section>

      <motion.section 
        id="experience" 
        className="experience-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <motion.div 
              className="glass-card timeline-content experience-split"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className="experience-text-half">
                <h3>Software Test Engineer</h3>
                <p className="timeline-date">2021 - Present</p>
                <ul>
                  <li>Develop and maintain automated test suites for web and mobile applications using modern frameworks.</li>
                  <li>Collaborate proactively with cross-functional teams to identify, document, and resolve defects early in the SDLC.</li>
                  <li>Implemented continuous testing pipelines improving release confidence significantly.</li>
                </ul>
              </div>
              <div className="experience-image-half">
                <img src="/testing_avatar.png" alt="Testing Graphic" />
              </div>
            </motion.div>
          </div>
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <motion.div 
              className="glass-card timeline-content experience-split"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
               <div className="experience-text-half">
                <h3>Data Analyst</h3>
                <p className="timeline-date">2019 - 2021</p>
                <ul>
                  <li>Analyzed complex datasets to uncover actionable trends, aiding business growth and strategic decisions.</li>
                  <li>Built interactive, user-friendly dashboards using industry-standard visualization tools.</li>
                  <li>Streamlined data ETL processes which reduced report generation turnaround times.</li>
                </ul>
              </div>
              <div className="experience-image-half">
                <img src="/data_avatar.png" alt="Data Analysis Graphic" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section 
        id="projects" 
        className="projects-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeIn}
      >
        <h2 className="section-title" style={{ marginBottom: '20px' }}>Academic & Technical Projects</h2>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>
            Explore my comprehensive capstones at my <a href="https://olympus.mygreatlearning.com/eportfolio" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)', fontWeight: '700', textDecoration: 'none' }}>Great Learning E-Portfolio ↗</a>
          </p>
        </div>
        
        <div className="projects-grid">
          {projectsData.slice(0, 6).map((project, idx) => (
            <motion.div 
              key={idx} 
              className="glass-card project-card" 
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }} 
            >
              <div className="project-card-inner">
                <div className="project-header">
                  <span role="img" aria-label="project" style={{fontSize: '28px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '50%', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', flexShrink: 0}}>{project.icon}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p style={{fontSize: '0.85rem', color: 'var(--text-light)', fontWeight: 'bold'}}>{project.course} • {project.date}</p>
                  </div>
                </div>
                <p style={{margin: '15px 0', fontSize: '0.95rem'}}>{project.desc}</p>
                <a href={project.link || "https://olympus.mygreatlearning.com/eportfolio"} target="_blank" rel="noreferrer" className="know-more-link">Know More →</a>
              </div>
              <div className="skill-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ textAlign: 'center', marginTop: '70px', paddingBottom: '20px' }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="https://olympus.mygreatlearning.com/eportfolio" target="_blank" rel="noreferrer" className="btn primary-btn pulse-glow" style={{ fontSize: '1.2rem', padding: '18px 45px' }}>
            <span role="img" aria-label="sparkles">✨</span> Unlock All {projectsData.length} Projects on E-Portfolio
          </a>
        </motion.div>
      </motion.section>

      <motion.section 
        id="skills" 
        className="skills-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <h2 className="section-title">Technical Arsenal</h2>

        <div className="bento-skills-grid">
          {skillsData.map((group, idx) => (
             <motion.div 
               key={idx} 
               className="glass-card skill-bento-card"
               whileHover={{ y: -5, boxShadow: '0 20px 40px -10px rgba(79, 70, 229, 0.2)' }}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: idx * 0.1 }}
             >
                <div className="skill-bento-header">
                  <span className="skill-bento-icon" role="img" aria-label="icon">{group.icon}</span>
                  <h3>{group.category}</h3>
                </div>
                <div className="skill-tags">
                  {group.skills.map(skill => (
                    <span key={skill} className="bento-tag">{skill}</span>
                  ))}
                </div>
             </motion.div>
          ))}
        </div>
      </motion.section>

      <footer id="contact">
        <motion.div 
          className="footer-content glass-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2>Ready to collaborate?</h2>
          <p>Let's build reliable software and make data-driven decisions together.</p>
          <div className="contact-details" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', marginBottom: '25px', color: 'var(--text-light)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span role="img" aria-label="location">📍</span> Frisco, Texas</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span role="img" aria-label="phone">📞</span> <a href="tel:+14695546969" style={{ color: 'inherit', textDecoration: 'none' }}>+1 469 554 6969</a></div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><span role="img" aria-label="email">✉️</span> <a href="mailto:itssonipsjha@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>itssonipsjha@gmail.com</a></div>
          </div>
          <div className="social-links">
            <a href="mailto:itssonipsjha@gmail.com" className="btn secondary-btn"><span role="img" aria-label="email">✉️</span> Email Me</a>
            <a href="https://www.linkedin.com/in/sonijha06" target="_blank" rel="noreferrer" className="btn secondary-btn"><span role="img" aria-label="link">🔗</span> LinkedIn</a>
            <a href="https://olympus.mygreatlearning.com/eportfolio" target="_blank" rel="noreferrer" className="btn secondary-btn"><span role="img" aria-label="portfolio">↗️</span> E-Portfolio</a>
          </div>
        </motion.div>
        <p className="copyright">&copy; 2026 Soni Jha. All rights reserved.</p>
      </footer>
    </div>
  );
}
