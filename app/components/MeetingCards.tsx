"use client";
import { animate } from "animejs";
import { Command } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface MeetingCardProps {
  className?: string;
  rotation: string;
  color?: string;
  animation?: boolean;
  onClick: () => void;
}
export default function MeetingCard({
  className,
  color = "green",
  rotation,
  animation = false,
  onClick,
}: MeetingCardProps) {
  const cardRef = useRef(null);
  const animationAllRef = useRef<any>(null);

  useEffect(() => {
    if (cardRef.current && animation) {
      animationAllRef.current = animate(cardRef.current, {
        rotate: { to: 0, ease: "outIn", duration: 200 },
        x: { to: 2000, duration: 800, delay: 500 },
        ease: "inBack(1)",
      });
      setInterval(() => {
        animationAllRef.current.revert();
      }, 2100);
    }
  }),
    [animation];

  const colorClasses = {
    green: {
      text: "text-green-400",
      textDark: "text-green-950",
      bg1: "bg-green-100",
      bg2: "bg-green-200",
    },
    red: {
      text: "text-red-400",
      textDark: "text-red-950",
      bg2: "bg-red-200",
      bg1: "bg-red-100",
    },
    orange: {
      text: "text-orange-400",
      textDark: "text-orange-950",
      bg1: "bg-orange-100",
      bg2: "bg-orange-200",
    },
    yellow: {
      text: "text-yellow-400",
      textDark: "text-yellow-950",
      bg1: "bg-yellow-100",
      bg2: "bg-yellow-200",
    },
    rose: {
      text: "text-rose-400",
      textDark: "text-rose-950",
      bg2: "bg-rose-200",
      bg1: "bg-rose-100",
    },
    indigo: {
      text: "text-indigo-400",
      textDark: "text-indigo-950",
      bg1: "bg-indigo-100",
      bg2: "bg-indigo-200",
    },
    blue: {
      text: "text-blue-400",
      textDark: "text-blue-950",
      bg2: "bg-blue-200",
      bg1: "bg-blue-100",
    },
  };

  const currColor =
    typeof color === "string" && color in colorClasses
      ? colorClasses[color as keyof typeof colorClasses]
      : colorClasses["green"];

  return (
    <div
      ref={cardRef}
      onClick={onClick}
      className={`w-[450px] top-[100px] relative shrink-0 rounded-t-2xl mx-auto shadow-xl/50 shadow-gray-400/50 flex flex-col overflow-visible ${className} ${currColor.bg1} hover:top-[75px] ease-in-out duration-100 cursor-pointer select-none`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="flex gap-4 w-full p-3 items-center">
        <Command className={`${currColor.text}`} size={20} />
        <span
          className={`p-3 rounded-lg bg-white shadow-sm flex-1 text-neutral-500} text-xs`}
        >
          Type something to get started...
        </span>
      </div>
      <div className={`flex flex-col`}>
        <span
          className={`p-4 text-xs rounded-sm scale-[103%] ${currColor.bg2}`}
        >
          Find time for partnership meeting
        </span>
        <span className={`p-4 text-xs ${currColor.textDark} rounded-sm`}>
          Find time for partnership meeting
        </span>
        <span className={`p-4 text-xs ${currColor.textDark} rounded-sm`}>
          Find time for partnership meeting
        </span>
        <span className={`p-4 text-xs ${currColor.textDark} rounded-sm`}>
          Find time for partnership meeting
        </span>
        <span className={`p-4 text-xs ${currColor.textDark} rounded-sm`}>
          Find time for partnership meeting
        </span>
        <span className={`p-4 text-xs ${currColor.textDark} rounded-sm`}>
          Find time for partnership meeting
        </span>
      </div>
    </div>
  );
}
