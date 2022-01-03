import React, { useState, useEffect } from "react";

import CampaignDetails from "../components/ShowCampaign/CampaignDetails";
import CampaignRequests from "../components/ShowCampaign/CampaignRequests";

import "../components/ShowCampaign/styles.css";

const ShowCampaign = (props) => {
  const [showPage, updatePageToShow] = useState("details");
  const [address, setAddress] = useState("0");

  useEffect(() => {
    setAddress(props.params.match.address);
  }, []);

  return (
    <div className="show-campaign-container">
      <div className="show-campaign-wrapper">
        {showPage === "details" ? (
          <CampaignDetails
            updatePageToShow={updatePageToShow}
            address={address}
          />
        ) : (
          <CampaignRequests
            updatePageToShow={updatePageToShow}
            address={address}
          />
        )}
      </div>
    </div>
  );
};

export default ShowCampaign;
