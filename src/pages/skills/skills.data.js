import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import L_MSSQL from "../../assets/img/skills/mssql.svg";
import L_GIT from "../../assets/img/skills/git-icon.svg";
import L_GITHUB_PAGES from "../../assets/img/skills/github.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_JAVA from "../../assets/img/skills/java.svg"


export const skills = {

    frontend: [
        {
            link: "https://en.wikipedia.org/wiki/HTML5",
            imgAltText: "HTML 5",
            imgSrc: L_HTML5,
            skillName: "HTML5",
        },
        {
            link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
            imgAltText: "CSS 3",
            imgSrc: L_CSS3,
            skillName: "CSS3",
        },
        {
            link: "https://reactjs.org/",
            imgAltText: "React JS",
            imgSrc: L_REACT,
            skillName: "React JS",
        },
        {
            link: "https://www.javascript.com/",
            imgAltText: "JavaScript",
            imgSrc: L_JAVASCRIPT,
            skillName: "JavaScript",
        },
        {
            link: "https://getbootstrap.com/",
            imgAltText: "Bootstrap",
            imgSrc: L_BOOTSTRAP,
            skillName: "Bootstrap",
        },
        {
            link: "https://react-bootstrap.github.io/",
            imgAltText: "React Bootstrap",
            imgSrc: L_REACT_BOOTSTRAP,
            skillName: "React Bootstrap",
        },
    ],

    backend: [
        {
          link: "https://www.java.com/en/",
          imgAltText: "Java",
          imgSrc: L_JAVA,
          skillName: "Java",
        },
        {
          link: "https://expressjs.com/",
          imgAltText: "Express",
          imgSrc: L_EXPRESS,
          skillName: "Express",
        },
      ],

      databases: [
        {
          link: "https://www.microsoft.com/en-us/sql-server/sql-server-2019",
          imgAltText: "MS-SQL",
          imgSrc: L_MSSQL,
          skillName: "MS-SQL",
        },
        {
          link: "https://www.mongodb.com/",
          imgAltText: "MongoDB",
          imgSrc: L_MONGODB,
          skillName: "MongoDB",
        },
      ],
      versionControl: [
        {
          link: "https://git-scm.com/",
          imgAltText: "GIT",
          imgSrc: L_GIT,
          skillName: "GIT",
        },
      ],

      hostingPlatforms: [
        {
            link: "https://pages.github.com/",
            imgAltText: "GitHub Pages",
            imgSrc: L_GITHUB_PAGES,
            skillName: "GitHub Pages",
          },
        ],
    };

