"use client";

import { useEffect, useState } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "America/La_Paz",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/** La hora de La Paz, al minuto. Se rellena en el navegador para no desfasarse del servidor. */
export function LocalTime({ className = "" }: { className?: string }) {
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => setTime(format.format(new Date()));
    tick();
    const timer = setInterval(tick, 15_000);
    return () => clearInterval(timer);
  }, []);

  return (
    <time className={className} suppressHydrationWarning>
      {time}
    </time>
  );
}
