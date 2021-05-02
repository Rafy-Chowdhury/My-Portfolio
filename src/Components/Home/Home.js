import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import SendMail from '../SendMail/SendMail';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            <Navigation/>
            <TopBanner/>
            <SendMail/>
            <Footer/>
            
        </div>
    );
};

export default Home;