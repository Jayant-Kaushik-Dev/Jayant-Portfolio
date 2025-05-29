/* Change this file to get your personal Portfolio */
// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/Codingboy.json"; // Rename to your file name for custom animation

// Education Section
const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Winnipeg",
      logo: require("./assets/images/university1.png"),
      subHeader: "Bachelors of Business Technology Management",
      duration: "Sept 2018 - Dec 2021",
      descBullets: [
        "Completed Courses: Data Structures & Algorithms, Operating Systems, Object-Oriented Programming, Database Management "
      ]
    }
    
  ]
};

// Splash Screen
const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section
const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Jayant Kaushik",
  title: "Hello! I am Jayant",
  workTitle: emoji(
    "Software Developer | Business Technology Graduate | Proficient in Python, React, RESTful API Design, UX/UI Design|"
  ),
  futureTitle: emoji(" Building responsive frontends with React and robust backends with Python and RESTful APIs."),
  resumeLink: "https://drive.google.com/file/d/1EG2xzAfd3cicr1MyZBz0fe05QBehhG9-/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};
// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Jayant-Kaushik-Dev",
  linkedin: "https://www.linkedin.com/in/jayant-kaushik-562228114/",
  gmail: "ajkaushik98@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My skillset",
  subTitle: "Backend engineer who believes iteration is the key.",
  skills: [
    emoji(
      "⚡ Proficient in building scalable applications using React for frontend and FastAPI for backend development."
    ),
    emoji(
      "⚡ Skilled in designing, building, and consuming RESTful APIs using Python, FastAPI, and integrating them with frontend frameworks."
    ),
    emoji(
      "⚡ Hands-on experience with relational (PostgreSQL) and NoSQL (MongoDB) databases for designing schemas, queries, and data handling."
    ),
    emoji(
      "⚡ Experienced with Git, GitHub for source control, and deploying full-stack applications using platforms like Render."
    ),
    emoji(
      "⚡ Expert in user-centered UX/UI design, specializing in wireframing and interactive prototyping using Figma."
    )
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "RESTful APIs",
      fontAwesomeClassname: "fab fa-golang"
    },
    {
      skillName: "Agile Development",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Automation Testing",
      fontAwesomeClassname: "fa-solid fa-dharmachakra"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "Observability",
      fontAwesomeClassname: "fa-solid fa-magnifying-glass"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Observability",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend/Design/Develop", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "CI/CD",
      progressPercentage: "75%"
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    }  
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Information Technology Operations Specialist",
      company: "NEO Financial",
      companylogo: require("./assets/images/NEO.jpg"),
      date: "Apr 2023 – Oct 2024",
      desc: "Provided Tier 1 & 2 IT support for network, VPN, and system access issues; managed Jira-based incident workflows, automated onboarding/offboarding with scripts, and maintained Windows environments and software deployments.",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Software Developer Intern",
      company: "Aetherbyte Technologies",
      companylogo: require("./assets/images/Aetherbyte.png"),
      date: "Feb 2022 - Oct 2022",
      desc: "Developed secure React frontends and Flask REST APIs with 95% test coverage, boosting performance by 25% and database response by 30%, while collaborating via Git and Jira in Agile sprints."
    }
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "PERSONAL PROJECTS HELPED BUSINESSES",
  projects: [
    {
      image: require("./assets/images/TASK.jpeg"),
      projectName: "A task manager App - Frontend",
      projectDesc: "Frontend created using React and CSS integrated with backend",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://task-manager-frontend-b39d.onrender.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/API.png"),
      projectName: "Task manager API - Backend",
      projectDesc: "A RESTful API built with FastAPI that enables users to perform CRUD operations on tasks",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://task-manager-api-slu7.onrender.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google UX Design Certification",
      //subtitle: "",
      image: require("./assets/images/google UX.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://www.credly.com/go/6YS9WkOF"
        }
      ]
    },
    {
      title: "Udemy UX/UI Design Certification",
      subtitle:
        "Complete Web & Mobile Designer: UI/UX, Figma,+more",
      image: require("./assets/images/UX.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Certfication",
          url: "https://drive.google.com/file/d/1c_0sbKRb1kMYcoyEGlNs2HL3Yoj30GUG/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Shout outs 🎙️",
  subtitle: "Hear It from the Source",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7024852540273958912/",
      title: "",
      brief: "brief1-loading..."
    },
    {
      url: "url2-loading",
      title: "title2-loading...",
      brief: "brief2-loading..."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Shout outs 🎙️"),
  subtitle: "Reccomendation from my mentors",

  // Please Provide with Your Podcast embeded Link
  
  podcast: [
    {
    //image : "https://www.linkedin.com/feed/update/urn:li:activity:7024852540273958912/"
    companylogo: require("./assets/images/university logo.png"),
    link : " https://www.linkedin.com/feed/update/urn:li:activity:7024852540273958912/"
    },
    {
      //image : "https://www.linkedin.com/feed/update/urn:li:activity:7024852540273958912/"
      companylogo: require("./assets/images/LI.jpeg"),
      link : "https://www.linkedin.com/in/gupta-supriya/details/recommendations/"
      }

  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY UNDERSTANDING FOR LIFE😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/guptaachin-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1 431-373-4513",
  email_address: "ajkaushik98@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};
const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
};
