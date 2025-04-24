/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Manitoba",
      logo: require("./assets/images/university logo.png"),
      subHeader: "Bachelors of Science in Computer Science",
      duration: "Jan 2019 - Feb 2025",
      desc: "Active member of univesity's STEM initiative",
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
  username: "guptasupriya",
  title: "Hello! I am Supriya",
  workTitle: emoji(
    "Full-Stack Developer | CS Graduate | AWS Certified | Building scalable solutions with Python, Java, React & FastAPI"
  ),
  funTitle: emoji("I read to grow, I build to inspire, and I learn without limits :D"),
  futureTitle: emoji("Reimagine. Rebuild. Recode what doesn’t feel right"),
  resumeLink: "https://drive.google.com/file/d/1aaMNV3ukhFgTTAT_oENMg4oMx5GPxPOe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};


// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/supriyagupta07",
  linkedin: "https://www.linkedin.com/in/gupta-supriya/",
  hashnode: "https://hashnode.com/@supriyagupta7",
  gmail: "gupta.supriya.official@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};



// Skills Section

const skillsSection = {
  title: "Passionate about",
  subTitle: "Developing with curiosity, breaking with intent, and building with empathy",
  skills: [
    emoji(
      " 🌟  Building backend systems that are reliable, efficient, and thoughtfully designed."
    ),
    emoji(
      " 🌟  Stay hands-on by deploying Dockerized apps and crafting interactive portfolios."
    ),
    emoji(
      " 🌟  Enhancing product quality through test automation,CI/CD practices. "
    ),
    emoji(
      " 🌟 Sharing knowledge, supporting others and building tech in meaningful ways"
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
      fontAwesomeClassname: "fas fa-code-commit"  
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Automation Testing",
      fontAwesomeClassname: "fa-solid fa-gear"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fa-solid fa-cloud"
    },
    {
      skillName: "Agile Development",
      fontAwesomeClassname: "fa-solid fa-arrows-spin"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};



// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Scalable System Design",
      progressPercentage: "90%"
    },
    {
      Stack: "Agile Software Development",
      progressPercentage: "85%"
    },
    {
      Stack: "End-to-End Project Delivery", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud-Native Development",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Quality Engineer",
      company: "NEO Financial",
      companylogo: require("./assets/images/NEO.jpg"),
      date: "Sept 2023 – Dec 2023",
      desc: "Designed testing strategies to enhance product quality and reduced testing cycle",
      descBullets: [
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        // "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University Of Manitoba",
      companylogo: require("./assets/images/university logo.png"),
      date: "Jan 2022 – April 2018",
      desc: 'Guided new coding students through core programming concepts in Intro to Programming course'
    },
    {
      role: "Software Developer Intern",
      company: "GAO Tek",
      companylogo: require("./assets/images/gaotek.webp"),
      date: "May 2021 - Dec 2021",
      desc: "Developed, tested, and debugged software. Proposed and aligned solutions with business goals"
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
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS",
      subtitle: "AWS Cloud Practitioner Essential",
      image: require("./assets/images/AWS.png"),
      //imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1bo0jiEmkwfaiIMvjEc-BuHr-B-eBhhNI/view?usp=sharing"
        }
      ]
    },
    {
      title: "Software Development",
      subtitle: "Software Development Internship",
      image: require("./assets/images/gaotek.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1VyernMr_i3HFQv3xAzAi2T1rz7hYO4gA/view?usp=sharing"
        }
      ]
    },
    {
      title: "Network Security",
      subtitle:
        "Intro to Ethical hacking",
      image: require("./assets/images/Network.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Award Certficate",
          url: "https://drive.google.com/file/d/1JkDV_OJyOqU-VeAZHZ3pxMRg2ewEk0dZ/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle: "My journey to be tech smart",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "url1-loading...",
      title: "title1-loading...",
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
      slides_url: "",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Shout outs 📣"),
  subtitle: "Click! to know what my mentors and peers says about me",

  // Please Provide with Your Podcast embeded Link
  
  podcast: [
    {
      companylogo: require("./assets/images/university logo.png"),
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7024852540273958912/",
      description: ""
    },
    {
      companylogo: require("./assets/images/gaotek.webp"),
      link: "https://www.linkedin.com/in/gupta-supriya/details/recommendations/",
      description: ""
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+1 431-388-9172",
  email_address: "gupta.supriya.official@gmail.com"
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
  isHireable
};
