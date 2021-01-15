import React from 'react';
import { CourseParts } from '../types';

interface Props{
    courseSum: CourseParts []
}

const Total : React.FC<Props>= ({courseSum}) => {
    const totalExercises = courseSum.reduce((acc, curr) => {
        return curr.exerciseCount + acc;
    }, 0);
    return (

        <div>
            <h5>The total number of courses is {totalExercises}</h5>
        </div>
    )
}

export default Total;
