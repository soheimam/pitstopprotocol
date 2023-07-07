import React from "react";
import Grid from "@/components/Layout/Grid";
import RaceCard from "@/components/RaceCard";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Dashboard = () => {
  const isPlaying = true;

  const StartButton = () => {
    return (
      <div className="col-span-12 h-72 flex justify-center items-center flex-row border border-secondary rounded-3xl bg-accent/70">
        <PlusCircleIcon className="h-16 w-16 text-accent pr-5" />
        <h1 className="text-5xl">START NEW GAME</h1>
      </div>
    );
  };

  return (
    <>
      <Grid>
        <div className="col-span-12 text-base-content">
          <h1>DASHBOARD</h1>
        </div>
        {isPlaying ? (
          <>
            <div className="col-span-8 h-96 bg-accent/70 border border-secondary rounded-3xl p-4">
              <h1>Welcome Sohei</h1>
            </div>
            <div className="col-span-4 bg-accent/70 border border-secondary rounded-3xl">
              <div className="text-center p-2">Top 10</div>
              <div className="flex flex-col pl-4 pb-2">
                <div>1.</div>
                <div>2.</div>
                <div>3.</div>
              </div>
            </div>
            <div className="col-span-3 flex items-center flex-col justify-center h-72 bg-accent/70 border border-secondary rounded-3xl p-4">
              <h1 className=" text-7xl pb-8">999</h1>
              <p className="text-3xl">Total Wins</p>
            </div>
            <div className="col-span-6 h-72 border border-secondary rounded-3xl bg-accent/70 text-center">
              <RaceCard />
            </div>
            <div className="col-span-3 flex items-center flex-col justify-center h-72 bg-accent/70 border border-secondary rounded-3xl p-4">
              <h1 className=" text-7xl pb-8">25</h1>
              <p className="text-3xl">Available to Claim</p>
            </div>
          </>
        ) : (
          <StartButton />
        )}
        <div className="col-span-12 text-base-content">
          <h1>Previous Games</h1>
        </div>
        <div className="col-span-6 h-72 border border-secondary rounded-3xl bg-accent/70 text-center">
          <RaceCard />
        </div>
      </Grid>
    </>
  );
};

export default Dashboard;
