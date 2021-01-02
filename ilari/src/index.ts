import express from 'express';
import diaryRouter from './routes/diaries';
const app = express();

app.use(express.json());

const PORT = 3005;

app.get('/ping', (_req, res) => {
    console.log("pinged");
    res.send("Who pings");
});

app.use("/api/diaries", diaryRouter);


app.listen(PORT, () => {
    console.log("sever has been started", PORT);
});
