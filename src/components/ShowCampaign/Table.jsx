import React from "react";
import { Table as SemanticTable } from "semantic-ui-react";
import RequestRow from "./RequestRow";

const Table = ({ campaignData }) => {
  const { Header, Row, HeaderCell, Body } = SemanticTable;

  const renderRow = () => {
    return campaignData.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={campaignData.contractAddress}
          approversCount={campaignData.approversCount}
        />
      );
    });
  };

  return (
    <SemanticTable>
      <Header>
        <Row>
          <HeaderCell>ID</HeaderCell>
          <HeaderCell>Description</HeaderCell>
          <HeaderCell>Amount</HeaderCell>
          <HeaderCell>Recipient</HeaderCell>
          <HeaderCell>Approval count</HeaderCell>
          <HeaderCell>Approve</HeaderCell>
          <HeaderCell>Finalize</HeaderCell>
        </Row>
      </Header>
      <Body>{renderRow()}</Body>
      <h4>Found {campaignData.requestsCount} requests</h4>
    </SemanticTable>
  );
};

export default Table;
