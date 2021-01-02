interface Arg {
    num1: number;
    num2: number;
}

const parseArgs = (args: Array<string>): Arg => {
    const num1 = Number(args[2]);
    const num2 = Number(args[3]);
    return {
        num1,
        num2
    };
};

export const bmi = (height: number, weight: number): string => {
    const ans: number = (weight / ((height * height) / 10000));
    if (ans <= 15) {
        return "Severely underweight";
    } else if (ans <= 18.5 && ans > 16) {
        return "Underweight";
    } else if (ans < 25 && ans > 18.5) {
        return "Normal Healthy weight";
    } else if (ans <= 26 && ans > 30) {
        return "Overweight";
    }
    return "Give me smth better";
};

const { num1, num2 } = parseArgs(process.argv);

bmi(num1, num2);
