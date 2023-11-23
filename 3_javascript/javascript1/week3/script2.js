

//Series duration of my life 

const seriesDurations = [
    {
        title: "Game of Thrones",
        days: 3,
        hours: 1,
        minutes: 0
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0
    }
];

function logOutSeriesText() {
    const totalMinutesWatched = seriesDurations.reduce((total, series) => {
        const seriesDurationInMinutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
        return total + seriesDurationInMinutes;
    }, 0);

    const totalYearsWatched = totalMinutesWatched / (60 * 24 * 365); 

    const averageLifespanYears = 80;
    const percentageOfLife = (totalYearsWatched / averageLifespanYears) * 100;

    seriesDurations.forEach(series => {
        const seriesDurationInYears = (series.days * 24 * 60 + series.hours * 60 + series.minutes) / (60 * 24 * 365);
        const percentageOfLifeForSeries = (seriesDurationInYears / averageLifespanYears) * 100;
        console.log(`${series.title} took ${percentageOfLifeForSeries.toFixed(3)}% of my life`);
    });

    console.log(`In total that is ${percentageOfLife.toFixed(3)}% of my life`);
}

logOutSeriesText();