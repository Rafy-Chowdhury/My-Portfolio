import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Projects from '../projects/Projects';

import SendMail from '../SendMail/SendMail';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            
            <TopBanner/>
            <AboutMe/>
            <Projects/>
            <SendMail/>
            <Footer/>
            
        </div>
    );
};

export default Home;