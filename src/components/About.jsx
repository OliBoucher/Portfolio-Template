import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { cvVideo } from "../assets";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="mt-[1rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>développeur front end</p>
        <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
      </motion.div>

      <div className="lg:grid grid-cols-2 gap-x-20">
        <div className="mb-10">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            Je m'appelle Oli Boucher, je suis un développeur front end ayant effectué ses études au Cégep de Saint-Jérôme en techniques d'intégration multimédia.
          </motion.p>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
          >
            De nature travaillant, persévérant et déterminé à progresser continuellement, mon objectif est de briser les frontières entre l’art et la technologie. Je vise à dominer le développement front end et le design web, en élargissant mes compétences artistiques par l’exploration et la maîtrise de frameworks et de techniques, au sein d’une équipe dynamique.
          </motion.p>
        </div>
        <video controls src={cvVideo} className="w-full rounded-3xl"></video>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
