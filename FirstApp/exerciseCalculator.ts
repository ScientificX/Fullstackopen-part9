interface Arguments {
    hours: Array<number>;
    target: number;
}

interface Results {
    periodLength: number;
    trainingDays: number;
    sucess: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}


const parseArgs = (args: Array<string>): Arguments => {
    console.log(args);
    const hourString = args.slice(2, 10);
    const hours: Array<number> = hourString.map(x => Number(x));
    const target = Number(args[10]);
    return {
        hours,
        target
    };
};
const exercisecalc = (hours: Array<number>, target: number): Results => {

    const periodLength = hours.length;
    const trainingDays = hours.filter(x => x !== 0).length;
    const sucess = trainingDays > 4;
    const rating = trainingDays > 4 ? 5 : 1;
    const ratingDescription = trainingDays > 4 ? "Good" : "Bad";
    target = target;
    const average = hours.reduce((acc, curr) => curr + acc, 0) / hours.length;
    return {
        periodLength,
        trainingDays,
        sucess,
        rating,
        ratingDescription,
        target,
        average,
    };
};

try {
    const { target, hours } = parseArgs(process.argv);

    exercisecalc(hours, target);

} catch (e) {
    console.log("Input target array first then hours and no more");
}

export default exercisecalc;
