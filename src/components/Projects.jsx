import React, { useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { oeil } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";
import ProjectDetails from "./ProjetDetails";

const ProjectCard = ({
  id,
  name,
  date,
  descriptionRapide,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  competences,
  pic
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
    console.log(showDetails);
  };

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}
    >
      <div
        className="absolute top-0 left-0 z-10 bg-jetLight 
      h-full w-full opacity-[0.4] rounded-[24px]"
      ></div>

      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
        whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
        absolute lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
        leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20"
          >
            {repo && (
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, "_blank")}
                className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                  flex justify-center items-center cursor-pointer
                  sm:opacity-[0.9] opacity-[0.8]"
              >
                <img
                  src={oeil}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                  title="démo"
                />
              </div>
            </div>
            )}

            <h2
              className="font-bold sm:text-[32px] text-[24px] 
              text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>
            <p
              className="text-silver sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[1px]"
            >
              {descriptionRapide}
            </p>
            <button
              className="live-demo flex justify-center
              sm:text-[16px] text-[14px] text-timberWolf 
              font-bold font-beckman items-center py-5 pl-2 pr-3 
              whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
              w-[125px] h-[46px] rounded-[10px] glassmorphism 
              sm:mt-[22px] mt-[16px] hover:bg-battleGray 
              hover:text-eerieBlack transition duration-[0.2s] 
              ease-in-out"
              onClick={toggleDetails}
            >
              Détails
            </button>
          </div>
          {showDetails && (
            <ProjectDetails
              img={image}
              titre={name}
              date={date}
              description={description}
              competences={competences}
              pic={pic}
              fermeDetails={toggleDetails}
            />
          )}
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState("project-2");

  return (
    <div className="mt-[1rem]"> 
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Ce que je sais faire</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projets.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
        >
          Ma démarche artistique est ancrée dans un{" "}
          <span className="text-xl text-turquoise uppercase font-bold">
            engagement constant
          </span>{" "}
          envers l'excellence créative. Je m'investis profondément dans chaque
          projet, mettant un point d'honneur à constamment{" "}
          <span className="text-xl text-turquoise uppercase font-bold">
            affiner et développer
          </span>{" "}
          mes idées. Ma quête d'inspiration est inépuisable, alors que j'explore
          des horizons variés pour nourrir ma créativité. En tant que personne
          polyvalente, je m'efforce de{" "}
          <span className="text-xl text-turquoise uppercase font-bold">
            transcender les attentes
          </span>
          , que ce soit dans la conception d'interfaces utilisateur, la création
          de logos, le développement front-end, la réalisation visuelle de jeux
          vidéo, le montage vidéo, ou d'autres projets créatifs. Ma motivation
          ultime est de créer des œuvres qui non seulement répondent aux besoins
          fonctionnels, mais qui suscitent également une{" "}
          <span className="text-xl text-turquoise uppercase font-bold">
            fierté personnelle
          </span>
          , reflétant un engagement inébranlable envers l'art et l'innovation.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, "projects");
