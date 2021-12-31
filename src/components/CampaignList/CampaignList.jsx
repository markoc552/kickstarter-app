import React from "react";

import { Image, Pagination } from "semantic-ui-react";
import history from "../../history";
import "./styles.css";

const CampaignList = () => {
  return (
    <div className="campaign-list-wrapper">
      <div
        className="campaign-list-item"
        onClick={() => history.push("/campaign/0x123")}
      >
        <Image
          size="small"
          src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        />
        <div className="campaign-list-item-description">
          <div>test</div>
          <div>test2</div>
        </div>
      </div>
      <Pagination
        style={{ margin: "0 auto" }}
        defaultActivePage={5}
        totalPages={10}
      />
    </div>
  );
};

export default CampaignList;
