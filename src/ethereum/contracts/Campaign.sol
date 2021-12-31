pragma solidity 0.4.17;


contract FactoryCampaign {
    address[] public deployedCampaigns;

    function createCampaign(uint256 minimum) public {
        address newCampaing = new Campaign(minimum, msg.sender); //create instance of campaign contract

        deployedCampaigns.push(newCampaing);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}


contract Campaign {
    struct Request {
        string description;
        uint256 value;
        address recepient;
        bool complete;
        uint256 approvalsCount;
        mapping(address => bool) approvals;
    }

    Request[] public requests;
    address public manager;
    uint256 public minimumContribution;
    mapping(address => bool) public approvers;
    uint256 public approversCount;

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function Campaign(uint256 minimum, address creator) public {
        manager = creator;
        minimumContribution = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }   

    function createRequest(string description, uint256 value, address recepient)
        public
        restricted
    {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recepient: recepient,
            complete: false,
            approvalsCount: 0 //dont initialize refernce types only value types
        });

        requests.push(newRequest);
    }

    function approveRequest(uint256 index) public {
        Request storage request = requests[index];

        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);

        request.approvals[msg.sender] = true;
        request.approvalsCount++;
    }

    function finalizeRequest(uint256 index) public restricted {
        Request storage request = requests[index];

        require(request.approvalsCount > (approversCount / 2));
        require(!request.complete);

        request.recepient.transfer(request.value);
        request.complete = true;
    }

    function getSummary()
        public view
        returns (uint256, uint256, uint256, uint256, address)
    {
        return (
            minimumContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint256) {
        return requests.length;
    }
}
