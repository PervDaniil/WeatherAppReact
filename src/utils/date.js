export const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


export function getCurrentWeek(days) {
    const currentDay = new Date(days[0].dt_txt);
    const chartLabels = [];

    for (let i = 0; i < 5; i++) {
        const dayIndex = (currentDay.getDay() + i) % 7;
        chartLabels.push(daysOfWeek[dayIndex]);
    }

    return chartLabels;
} 


export function getNightAndDayTemperatureValues(days) {
    const nightTemperatureValues = [];
    const dayTemperatureValues = [];

    days.forEach(day => {
        const timeOfDay = day.dt_txt.slice(11, 16);

        if (timeOfDay === '15:00') {
            dayTemperatureValues.push(Math.round(day.main.temp))
        } else if (timeOfDay === '00:00') {
            nightTemperatureValues.push(Math.round(day.main.temp))
        }
    });

    return { nightTemperatureValues, dayTemperatureValues };
}