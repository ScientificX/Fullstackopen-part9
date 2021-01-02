import patientData from '../data/patient';
import { FilteredPatient, NewPatient } from '../data/types';

const getPatients = (): Array<FilteredPatient> => {
    return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation

    }));
};

const addPatient = (newPatient: NewPatient): FilteredPatient => {
    const patient = {
        id: Math.max(...patientData.map(p => p.id)) + 1,
        ...newPatient
    };
    patientData.push(patient);
    return patient;
};

export default {
    getPatients,
    addPatient
}
