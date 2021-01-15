export interface CourseParts{
    name: string;
    exerciseCount: number;
}

export interface courseSum{
    courseParts: CourseParts [];
}

export interface Props{
    term: string;
}

export type CourseName = string
