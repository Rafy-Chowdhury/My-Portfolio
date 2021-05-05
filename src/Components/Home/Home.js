import React from 'react';
import Footer from '../Footer/Footer';

import SendMail from '../SendMail/SendMail';
import TopBanner from '../TopBanner/TopBanner';


const Home = () => {
    return (
        <div>
            
            <TopBanner/>
            <SendMail/>
            <Footer/>
            
        </div>
    );
};

export default Home;