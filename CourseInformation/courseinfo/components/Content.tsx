import react from 'react';

const Content = ({courseData}) => {
  return (
    <div>
      <p>
        {courseData.name}
      </p>
      <p>
        {courseData.exerciseCount}
      </p>
    </div>
  )
};

export default Content;
