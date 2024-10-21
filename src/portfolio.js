/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Serge Henry",
  title: "Hi all, I'm Serge Henry",
  subTitle: emoji(
    "A passionate IT Specialist 🚀 having an experience of building Web, Networking, Hardware and Software Troubleshoot, CCTV Installation, Server Administration, Programming."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1-XgcL8EAMo7noLGKaIrBvBH15mbYCChL/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/serge089",
  linkedin: "https://www.linkedin.com/in/serge-henry-legaspi-164153269/",
  gmail: "sergelegaspi15@gmail.com",
  gitlab: " ",
  facebook: "https://www.facebook.com/CallmeDongHae",
  medium: " ",
  stackoverflow: " ",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "IM AN IT SPECIALIST WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Hardware Setup & Configuration (Installing and configuration of computer hardware, operating system and application)"
    ),
    emoji("⚡ Technical Support (Troubleshooting hardware, software, and network (LAN/VLAN) issue"),
    emoji(
      "⚡ Network Management (Managing and configuring network infrastructure, including LAN/VLAN, routing, firewall rules, implenting bandwidth limits, QoS, VPN Connections"
    ),
    emoji("⚡ IT Security (Firewall management and security monitoring)"),
    emoji("⚡ Monitoring & Reporting (Deploying network monitoring tools like PRTG and Generating reports on computer and network performance for analysis and improvement.)"),
    emoji("⚡ IT Asset Management (Managing IT inventory records, ensuring up-to-date and accurate tracking of IT assets.)"),
    emoji("⚡ ITSM Tools (Using IT Service Management tools to organize and streamline IT processes.)"),
    emoji("⚡ Cross-functional Collaboration (Working closely with other departments to ensure IT systems align with business needs.)"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cavite State University",
      logo: require("./assets/images/cavsuLogo.png"),
      subHeader: "Bachelor of Science Computer Engineering",
      duration: "March 2015 - April 2020",
      desc: "Best Thesis on 2019",
      descBullets: [
        "Ranked 10% in the programming skills",
        "Certified python programmer"
      ]
    },

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "IT Specialist",
      company: "Fusion BPO",
      companylogo: require("./assets/images/fusionLogo.png"),
      date: "March 2022 – Present",
      desc: "IT administration, System admin",
      descBullets: [
        "I'm an IT Specialist with expertise in hardware setup, network management, troubleshooting, and providing technical support for both onsite and remote teams",
      ]
    },
    {
      role: "Programmer",
      company: "Freelancer",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2022",
      desc: " I specialize in developing custom software solutions, creating efficient code, and building user-friendly applications",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/teleservLogo.png"),
      projectName: "Teleserv Inventory System",
      projectDesc: "Inventory system that contain of all PC",
      footerLink: [
        {
          name: "Visit Website",
          url: " "
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: " ",
      footerLink: [
        {
          name: "Visit Website",
          url: " "
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
      title: "Junior Phillipine Computer Society",
      subtitle:
        "Champion for Design Thinking",
      image: require("./assets/images/JPCSlogo.jpg"),
      imageAlt: " ",
      footerLink: [
        {
          name: "Certification",
          url: " "
        },
        {
          name: "Award Letter",
          url: " "
        },
        {
          name: "Google Code-in Blog",
          url: " "
        }
      ]
    },
    {
      title: "Junior Phillipine Computer Society",
      subtitle:
        "Best in Critical Thinking Awards",
      image: require("./assets/images/JPCSlogo.jpg"),
      imageAlt: " ",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: " "
        }
      ]
    },

    {
      title: "Best in Thesis",
      subtitle: "Best in Thesis award",
      image: require("./assets/images/cavsuLogo.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: " "
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+63 999 318 0697",
  email_address: "sergelegaspi15@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  resumeSection
};
