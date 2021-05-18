import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Footer from '../Footer/Footer';
import Projects from '../projects/Projects';
import SendMail from '../SendMail/SendMail';
import TopBanner from '../TopBanner/TopBanner';
import './Home.css';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const Home = () => {
    
    return (
       
                <div>
                <TopBanner/>
                    <AboutMe/>
                    <Projects/>
                    <SendMail/>
                    <Footer/>
                    <MessengerCustomerChat pageId="101122885505738" appId="140511544731448" />
                </div>

    );
};

export default Home;