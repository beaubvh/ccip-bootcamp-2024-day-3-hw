import { expect } from "chai";
import { ethers } from "hardhat";
import { TransferUSDC, CrossChainReceiver, SwapTestnetUSDC } from "../typechain-types";


describe("TransferUSDC", function () {
  let owner;
  let estimatedFee: any;
  let transferUSDC: TransferUSDC;
  const sepoliaChainSelector = 11155111;

  // Mock addresses for CCIP router, LINK token, and USDC token on Avalanche Fuji
  const ccipRouter = "0xF694E193200268f9a4868e4Aa017A0118C9a8177";
  const linkToken = "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846";
  const usdcToken = "0x5425890298aed601595a70AB815c96711a31Bc65";


  before(async function () {
    [owner] = await ethers.getSigners();
  
    // Deploy the TransferUSDC contract
    const TransferUSDC = await ethers.getContractFactory("TransferUSDC");
    transferUSDC = await TransferUSDC.deploy(ccipRouter, linkToken, usdcToken);
    await transferUSDC.deployed();
    console.log(transferUSDC.address)
    // Allowlist Sepolia chain selector
    await transferUSDC.allowlistDestinationChain(sepoliaChainSelector, true);
  });

  it("should transfer USDC from Fuji to Sepolia", async function () {
    const receiver = "0x6e2A05B1De10732C050ddff5339967d8127b775E";
    const amount = ethers.utils.parseUnits("1", 6);
    const gasLimit = 500000;

    // Estimate the fee
    const message = {
      receiver: ethers.utils.defaultAbiCoder.encode(["address"], [receiver]),
      data: "0x",
      tokenAmounts: [{ token: usdcToken, amount }],
      extraArgs: ethers.utils.defaultAbiCoder.encode(["uint64"], [gasLimit]),
      feeToken: linkToken,
    };

    console.log(message)
    new Promise(resolve => setTimeout(resolve, 5000)); // Throttle Infura rate limit

    // Estimate the fee using the getFee function
    const ccipRouterContract = await ethers.getContractAt("IRouterClient", ccipRouter);
    estimatedFee = await ccipRouterContract.getFee(sepoliaChainSelector, message);
    const increasedGasLimit = Math.ceil(estimatedFee * 1.1); // Increase gas by 10%


    const usdcIERC20Contract = await ethers.getContractAt("IERC20", usdcToken);
    const balance = await usdcIERC20Contract.balanceOf(receiver);

    // Log the balance
    console.log("USDC Balance:", ethers.utils.formatUnits(balance, 6));

    new Promise(resolve => setTimeout(resolve, 5000));

    const res = await transferUSDC.transferUsdc(
      sepoliaChainSelector,
      receiver,
      amount,
      increasedGasLimit
    );
    console.log(res)
    expect(await usdcIERC20Contract.balanceOf(receiver)).to.equal(amount);
  });
});
