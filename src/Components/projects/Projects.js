import React from 'react';
import { useHistory } from 'react-router';
import PrijectCard from '../ProjectCard/PrijectCard';
import './Projects.css';

const Projects = () => {
    const fakeData = [
        {
            title: "MY DIARY",
            img:"https://drive.google.com/file/d/17oYGoBdoF8WzhlF1QTaeogzTEYVypSV8/view?usp=sharing",
            about: "User can sign in, sign up and sign out. they can create post and also can edit and delete them.",
            liveLink: "https://my-diary-3c66a.web.app/",
            github: "https://github.com/Rafy-Chowdhury/MyDiary-client"
        },
        {
            title: "HOUSE CLEANING",
            img:"https://drive.google.com/file/d/1-bViLNxsxZYHXZYGYtoYVDVY-IINuF0l/view?usp=sharing",
            about: "This is a online service site which is  build on different kind of house cleaning  services",
            liveLink: "https://house-cleaning-f1abb.web.app/",
            github: "https://github.com/Rafy-Chowdhury/HouseCleanning"
        },
        {
            title: "IMAGE SLIDER",
            img:"https://drive.google.com/file/d/19b7gzoXehjWIWI4Hwr-PWADzZp2hsRdl/view?usp=sharing",
            about: "you can search many types of natural picture from the search box like river,mountain",
            liveLink: "https://rafy-chowdhury.github.io/fancy-assignment-6/",
            github:"https://github.com/Rafy-Chowdhury/fancy-assignment-6"
        }
    ]

    const history = useHistory();

    const handleProjects = () => {
        history.push('/more');
    }


    return (
        <div style={{backgroundColor: "#20191a"}} className="">
            <div>
                <h2 className="text-center headerStyling">My Projects </h2>
            </div>
            <div style={{padding: "50px"}} className="container">
                <div className="row">
                {
                fakeData.map(data => <PrijectCard data={data} ></PrijectCard>)
                }
                </div>
                <div className="mt-5 text-center">
                    <button onClick={() => handleProjects()} style={{backgroundColor: "crimson", color: "white",border: "2px solid #20191a", borderRadius: "5px", padding: "5px"}}>More Projects</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;