const Spacebear = artifacts.require("Spacebear");
const truffleAssert = require("truffle-assertions");

contract("Spacebear", (accounts)=>{
    it("Should credit an NFT to a specific accounts", async() =>{
        const spacebearIntance = await Spacebear.deployed();
        let txtResult = await spacebearIntance.safeMint(accounts[1], "spacebear_1.json");
        //console.log(await spacebearIntance.ownerOf(0));
        //console.log(txtResult);
        // assert.equal(txtResult.logs[0].event, "Transfer", "Event is not the tranfer Event");
        // assert.equal(txtResult.logs[0].agrs.from, "0x0000000000000000000000000000000000000000", "From is not the zero address");
        console.log(txtResult.logs[0].args);
        truffleAssert.eventEmitted(txtResult, "Transfer", {from: '0x0000000000000000000000000000000000000000', to: accounts[1], tokenId: web3.utils.toBN("0")});
        assert.equal(await spacebearIntance.ownerOf(0),accounts[1], "Owner of Token 1 is not equal account 2"); 
    })
})   