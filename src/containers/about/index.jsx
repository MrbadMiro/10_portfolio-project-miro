import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiApple, DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase } from "react-icons/fa";

const personalDetails = [
  {
    label: "Name",
    value: "Mirojan. K",
  },
  {
    label: "Age",
    value: "23",
  },
  {
    label: "Address",
    value: "SriLanka",
  },
  {
    label: "Email",
    value: "yogamiro18@gmail.com",
  },
  {
    label: "Contact No",
    value: "+94 0774025043",
  },
];

const jobSummary =
"Enthusiastic MERN Stack Developer with 1 year of focused back-end development experience, proficient in JavaScript (ES6+), React.js, HTML5, CSS3, Bootstrap, Node.js, Express.js, MongoDB, and Git.                With 2 years as a Front-End Web Developer, I specialize in HTML5, CSS, JavaScript, jQuery, and Bootstrap, focusing on React.js for seamless front-end web development with a strong emphasis on error handling and responsive design.              In my 1-year stint as a UI/UX Designer, I specialized in UI/UX design, utilizing Figma and Adobe XD for collaborative design projects.                 Additionally, I have 2 years of experience as a Graphics Designer, proficient in graphic design with familiarity in Illustrator. I bring expertise in building robust back-end solutions, creating RESTful APIs, and implementing agile methodologies for efficient project delivery. My key skills include effective communication, teamwork, problem-solving, adaptability, and time management. Excited to contribute my technical skills ";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <h3 className="personalInformationHeaderText">
              Personal Information
            </h3>
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translatex(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiAndroid size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
              </div>
              <div>
                <DiApple size={60} color="var( --yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};
export default About;
