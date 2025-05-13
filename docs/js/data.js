const experiences = [
    {
        title: "Software Developer Intern",
        company: "CTC Global",
        date: "Aug 2024 - Dec 2024",
        details: [
            "Contributed to data migration by transferring data using SQL scripts and Excel, ensuring accuracy and consistency to integrate with other systems and enhanced interoperability.",
            "Performed data cleaning, transformation, and validation using Excel to ensure standardisation for seamless integration into backend systems.",
            "Developed and optimized RESTful API endpoints using Java and Spring Boot, improving application scalability and performance."
        ]
    },
    {
        title: "Technology & Operations Intern",
        company: "DBS Bank",
        date: "May 2024 - Aug 2024",
        details: [
            "Developed macros using Excel VBA to automate various repetitive tasks, significantly enhancing operational efficiency.",
            "Conducted data analysis to identify bottlenecks and determine factors driving profits as well as created charts for data visualization in Excel to provide actionable insights for strategic decisions."
        ]
    },
    {
        title: "Backend Developer Intern",
        company: "Accenture",
        date: "May 2023 - Sep 2023",
        details: [
            "Developed RESTful API endpoints using Java and Spring Boot, enhancing the scalability and performance of the client application system.",
            "Developed an automated test script using Python and Selenium for shakedowns and regression testing, resulting in a substantial reduction in manual testing tasks."
        ]
    }
];

const projects = [
    {
        title: "Portfolio Analysis",
        summary: "Manage stock portfolios, analyze performance, and market exposure.",
        image: "./asset/portfolio_analysis.png",
        link: "https://github.com/Tjandra-Putra/is442-oop-project"
    },
    {
        title: "Umbrelify",
        summary: "Gives real-time umbrella advice based on weather forecasts for your location.",
        image: "./asset/umbrelify.png",
        link: "https://github.com/ryanteojw/Umbrelify"
    },
    {
        title: "HDB Price Analysis",
        summary: "Analyzes factors affecting HDB resale prices in Singapore from 2017-2022.",
        image: "./asset/hdb_analysis.png",
        link: "https://github.com/ryanteojw/HDB_Project"
    }
];

const skills = [
    { 
        title: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    { 
        title: "Java",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    { 
        title: "JavaScript",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    { 
        title: "Flask",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
    },
    { 
        title: "Spring Boot",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    { 
        title: "MySQL",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
    },
    { 
        title: "Git",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    { 
        title: "Docker",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },

];

const certs = [
    {
        title: "AWS Certified Solutions Architect – Associate",
        image: "./asset/aws_cert.png",
        link: "https://www.credly.com/badges/6ebf0e94-1666-4055-a53b-4fdce6fe5d65/public_url"
    },
    {
        title: "Java Certified Foundations Associate",
        image: "./asset/java_cert.png",
        link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DF3E7A917CBE8602FBB8DACD835D14E616D071684D85AA73C2A5A747DAB4FC19"
    },
    {
        title: "Google Data Analytics",
        image: "./asset/data_cert.png",
        link: "https://www.coursera.org/account/accomplishments/professional-cert/BHSA5T4NVNB3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof"
    },
    {
        title: "AI100 Python Programming and Data Visualisation",
        image: "./asset/python_cert.png",
        link: "https://cert.heicodersacademy.com/piLE3IG0b5g71Evh"
    }
];

export default { experiences, projects, skills, certs };