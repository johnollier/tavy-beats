function daysOfSeason(today: Date): number {
  // season starts 1st March (month 2) each year
  const timeDifference = today.getTime() - new Date(today.getFullYear(), 2, 1).getTime();
  // millis in day
  return Math.floor(timeDifference / (60 * 60 * 24000));
}

const beats = ["Lower", "Middle", "Upper"];

export default function findBeat(ticketIndex: number, today: Date ): string {
  const beatIndex = (daysOfSeason(today) - ticketIndex) % 3;
  return beats[beatIndex];
}
