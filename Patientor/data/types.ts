export enum Gender {
    Male = "male",
    Female = "female",
}


export interface Diagnose {
    code: string;
    name: string;
    latin?: string;
}

export interface Patient {
    id: number;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: Gender;
    occupation: string;

}

export type FilteredPatient = Omit<Patient, "ssn">;

export type NewPatient = Omit<Patient, "id">;
