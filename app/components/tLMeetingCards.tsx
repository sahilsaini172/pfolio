import { useState } from "react";
import MeetingCard from "./MeetingCards";

interface TLMeetingCardProps {
  animation: boolean;
  onClick: () => void;
}

export default function TLMeetingCard({
  animation,
  onClick,
}: TLMeetingCardProps) {
  return (
    <section className="realtive p-6 bg-neutral-200/70 rounded-4xl h-1/2 overflow-hidden">
      <div className="flex items-center justify-center gap-[-500px]">
        <MeetingCard
          color="green"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="yellow"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="orange"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="red"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="rose"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="indigo"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
        <MeetingCard
          color="blue"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
          animation={animation}
        />
      </div>
      <div className="absolute w-full h-full z-50">
        <MeetingCard
          color="blue"
          rotation="-10"
          className="mr-[-400px]"
          onClick={onClick}
        />
      </div>
    </section>
  );
}
