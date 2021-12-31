import React from "react";
import { Table, Button } from "semantic-ui-react";

const RequestRow = ({ id, request, approversCount }) => {
  const { Row, Cell } = Table;

  const onApprove = () => {
    // const campaign = Campaign(props.address);
    // // const accounts = await web3.eth.getAccounts();
    // // await campaign.methods
    // //   .approveRequest(props.id)
    // //   .send({ from: accounts[0], gas: "1000000" });
  };

  const onFinalize = () => {
    // const campaign = Campaign(props.address);
    // const accounts = await web3.eth.getAccounts();
    // // await campaign.methods
    // //   .finalizeRequest(props.id)
    // //   .send({ from: accounts[0] });
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
