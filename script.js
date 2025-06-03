// Resume Data
const resumeData = {
    about: "Detail-oriented and adaptable Azure Engineer and Site Reliability Engineer (SRE) with strong experience in cloud technologies, automation, and troubleshooting. Proficient in CI/CD, incident management, and infrastructure management using Microsoft Azure, Terraform, and related tools. Experienced with a variety of programming languages and committed to continuous learning.",
    experience: [
        {
            title: "Azure Engineer / Site Reliability Engineer",
            company: "PwC (Contract: SkillStorm)",
            date: "August 2022 - November 2024",
            description: `
                • Managed and optimized Azure DevOps pipelines to streamline CI/CD deployments and automate workflows
                • Monitored application health and performance using Azure Portal and Application Insights
                • Automated SSL/TLS certification tracking for critical applications
                • Delivered on-call incident response through PagerDuty
                • Architected and deployed scalable infrastructure using Azure Traffic Manager, VM Scale Sets, and Load Balancers
                • Developed Infrastructure as Code (IaC) with Terraform
                • Administered Azure networking configurations
                • Created system architecture diagrams using draw.io
                • Implemented monitoring and alerting with DataDog
                • Utilized ServiceNow for change management
                • Applied Python scripting for cloud automation and Kubernetes orchestration`
        }
    ],
    education: [
        {
            degree: "Master of Science in Computer Science",
            school: "The University of Texas at Dallas",
            location: "Richardson, TX",
            date: "August 2020 - May 2022",
            description: "9 hours from completion"
        },
        {
            degree: "Bachelor of Science in Computer Science",
            school: "The University of Texas at Dallas",
            location: "Richardson, TX",
            date: "August 2016 - May 2020",
            description: ""
        }
    ],
    certifications: [
        "Microsoft Azure AZ-900 – Fundamentals",
        "Microsoft Azure AZ-104 – Administrator",
        "Google IT Support Professional"
    ],
    skills: [
        "Microsoft Azure",
        "Azure DevOps",
        "Terraform",
        "Python",
        "Java",
        "C/C++",
        "C#",
        "SQL",
        "HTML5",
        "JavaScript",
        "PHP",
        "Google Cloud Platform",
        "Datadog",
        "PagerDuty",
        "MySQL",
        "MongoDB",
        "Kubernetes",
        "ServiceNow"
    ],
    leadership: {
        "The Pokemon League at UT Dallas": [
            {
                role: "President",
                date: "Spring 2018 - Fall 2021",
                description: "Led meetings and liaised with the Student Organization Center."
            },
            {
                role: "Secretary",
                date: "Spring 2017 - Spring 2018",
                description: "Managed meeting notes and event communications."
            }
        ],
        "A3 (Anime Club)": [
            {
                role: "Vice President",
                date: "Spring 2021 - Fall 2021",
                description: "Managed meetings in the absence of the President."
            },
            {
                role: "Fundraising Coordinator",
                date: "Fall 2018 - Spring 2021",
                description: "Organized and led fundraising efforts for the club."
            }
        ],
        "Computer Security Group": [
            {
                role: "Member",
                date: "2018 - 2020",
                description: ""
            }
        ]
    },
    hobbies: {
        "Gaming": [
            {
                name: "Card Games",
                description: "Playing and collecting trading card games including Magic: The Gathering, Weiss Schwarz, and Union Arena"
            },
            {
                name: "Video Games",
                description: "Enjoying various games including the Pokémon series, League of Legends, Destiny 2, and Final Fantasy VII"
            }
        ],
        "Entertainment": [
            {
                name: "Reading",
                description: "Enjoying literature including A Clockwork Orange, Fight Club, the Monogatari Series, and The Saga of Tanya the Evil"
            },
            {
                name: "Shows & Media",
                description: "Following various series including Red vs Blue, RWBY, The Dragon Prince, Kids on The Slope, NCIS, and Arcane"
            }
        ]
    }
};

