const daysOfSeason = () => {
    // season starts 1st March (month 2) each year
    const today = new Date()
    const timeDifference: number = today.getTime() - new Date(today.getFullYear(), 2, 1).getTime();
    // millis in day
    return Math.floor(timeDifference / (3600 * 24000));
}

const findBeat = (ticketIndex: number) => {
    //var today = new Date(2020, 5, 11, 12)
    const beatIndex = (daysOfSeason() - ticketIndex) % 3;
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
    console.log(beatName);
    return beatName;
}

export default findBeat
