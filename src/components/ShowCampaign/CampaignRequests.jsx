import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import Table from "./Table";

import { getCampaignContract } from "../../ethereum/contract";

import "./styles.css";

const CampaignRequests = ({ updatePageToShow, address }) => {
  const [contractAddress, setContractAddress] = useState("");
  const [requests, setRequests] = useState([]);
  const [requestsCount, setRequestsCount] = useState(0);
  const [approversCount, setApproversCount] = useState(0);

  useEffect(() => {
    const getRequestsData = async () => {
      const campaign = getCampaignContract(address);

      const requestCount = await campaign.methods.getRequestsCount().call();
      const approversCount = await campaign.methods.approversCount().call();
      const requests = await Promise.all(
        Array(parseInt(requestCount))
          .fill()
          .map((element, index) => {
            return campaign.methods.requests(index).call();
          })
      );

      setContractAddress(address);
      setRequests(requests);
      setRequestsCount(requestCount);
      setApproversCount(approversCount);
    };
    getRequestsData();
  }, []);

  return (
    <div className="request-container">
      <div className="request-wrapper">
        <div className="request-headline">
          <Button
            color="red"
            style={{ margin: "0 5vw" }}
            onClick={() => updatePageToShow("details")}
          >
            Back
          </Button>
          Campaign Requests
        </div>
      </div>
      <div className="campaign-show-item">
        <Table
          campaignData={
            (contractAddress, requests, requestsCount, approversCount)
          }
        />
      </div>
    </div>
  );
};

export default CampaignRequests;
