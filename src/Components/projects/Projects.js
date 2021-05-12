import React from 'react';
import PrijectCard from '../ProjectCard/PrijectCard';

const Projects = () => {
    const fakeData = [
        {
            title: "HOUSE CLEANING",
            about: "This is a online service site which is  build on different kind of house cleaning  services",
            liveLink: "https://house-cleaning-f1abb.web.app/"
        },
        {
            title: "STARBUCKS",
            about:"this is a landing page of a famous coffee shop",
            liveLink: "https://rafy-chowdhury.github.io/fictional-carnival/"
        },
        {
            title: "IMAGE SLIDER",
            about: "you can search many types of natural picture from the search box like river,mountain",
            liveLink: "https://rafy-chowdhury.github.io/fancy-assignment-6/"
        }
    ]


    return (
        <div style={{backgroundColor: "red"}} className="mt-5">
            <div>
                <h2 style={{position: "relative", top: "30px"}} className="text-center">My Projects </h2>
            </div>
            <div style={{padding: "50px"}} className="container">
                <div className="row">
                {
                fakeData.map(data => <PrijectCard data={data} ></PrijectCard>)
                }
                </div>
                <div className="mt-5 text-center">
                    <button style={{backgroundColor: "gray", color: "white",border: "1px solid gray", borderRadius: "5px"}}>More Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;