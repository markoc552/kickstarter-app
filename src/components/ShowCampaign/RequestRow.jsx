import React from "react";
import { Table, Button } from "semantic-ui-react";

import { getCampaignContract } from "../../ethereum/contract";
import web3 from "../../ethereum/web3";

const RequestRow = ({ id, request, approversCount, address }) => {
  const { Row, Cell } = Table;

  const onApprove = async () => {
    const campaign = getCampaignContract(address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods
      .approveRequest(id)
      .send({ from: accounts[0], gas: "1000000" });
  };

  const onFinalize = async () => {
    const campaign = getCampaignContract(address);

    const accounts = await web3.eth.getAccounts();

    await campaign.methods.finalizeRequest(id).send({ from: accounts[0] });
  };

  const isReadyToFinalize = () => {
    return request.approvalCount > approversCount / 2;
  };

  return (
    <Row
      disabled={request.complete}
      positive={isReadyToFinalize() && request.complete}
    >
      <Cell>{id}</Cell>
      <Cell>{request.description}</Cell>
      <Cell>11111</Cell>
      <Cell>{request.recepient}</Cell>
      <Cell>
        {request.approvalsCount}/{approversCount}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color="green" basic onClick={() => onApprove()}>
            Approve
          </Button>
        )}
      </Cell>
      <Cell>
        {request.complete ? null : (
          <Button color="blue" basic onClick={() => onFinalize()}>
            Finalize
          </Button>
        )}
      </Cell>
    </Row>
  );
};

export default RequestRow;
