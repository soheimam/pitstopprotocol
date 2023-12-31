import { ethers } from "hardhat";
import { Contract } from "ethers";
import { expect } from "chai";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("Canvas", function () {
  let canvas: Contract;
  let token: Contract;
  let oracle: Contract;
  let owner: SignerWithAddress;
  let addr1: SignerWithAddress;
  let addr2: SignerWithAddress;

  beforeEach(async function () {
    [owner, addr1, addr2] = await ethers.getSigners();

    const Oracle = await ethers.getContractFactory("Oracle");
    oracle = await Oracle.deploy();
    await oracle.deployed();

    const Token = await ethers.getContractFactory("Token");
    token = await Token.deploy();
    await token.deployed();

    const Canvas = await ethers.getContractFactory("Canvas");
    canvas = await Canvas.deploy(
      oracle.address,
      token.address,
      "https://api.example.com/token/"
    );
    await canvas.deployed();
  });

  it("should set the correct base URI", async function () {
    await canvas.connect(owner).setBaseURI("https://api.example.com/token/");
    expect(await canvas.baseURI()).to.equal("https://api.example.com/token/");
  });

  it("should mint a token if the sender has enough balance and allowance", async function () {
    await token
      .connect(addr1)
      .approve(token.address, ethers.utils.parseEther("2"));

    await canvas.connect(addr1).mint(1, 2, 3);
    expect(await canvas.balanceOf(addr1.address)).to.equal(1);
  });

  it("should mint a token if the sender has enough balance and allowance", async function () {
    await token
      .connect(addr1)
      .approve(token.address, ethers.utils.parseEther("2"));

    await canvas.connect(addr1).mint(1, 2, 3);
    expect(await canvas.balanceOf(addr1.address)).to.equal(1);
  });

  it("should return the correct token URI for other team/driver mint", async function () {
    await canvas.connect(addr2).mint(6, 6, 5);
    expect(await canvas.tokenURI(1)).to.equal(
      "https://api.example.com/token/1.json"
    );
  });

  it("should return the correct token URI for other team/driver mint", async function () {
    await canvas.connect(addr2).mint(8, 2, 4);
    await canvas.connect(addr2).mint(1, 2, 4);

    expect(await canvas.tokenURI(2)).to.equal(
      "https://api.example.com/token/2.json"
    );
  });
});
