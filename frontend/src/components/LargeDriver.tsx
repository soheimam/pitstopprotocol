import Image from "next/image";
import React from "react";

interface ILargeDriver {
  driverImg: string;
  price: string;
  canvas: any;
}

import silhouteImg from "public/Images/silhoute.png";
import {
  createDigitalAsset,
  createMetafuseCreatePayload,
} from "@/utils/NameToNumberMapper";

function LargeDriver({
  driverImg,
  price,
  // sellHandler,
  canvas,
}: ILargeDriver) {
  return (
    <article className="pose  col-span-6 bg-neutral flex items-center flex-col bg-neutral/70 rounded-3xl">
      <Image
        alt={"non descript driver"}
        className="rounded-b-3xl"
        src={
          driverImg
            ? `https://api.metafuse.me/assets/metafuse/${driverImg}.png`
            : silhouteImg
        }
        priority={true}
        width={300}
        height={300}
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48ZmlsdGVyIGlkPSJibHVyIj48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iMzAiLz48L2ZpbHRlcj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsdGVyPSJ1cmwoI2JsdXIpIi8+PC9zdmc+Cg=="
      />

      <button
        className="btn btn-active btn-secondary btn-wide mt-4"
        onClick={async () => {
          // sellHandler(driverImg);
          // console.log(driverImg);
          // const x = await prepareSellRefetch();
          // console.log(x);
          // sellTransaction();
          const _payload = createMetafuseCreatePayload({
            tokenId: canvas?.edition,
            mainDriver: canvas.attributes[0].value,
            secondaryDriver: "",
            team: canvas.attributes[3].value,
          });
          console.log(_payload);
          await createDigitalAsset(_payload);
        }}
      >
        Sell
      </button>

      <div className="w-full py-4 px-4">
        <h3 className="text-secondary font-bold"> {driverImg}</h3>
        <h3 className="text-secondary"> {price} Tokens</h3>
      </div>
    </article>
  );
}

export default LargeDriver;
