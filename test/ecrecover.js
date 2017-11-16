var Ecrecover = artifacts.require("./Ecrecover.sol");

contract('Ecrecover', async(accounts) => {
    it('should return address that was originally signed', async () => {
    let ecrecover = await Ecrecover.deployed();
    // Message what will be signed
    let text = web3.sha3("This will verify that I actually signed this message");
    // Let first account sign the message
    let signedText = web3.eth.sign(accounts[0], text);

    //r,s,v is elliptical curve
    let r = signedText.substr(0,66) 
    let s = "0x" + signedText.substr(66,64);
    let v = +signedText.substr(130)+27;

    let signer = await ecrecover.verify(text, v, r, s);
    assert.equal(signer, accounts[0]);
    assert.isTrue(signer !== accounts[1]);
  });
});
