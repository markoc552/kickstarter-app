import React, { useState } from "react";
import { Image, Search } from "semantic-ui-react";

import Modal from "./Modal";
import DiscoverCampaigns from "../DiscoverCampaigns/DiscoverCampaigns";
import StartCampaign from "../StartCampaign/StartCampaign";
import CampaignList from "../CampaignList/CampaignList";

import "./styles.css";

const Navigation = () => {
  const [isModalShow, showModal] = useState(false);
  const [content, setContent] = useState({});

  return (
    <div className="navigation-wrapper">
      <div
        className="navigation-item"
        onClick={() => {
          setContent({
            title: "Current campaigns",
            data: <CampaignList />,
          });
          showModal(true);
        }}
      >
        Discover
      </div>
      <div
        className="navigation-item"
        onClick={() => {
          setContent({
            title: "Start new campaign",
            data: <StartCampaign />,
          });
          showModal(true);
        }}
      >
        Start a campaign
      </div>
      <Image
        size="small"
        src="https://logos-world.net/wp-content/uploads/2020/10/Kickstarter-Logo-700x394.png"
      />
      <Search style={{ margin: "auto auto", fontSize: "15px" }} />
      <div className="navigation-item">Login</div>
      <Modal
        showModal={showModal}
        content={content}
        isModalShow={isModalShow}
      />
    </div>
  );
};

export default Navigation;
