import react from 'react'; 

const Total = (courseData) => {
  return (
    <div>
      Total exercises:
      {courseData.reduce((acc, curr ) => curr.exerciseCount + acc)}
    </div>
  )
};

export default Total;
