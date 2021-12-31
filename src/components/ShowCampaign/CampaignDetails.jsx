import React from "react";
import { Image, Progress, Button } from "semantic-ui-react";
import history from "../../history";
import "./styles.css";

const CampaignDetails = ({ updatePageToShow }) => {
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
    <div className="show-campaign-wrapper">
      <div className="show-headline">Created campaigns</div>
      <div className="campaign-show-item">
        <Image
          style={{
            margin: "auto 2vw",
            borderRadius: "20px",
            width: "30vw",
            height: "40vh",
          }}
          src="https://images.unsplash.com/photo-1494251202008-582bbc3eac69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2500&q=80"
        />
        <div className="campaign-show-item-description">
          {items.map((item) => {
            return (
              <>
                <div className="campaign-data-headline">
                  {item.meta}: {item.header}
                </div>
                <div className="campaign-data-description">
                  {item.description}
                </div>
              </>
            );
          })}
          <Progress
            percent={50}
            progress
            indicating
            style={{ margin: "5vh 0" }}
          />
          <Button color="green" onClick={() => updatePageToShow("requests")}>
            Requests
          </Button>
          <Button
            style={{ margin: "0.5vh 0" }}
            color="red"
            onClick={() => history.push("/")}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
