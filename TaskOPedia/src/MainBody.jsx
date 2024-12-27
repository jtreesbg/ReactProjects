import React from "react";
import Student from "./Componenets/Student/student";
import StudentReview from "./Componenets/Student/StudentReview";
class MainBody extends React.Component {
    render() {
        const whatWeWillLearn = "React JS";
        const lectureCount = 3;
        return (
            <div style={{ minHeight: "70vh" }}>
                <p>
                    In this course, we will learn {whatWeWillLearn} by building
                    TaskOPedia! <br />
                    Total Lecture - {lectureCount}
                </p>
                <ul>
                    <li>Basic Foundation</li>
                    <li>Functional and Class Components</li>
                </ul>

                <div className="container row">Students Enrolled</div>
                <Student
                    experience={2}
                    name="Kris Walley"
                    headshot="https://randomuser.me/api/portraits/men/1.jpg"
                >
                    <StudentReview />
                </Student>
                <Student
                    experience={5}
                    name="Angel Patrice"
                    headshot="https://randomuser.me/api/portraits/men/1.jpg"
                >
                    <StudentReview />
                </Student>
                <Student
                    experience={7}
                    name="Rene Parker"
                    headshot="https://randomuser.me/api/portraits/men/2.jpg"
                />
            </div>
        );
    }
}

export default MainBody;