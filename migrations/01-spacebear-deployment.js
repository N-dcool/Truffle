const Spacebear = artifacts.require("Spacebear");

module.exports = function(deployer, networks, accounts){
    console.log(networks, accounts);
    deployer.deploy(Spacebear, {from: accounts[0]});
}