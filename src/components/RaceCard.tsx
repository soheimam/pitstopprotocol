import React from "react";
import Image from "next/image";

const RaceCard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col text-left text-2xl p-6 pt-6">
          <h1>Race Over</h1>
          <h1>Position: 1st</h1>
          <h1>Points: 25</h1>
        </div>
        <div className="flex flex-col text-right pr-4 pt-2">
          <h1>Cloud</h1>
          <h1>Melbourne, AU</h1>
        </div>
      </div>
      <Image
        alt="car"
        width="200"
        height="200"
        src={"https://api.metafuse.me/assets/metafuse/track_1.png"}
      />
    </div>
  );
};

export default RaceCard;
