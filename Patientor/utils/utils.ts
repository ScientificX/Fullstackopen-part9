import { Gender, NewPatient } from '../data/types';

const isDate = (param : any) : param is string => {
    return Boolean(Date.parse(param));                                                                                      
};

const isString = (param: any): param is string => {
    return typeof param === 'string' || param instanceof String;
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseDate = (date : any) : string => {
    if (!date || !isDate(date)){
        throw new Error("Invalid date: " + date);
    }
    return date;
};

const parseName = (name: any): string => {
    if (!name || !isString(name)) {
        throw new Error("Incorrect or missing name : " + name);
    }
    return name;
};

const parseSsn = (ssn: any): string => {
    if (!ssn || !isString(ssn)) {
        throw new Error("Incorrect or missing ssn : " + ssn);
    }
    return ssn;
};

const parseGender = (gender: any): Gender => {
    if (!gender || !isString(gender) || !isGender(gender)) {
        throw new Error("INcorrect or missing gender: " + gender);
    }
    return gender;
};

const parseOccupation = (occupation: any): string => {
    if (!occupation || !isString(occupation)) {
        throw new Error("Incorrect or msising occupation : " + occupation);
    }
    return occupation;
};
const toNewPatient = (object : any): NewPatient => {
    const newEntry: NewPatient = {
        // ...
        name: parseName(object.name),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseSsn(object.ssn),
        gender: parseGender(object.gender),
        occupation: parseOccupation(object.occupation),

    };
    return newEntry;
};

export default toNewPatient;