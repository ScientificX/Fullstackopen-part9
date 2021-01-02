import express from 'express';
import patientService from '../services/patient';
import toNewPatient from '../utils/utils';

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/', (_req, res) => {
    res.send(patientService.getPatients());
});

router.post('/', (_req, res) => {

    console.log(_req.body);
    const newPatient = toNewPatient(_req.body);
    res.send(patientService.addPatient(newPatient));
});

export default router;
