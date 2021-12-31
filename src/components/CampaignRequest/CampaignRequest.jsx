import React, { useState } from "react";
import { Button, TextArea, Form, Input, Message } from "semantic-ui-react";
import "./styles.css";

const CampaignRequest = (props) => {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [recipient, setRecipient] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    // const campaign = Campaign(props.address);

    // try {
    //   const accounts = await web3.eth.getAccounts();

    //   await campaign.methods
    //     .createRequest(description, web3.utils.toWei(value, "ether"), recipient)
    //     .send({ from: accounts[0] });
    // } catch (err) {
    //   setErrorMessage(err.message);
    // }

    setLoading(false);
  };

  return (
    <div className="request-campaign-container">
      <div className="request-campaign-wrapper">
        <div className="request-form ">
          <h3>Create a request</h3>
          <Form onSubmit={() => onSubmit()} error={errorMessage}>
            <Form.Field>
              <label>Recipient</label>
              <Input
                value={recipient}
                onChange={(event) => setRecipient(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Value</label>
              <Input
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </Form.Field>
            <Form.Field>
              <label>Description</label>
              <TextArea placeholder="Tell us more" />
            </Form.Field>
            <Button primary loading={loading} floated="right">
              Create
            </Button>
            <Message
              error
              header="Something went wrong"
              content={errorMessage}
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CampaignRequest;
