import express from 'express';
import diaryService from './services/diaryService';
import toNewDiaryEntry from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
    res.send(diaryService.getNonSensitiveDiaryEntry());
});

router.get('/:id', (_req, res) => {
    const diary = diaryService.findById(Number(_req.params.id));
    if (diary) {
        res.send(diary);
    } else {
        res.sendStatus(404)
    }
});

router.post('/', (_req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(_req.body);

        const addedEntry = diaryService.addDiary(newDiaryEntry);
        res.json(addedEntry);
    } catch (e) {
        res.status(400).send(e.message);
    }

});

export default router; 
