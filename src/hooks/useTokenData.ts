import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  erc20ABI,
  UseContractReadConfig,
  useContractReads,
} from "wagmi";
import { MaxUint256 } from "ethers";

import { useState } from "react";

export function useTokenData(
  tokenContractAddress: `0x${string}`,
  canvasContractAddress: `0x${string}`,
  usersWalletAddress: `0x${string}`
) {
  const [tokenBalanceOf, setTokenBalanceOf] = useState<number>(0);
  const [canvasSpendAllowance, setCanvasSpendAllowance] = useState<number>(0);

  const abi = abiFetcher("Token");

  const props: Partial<UseContractReadConfig> = {
    address: tokenContractAddress,
    abi,
    enabled: true,
  };

  // Token Contract Reads
  const { refetch: refetchContractReads } = useContractReads({
    onSuccess: async (data: any) => {
      const [balanceOf, allowance] = data;
      setTokenBalanceOf(balanceOf); // Do converting here if we need to
      setCanvasSpendAllowance(allowance);
    },
    enabled: true,
    contracts: [
      {
        ...props,
        functionName: "balanceOf",
        args: [usersWalletAddress],
      },
      {
        ...props,
        functionName: "allowance",
        args: [usersWalletAddress, tokenContractAddress],
      },
    ],
  });

  const { config: prepareApproveOfPaymentToken } = usePrepareContractWrite({
    abi: erc20ABI,
    address: tokenContractAddress,
    functionName: "approve",
    enabled: canvasSpendAllowance === 0,
    args: [canvasContractAddress, MaxUint256],
  });

  const {
    data: approvePaymentTokenSpendData,
    write: approveCanvasContractPaymentTokenSpend,
  } = useContractWrite(prepareApproveOfPaymentToken);

  const { isLoading: approveCanvasContractPaymentTokenSpendLoading } =
    useWaitForTransaction({
      hash: approvePaymentTokenSpendData?.hash,
      enabled: true,
      onSuccess: async (data: any) => {
        await refetchContractReads();
      },
    });

  return {
    approveCanvasContractPaymentTokenSpend,
    approveCanvasContractPaymentTokenSpendLoading,
    canvasSpendAllowance,
    tokenBalanceOf,
  };
}