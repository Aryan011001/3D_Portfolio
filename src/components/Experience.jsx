import React from "react";
import { motion } from "framer-motion";

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Jan 2023 - Present"
          iconStyle={{ background: 'rgb(192,192,192)', color: '#fff' }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src="src/assets/company/meta.png"
                alt="meta"
                className='w-[80%] h-[80%] object-contain'
              />
            </div>
          }
        >
          <motion.h3 className="vertical-timeline-element-title" >Full stack Developer</motion.h3>
          <h4 className="vertical-timeline-element-subtitle" >Meta</h4>
          <motion.p whileHover={"visible"}>
            <motion.li variants={{visible:{opacity:1, transition:{duration:1, delay: 1, }}}} >Developing and maintaining web applications using React.js and other related technologies.</motion.li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
          </motion.p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Jan 2022 - Jan 2023"

          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src="src/assets/company/shopify.png"
                alt="Shopify"
                className='w-[80%] h-[80%] object-contain'
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">Web Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Shopify</h4>
          <p>
            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Jan 2021 - Feb 2022"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src="src/assets/company/tesla.png"
                alt="Tesla"
                className='w-[80%] h-[80%] object-contain'
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">React Native Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Tesla</h4>
          <p>
            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="March 2020 - April 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#383E56' }}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src="src/assets/company/starbucks.png"
                alt="Starbucks"
                className='w-[80%] h-[80%] object-contain'
              />
            </div>
          }
        >
          <h3 className="vertical-timeline-element-title">React.js Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Starbucks
          </h4>
          <p>
            <li>Developing and maintaining web applications using React.js and other related technologies.</li>
            <li>Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.</li>
            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
            <li>Participating in code reviews and providing constructive feedback to other developers.</li>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </>
  );
};

export default SectionWrapper(Experience, "work") 