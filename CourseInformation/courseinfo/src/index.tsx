import React from "react";
import ReactDOM from "react-dom";
import Header from '../components/Header' ;
import Content from '../components/Content';
import Total from '../components/Total';

const App: React.FC = () => {
  const courseName = "Half Stack application development";
  const courseData = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header courseName={courseName} />
      {courseData.map(courseData =>
      <Content courseData={courseData} />
      )}
      <Total courseData={courseData} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