// Populate Experience Section
function populateExperience() {
    const experienceContainer = document.querySelector('.experience-items');
    resumeData.experience.forEach(exp => {
        const expElement = document.createElement('div');
        expElement.className = 'experience-item';
        expElement.innerHTML = `
            <h3>${exp.title} at ${exp.company}</h3>
            <div class="date">${exp.date}</div>
            <p class="description">${exp.description}</p>
        `;
        experienceContainer.appendChild(expElement);
    });
}

// Populate Education Section
function populateEducation() {
    const educationContainer = document.querySelector('.education-items');
    
    // Add Certifications
    const certElement = document.createElement('div');
    certElement.className = 'education-item certifications';
    certElement.innerHTML = `
        <h3>Certifications</h3>
        <ul>
            ${resumeData.certifications.map(cert => `<li>${cert}</li>`).join('')}
        </ul>
    `;
    educationContainer.appendChild(certElement);
    
    // Add Education
    resumeData.education.forEach(edu => {
        const eduElement = document.createElement('div');
        eduElement.className = 'education-item';
        eduElement.innerHTML = `
            <h3>${edu.degree}</h3>
            <p>${edu.school}, ${edu.location}</p>
            <div class="date">${edu.date}</div>
            ${edu.description ? `<p>${edu.description}</p>` : ''}
        `;
        educationContainer.appendChild(eduElement);
    });
}

// Populate Skills Section
function populateSkills() {
    const skillsContainer = document.querySelector('.skills-grid');
    resumeData.skills.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.className = 'skill-item';
        skillElement.textContent = skill;
        skillsContainer.appendChild(skillElement);
    });
}

// Populate Leadership Section
function populateLeadership() {
    const leadershipContainer = document.querySelector('.leadership-items');
    
    // Clear existing content
    leadershipContainer.innerHTML = '';
    
    // Iterate through each organization
    for (const [organization, roles] of Object.entries(resumeData.leadership)) {
        const orgElement = document.createElement('div');
        orgElement.className = 'organization-group';
        
        // Add organization header
        const orgHeader = document.createElement('h3');
        orgHeader.className = 'organization-header';
        orgHeader.textContent = organization;
        orgElement.appendChild(orgHeader);
        
        // Add roles for this organization
        const rolesContainer = document.createElement('div');
        rolesContainer.className = 'roles-container';
        
        roles.forEach(item => {
            const roleElement = document.createElement('div');
            roleElement.className = 'leadership-item';
            roleElement.innerHTML = `
                <div class="role-header">
                    <span class="role-title">${item.role}</span>
                    <span class="date">${item.date}</span>
                </div>
                ${item.description ? `<p>${item.description}</p>` : ''}
            `;
            rolesContainer.appendChild(roleElement);
        });
        
        orgElement.appendChild(rolesContainer);
        leadershipContainer.appendChild(orgElement);
    }
}

// Populate Hobbies Section
function populateHobbies() {
    const hobbiesContainer = document.querySelector('.hobbies-grid');
    
    // Clear existing content
    hobbiesContainer.innerHTML = '';
    
    // Iterate through each hobby category
    for (const [category, items] of Object.entries(resumeData.hobbies)) {
        const categoryElement = document.createElement('div');
        categoryElement.className = 'hobby-group';
        
        // Add category header
        const categoryHeader = document.createElement('h3');
        categoryHeader.className = 'category-header';
        categoryHeader.textContent = category;
        categoryElement.appendChild(categoryHeader);
        
        // Add items for this category
        const itemsContainer = document.createElement('div');
        itemsContainer.className = 'hobby-items-container';
        
        items.forEach(item => {
            const hobbyElement = document.createElement('div');
            hobbyElement.className = 'hobby-item';
            hobbyElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            `;
            itemsContainer.appendChild(hobbyElement);
        });
        
        categoryElement.appendChild(itemsContainer);
        hobbiesContainer.appendChild(categoryElement);
    }
}

// Update About Section
function updateAbout() {
    const aboutSection = document.querySelector('#about p');
    if (aboutSection) {
        aboutSection.textContent = resumeData.about;
    }
}

// Initialize when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
    updateAbout();
    populateExperience();
    populateEducation();
    populateSkills();
    populateLeadership();
    populateHobbies();

    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    // Toggle mobile menu
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.classList.remove('active');
        }
    });

    // Close mobile menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}); 
