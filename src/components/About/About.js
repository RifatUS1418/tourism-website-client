import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import History from './History/History';
import Members from './Members/Members';
import OurTeamBanner from './OurTeam/OurTeamBanner';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <History></History>
            <OurTeamBanner></OurTeamBanner>
            <Members></Members>
        </div>
    );
};

export default About;