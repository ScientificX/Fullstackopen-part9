import express from "express";
import { bmi } from "./bmi-calc";
import exercisecalc from "./exerciseCalculator";
const app = express();
//trying to setup eslint for spacemacs
app.use(express.json());
// const d: any = 3

app.get("/ping", (_req, res) => {
    res.send("pong");
});

app.get("/hello", (_req, res) => {
    res.send("Hello Fullstack");
});

app.get("/bmi", (_req, res) => {
    const height = Number(_req.query.height);
    const weight = Number(_req.query.weight);
    // console.log(height);
    if (!height && !weight) {
        console.log(height);
        res.json({
            error: "malformatted parameters"
        });
    } else {
        const bmiResult = bmi(height, weight);

        res.json({
            weight,
            height,
            bmiResult
        });
    } 
});

app.post("/exercises", (_req, res) => {
    const { dailyExercises, target } = _req.body;
    const results = exercisecalc(dailyExercises, target);
    res.json(results);
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
