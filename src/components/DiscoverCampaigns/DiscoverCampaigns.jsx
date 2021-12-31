import React from "react";
import "./styles.css";
import { Pagination, Image } from "semantic-ui-react";

const DiscoverCampaigns = () => {
  return (
    <div className="discover-wrapper">
      <div className="discover-wrapper-item">
        <Image
          size="small"
          src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        />
        <div className="discover-wrapper-item-description">
          <div>aosdk</div>
          <div>aosdk</div>
        </div>
        <div className="discover-wrapper-item-description">Funded: 2ETH</div>
      </div>
      <div className="discover-wrapper-item">
        <Image
          size="small"
          src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        />
        <div className="discover-wrapper-item-description">
          <div>aosdk</div>
          <div>aosdk</div>
        </div>
        <div className="discover-wrapper-item-description">Funded: 2ETH</div>
      </div>
      <div className="discover-wrapper-item">
        <Image
          size="small"
          src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        />
        <div className="discover-wrapper-item-description">
          <div>aosdk</div>
          <div>aosdk</div>
        </div>
        <div className="discover-wrapper-item-description">Funded: 2ETH</div>
      </div>
      <Pagination
        style={{ margin: "0 auto" }}
        defaultActivePage={5}
        totalPages={10}
      />
    </div>
  );
};

export default DiscoverCampaigns;
