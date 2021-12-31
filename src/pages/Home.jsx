import React from "react";

import Navigation from "../components/Navigation/Navigation";
import Welcome from "../components/Welcome/Welcome";
import FeaturedCampaign from "../components/FeaturedCampaign/FeaturedCampaign";
import CampaignList from "../components/CampaignList/CampaignList";
import Bottom from "../components/Bottom/Bottom";

const Home = () => {
  return (
    <div>
      <Navigation />
      <Welcome />
      <div className="campaigns-list-wrapper">
        <FeaturedCampaign />
        <CampaignList />
      </div>
      <Bottom />
    </div>
  );
};

export default Home;
