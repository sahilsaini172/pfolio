"use client";
import TLCard from "./components/tLCard";
import MeetingCard from "./components/MeetingCards";
import { useEffect, useState } from "react";
import TLMeetingCard from "./components/tLMeetingCards";
import TLSingleMeet from "./components/tlSingleMeet";

export default function Home() {
  const [animateAll, setAnimateAll] = useState(false);

  function handleAllAnimation() {
    setAnimateAll(true);
  }

  return (
    <div className="mx-20 flex gap-6">
      {/* <span className="text-sm py-2 px-6 text-right text-neutral-400 flex items-end w-full justify-end gap-2">
        <Navigation size={16} className="-rotate-90" />
        Look around...
      </span> */}
      <div id="left" className="w-1/2">
        <TLCard />
      </div>
      <div id="right" className="w-1/2">
        <TLMeetingCard animation={animateAll} onClick={handleAllAnimation} />
      </div>
    </div>
  );
}
