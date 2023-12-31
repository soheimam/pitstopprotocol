import React, { useEffect, useState } from "react";
import Grid from "./Layout/Grid";
import LargeDriver from "./LargeDriver";
import SmallDriver from "./SmallDriver";
import CarCard from "./CarCard";
import { useCanvasData } from "@/hooks/useCanvasData";
import { useTokenData } from "@/hooks/useTokenData";
import { driverArray, teamArray } from "@/utils/NameToNumberMapper";

function MintView({ walletAddress, isConnected }: any) {
  const [selectedDrivers, setSelectedDrivers] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState<string>("");
  const [selectedSellDriver, setSelectedSellDriver] = useState<string>("");

  const {
    mintTransaction,
    mintLoading,
    mintTransactionPending,
    refetchMintPrep,
    activeRace,
    canvasData,
    getDriverCost,
  } = useCanvasData(walletAddress, isConnected, selectedDrivers, selectedTeam);

  const {
    approveCanvasContractPaymentTokenSpend,
    canvasSpendAllowance,
    approveCanvasContractPaymentTokenSpendLoading,
    approveLoading,
  } = useTokenData(
    walletAddress,
    isConnected,
    activeRace,
    canvasData,
    selectedSellDriver
  );

  const handleDriverSelect = (id: string) => {
    if (selectedDrivers.includes(id)) {
      setSelectedDrivers(selectedDrivers.filter((driver) => driver !== id));
    } else if (selectedDrivers.length < 2) {
      setSelectedDrivers([...selectedDrivers, id]);
    }
  };

  useEffect(() => {
    console.log("CANVASSSS", canvasData?.attributes);
    if (canvasData) {
      const defaultList = [];
      const mainDriver = canvasData.attributes.find(
        (h) => h.trait_type == "Main Driver"
      )?.value;
      const secondaryDriver = canvasData.attributes.find(
        (h) => h.trait_type == "Secondary Driver"
      )?.value;
      if (mainDriver) {
        defaultList.push(mainDriver);
      }
      if (secondaryDriver) {
        defaultList.push(secondaryDriver);
      }
      setSelectedDrivers(defaultList);

      const _team = canvasData.attributes.find(
        (h) => h.trait_type == "Team"
      )?.value;
      if (_team) {
        setSelectedTeam(_team);
      }
    }
  }, [canvasData]);

  console.log("SELECTED", selectedDrivers, canvasData);

  return (
    <Grid>
      <div className="col-span-12 text-base-content">
        <h1>TEAM BUILDER</h1>
      </div>
      <LargeDriver
        driverImg={selectedDrivers[0]}
        canvas={canvasData}
        price={getDriverCost(selectedDrivers[0]).toString()}
        key={"1"}
      />
      <LargeDriver
        driverImg={selectedDrivers[1]}
        canvas={canvasData}
        price={getDriverCost(selectedDrivers[1]).toString()}
        key={"2"}
      />
      <div className="col-start-6 col-span-2 place-self-center">
        {!canvasData ? (
          <>
            <button
              onClick={async () => {
                if ((canvasSpendAllowance as unknown as bigint) == 0n) {
                  approveCanvasContractPaymentTokenSpend!();
                  return;
                }
                await refetchMintPrep();
                if (mintTransaction) {
                  mintTransaction();
                }
              }}
              className="btn btn-primary"
            >
              {!mintLoading &&
              !approveCanvasContractPaymentTokenSpendLoading &&
              !approveLoading &&
              !mintTransactionPending ? (
                (canvasSpendAllowance as unknown as bigint) == 0n ? (
                  "Approve"
                ) : (
                  "Mint"
                )
              ) : (
                <span className="loading loading-ring loading-lg"></span>
              )}
            </button>
          </>
        ) : null}
      </div>
      <section className="col-start-1 col-span-6 grid grid-cols-5 bg-neutral rounded-box">
        {driverArray().map((driver) => (
          <SmallDriver
            onSelect={handleDriverSelect}
            img={driver}
            key={driver}
            selectedDrivers={selectedDrivers}
            clickCount={selectedDrivers.length}
          />
        ))}
      </section>
      <div className="col-start-7 col-span-full carousel  carousel-center  p-4 space-x-4 bg-neutral rounded-box">
        {selectedTeam === "" ? (
          teamArray().map((car) => (
            <CarCard
              carImg={car}
              selectedTeam={selectedTeam}
              setSelectedTeam={setSelectedTeam}
              key={car}
            />
          ))
        ) : (
          <CarCard
            carImg={selectedTeam}
            selectedTeam={selectedTeam}
            setSelectedTeam={setSelectedTeam}
            key={selectedTeam}
          />
        )}
      </div>
    </Grid>
  );
}

export default MintView;
