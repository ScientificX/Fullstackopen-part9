import express from "express"
import diagnosesRouter from './routes/diagnoses';
import patientRouter from './routes/patients';
import cors from "cors";
const app = express();
app.use(cors());


app.get('/api/ping', (_req, res) => {
    res.send("pong");
});

app.use("/api/diagnoses", diagnosesRouter);
app.use("/api/patients", patientRouter);
const port = 3001;

app.listen(port, () => {
    console.log("App started on ", port);
})
