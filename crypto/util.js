const walletAddress = "0x008062acA356B5F93F2F14b71Fd73db91A606d0C";

async function getBalance(contract) {
    balance = await contract.methods.balanceOf(walletAddress).call();
    return balance;
}


module.exports = getBalance;
