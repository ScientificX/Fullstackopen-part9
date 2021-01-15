import React from 'react';
import {CourseParts} from '../types';

interface Props{
   course: CourseParts;
}

const Content : React.FC<Props>  = ({course}) => {

    console.log(course);
    return(
        <div>
            <p>{course.name} course </p>
            <p>{course.exerciseCount} exercises</p>
        </div>
    )
};

export default Content;
