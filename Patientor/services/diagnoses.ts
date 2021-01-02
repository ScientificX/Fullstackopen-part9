import diagnosesData from '../data/diagnoses';
import { Diagnose } from '../data/types';

const getDiagnoses = (): Array<Diagnose> => {
    return diagnosesData;
}


export default {
    getDiagnoses,
}
