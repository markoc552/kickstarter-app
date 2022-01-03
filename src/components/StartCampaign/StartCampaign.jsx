import React, { useState } from "react";

import { Form, Message, Input, Button, TextArea } from "semantic-ui-react";
import ImageUploader from "./ImageUploader";

import web3 from "../../ethereum/web3";
import factoryCampaign from "../../ethereum/contract";

const StartCampaign = () => {
  const [minimumContribution, setMinimumContribution] = useState(0);
  const [campaignName, setCampaignName] = useState("");
  const [campaignImage, setCampaignImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const accounts = await web3.eth.getAccounts();

      await factoryCampaign.methods
        .createCampaign(minimumContribution)
        .send({ from: accounts[0], gasLimit: "0x6691b7" });
    } catch (err) {
      setErrorMessage(err.message);
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={() => onSubmit()} error={!!errorMessage}>
      <Form.Field>
        <ImageUploader />
      </Form.Field>
      <Form.Field>
        <label>Name</label>
        <Input
          value={campaignName}
          onChange={(event) => setCampaignName(event.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Minimum Contribution</label>
        <Input
          label="wei"
          labelPosition="right"
          value={minimumContribution}
          onChange={(event) => setMinimumContribution(event.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Description</label>
        <TextArea placeholder="Tell us more" />
      </Form.Field>
      <Message error header="Ooops!" content={errorMessage} />
      <Button floated="right" primary loading={loading}>
        Create
      </Button>
    </Form>
  );
};

export default StartCampaign;
