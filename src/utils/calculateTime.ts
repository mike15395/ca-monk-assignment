 export function calculateTime(inputDate){
    const startDate: Date = new Date(inputDate);
const now: Date = new Date();

const diffInMs: number = now.getTime() - startDate.getTime();
const millisecondsPerDay: number = 1000 * 60 * 60 * 24;
const days: number = Math.floor(diffInMs / millisecondsPerDay);

return days

}