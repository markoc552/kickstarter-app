import React, { useState } from "react";

import CampaignDetails from "../components/ShowCampaign/CampaignDetails";
import CampaignRequests from "../components/ShowCampaign/CampaignRequests";

import "../components/ShowCampaign/styles.css";

const ShowCampaign = () => {
  const [showPage, updatePageToShow] = useState("details");

  const items = [
    {
      header: 0x123,
      meta: "Address of manager",
      description: "Manager created this campaing and can create requests",
      style: { overflowWrap: "break-word" },
    },
    {
      header: 1000,
      meta: "Current balance",
      description: "Balance that is available on the contract",
    },
    {
      header: 2,
      meta: "Minimum Contribution",
      description: "Minimum ammount of ether needed to contribute the campaign",
    },
    {
      header: 2,
      meta: "Request Count",
      description: "Number of requests in this campaign",
    },
    {
      header: 1,
      meta: "Approvers Count",
      description: "People who approved this campaign",
    },
  ];

  return (
    <div className="show-campaign-container">
      <div className="show-campaign-wrapper">
        {showPage === "details" ? (
          <CampaignDetails updatePageToShow={updatePageToShow} />
        ) : (
          <CampaignRequests updatePageToShow={updatePageToShow} />
        )}
      </div>
    </div>
  );
};

export default ShowCampaign;
