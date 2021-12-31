import React from "react";
import "./styles.css";
import { Image } from "semantic-ui-react";

const FeaturedCampaign = () => {
  return (
    <div className="featured-campaign-wrapper">
      <div className="featured-campaign-headline">Feautured campaign</div>
      <Image
        size="large"
        src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
      />
      <div className="featured-campaign-name">Best campaign</div>
      <div className="featured-campaign-description">
        Best campaign oaksdoaksdokasdokasodk
      </div>
    </div>
  );
};

export default FeaturedCampaign;
