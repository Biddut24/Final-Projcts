import React from 'react';
import Banner from './Banner/Banner';
import InfoCards from './InfoCards/InfoCards';
import Advocate from './Advocate/Advocate';
import ExpertTeams from './Expert Teams/Expert Teams';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Advocate></Advocate>
           <ExpertTeams/>
        </div>
    );
};

export default Home;