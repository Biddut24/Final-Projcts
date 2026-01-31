import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Advocate from './Advocate/Advocate';
import ExpertTeams from './Expert Teams/Expert Teams';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import News from './News/News';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Advocate></Advocate>
           <ExpertTeams/>
           <MakeAppointment/>
           <News></News>
        </div>
    );
};

export default Home;