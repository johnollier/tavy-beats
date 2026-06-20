"use client";

const daysOfSeason = (today: Date) => {
    // season starts 1st March (month 2) each year
    const timeDifference: number = today.getTime() - new Date(today.getFullYear(), 2, 1).getTime();
    // millis in day
    const days = Math.floor(timeDifference / (3600 * 24000));
    console.log(`[RotaBox] daysOfSeason: ${days} (today: ${today.toISOString()})`);
    return days;
};

const findBeat = (ticketIndex: number, today: Date) => {
    const daysInSeason = daysOfSeason(today);
    const beatIndex = (daysInSeason - ticketIndex) % 3;
    let beatName: string;

    switch (beatIndex) {
        case 0:
            beatName = "Lower";
            break;
        case 1:
            beatName = "Middle";
            break;
        default:
            beatName = "Upper";
    }
    
    console.log(`[RotaBox] findBeat: ticketIndex=${ticketIndex}, beatIndex=${beatIndex}, beatName=${beatName}`);
    return beatName;
};

interface BeatProps {
    beatIndex: string;
    colour: string;
}

const RotaPage = ({ beatIndex, colour }: BeatProps) => {
    const today = new Date();
    const parsedIndex = parseInt(beatIndex, 10);
    
    console.log(`[RotaBox] RotaPage rendering: colour=${colour}, beatIndex=${beatIndex}, parsedIndex=${parsedIndex}`);
    
    const beat = findBeat(parsedIndex, today);
    const beatLetter = beat.substring(0, 1).toUpperCase();
    
    console.log(`[RotaBox] Final beat: ${beat} (letter: ${beatLetter})`);

    return (
        <div className="container">
            <p className="beat-text">Today is {today.toDateString()} on {colour} you can fish the {beat} beat</p>
            <h1 className="beat-letter">{beatLetter}</h1>
        </div>
    );
};

export default RotaPage;
