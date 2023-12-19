import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProjectDetails = ({ titre, date, description, competences, img, pic, fermeDetails }) => {
    
    const images = pic.map((image, index) => ({
        original: image.url,
        thumbnail: image.url,
        thumbnailClass: "w-[100px] h-[50px] object-cover overflow-hidden mt-10",
      }));
      
  return (
      <div className="w-screen h-screen flex justify-center items-center fixed top-0 left-0 z-[100] backdrop-brightness-[30%]">
      <div className="h-[80vh] bg-gradient-to-r p-2 flex justify-center items-center from-degrade1 to-degrade2 w-[80vw] rounded-[2em]">
        <div className="w-full h-full bg-black rounded-[2em] grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-1 p-10 lg:gap-x-32 gap-10  overflow-y-scroll lg:p-20">
        <p className="text-4xl font-bold bg-degrade1 w-10 h-10 rounded-full flex justify-center items-center pb-2 mb-20" onClick={fermeDetails}>x</p>
          <div className="lg:col-start-2">
            <div className="mb-16">
                <ImageGallery items={images}
                showIndex={true}
                autoPlay={true}
                />
            </div>
          </div>
          <div className="lg:col-start-1 mt-8">
            <h2 className="font-bold text-5xl mb-3">{titre}</h2>
            <p className="text-2xl font-medium mb-10">{date}</p>
            <p className="text-xl leading-loose font-light mb-16">{description}</p>
            <h3 className="font-bold text-3xl mb-10">Compétences :</h3>
            <ul className="text-xl leading-loose font-light mb-16 list-disc ml-16">
              {competences.map((competence, index) => (
                <li key={index}>{competence.competence}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
