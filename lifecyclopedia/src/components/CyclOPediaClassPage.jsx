import React from 'react';
import { getRandomUser } from '../Utility/api';
import Instructor from './Instructor';

class CyclOPediaClassPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = JSON.parse(localStorage.getItem('cyclopediaState')) || {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
            inputName: '',
            inputFeedback: ''
        }
    }

    componentDidMount = async () => {
        console.log('Component did mount');
        if (JSON.parse(localStorage.getItem('cyclopediaState'))) {
            // this.setState(JSON.parse(localStorage.getItem('cyclopediaState')));
        } else {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    instructor: {
                        name: response.data.first_name + ' ' + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number
                    },
                    inputName: '',
                    inputFeedback: ''
                }
            })
        }
    }

    componentDidUpdate = async (previousProps, previousState) => {
        console.log('Component did update');
        localStorage.setItem('cyclopediaState', JSON.stringify(this.state));
        console.log('old state ' + previousState.studentCount);
        console.log('new state ' + this.state.studentCount);
        if (previousState.studentCount < this.state.studentCount) {
            const response = await getRandomUser();
            this.setState((prevState) => {
                return {
                    studentList: [
                        ...prevState.studentList,
                        {
                            name: response.data.first_name + ' ' + response.data.last_name
                        },
                    ],
                }
            });
        } else if (previousState.studentCount > this.state.studentCount) {
            this.setState((prevState) => {
                return {
                    studentList: []
                }
            })
        }

    }

    componentWillUnmount() {
        console.log('Component did unmount');
    }

    handleAddStudent = () => {
        this.setState((prevState) => {
            return {
                studentCount: prevState.studentCount + 1
            }
        });
    }

    handleRemoveAllStudents = () => {
        this.setState((prevState) => {
            return {
                studentCount: 0
            }
        });
    }

    handleToggleInstructor = () => {
        this.setState((prevState) => {
            return {
                hideInstructor: !prevState.hideInstructor
            }
        });
    }

    render() {
        console.log('Render Component');
        return (
            <div>
                {this.state.instructor &&
                    <Instructor
                        instructor={this.state.instructor}
                        hideInstructor={this.state.hideInstructor}
                        handleToggleInstructor={this.handleToggleInstructor} />
                }
                <div className='p-3'>
                    <span className='h4 text-success'>Feedback</span><br />
                    <input
                        type='text'
                        value={this.state.inputName}
                        placeholder='Name...'
                        onChange={(e) => { this.setState({ inputName: e.target.value }) }}
                    ></input>
                    Value: {this.state.inputName}
                    <br />
                    <textarea
                        placeholder='Feedback...'
                        value={this.state.inputFeedback}
                        onChange={(e) => { this.setState({ inputFeedback: e.target.value }) }}
                    ></textarea>
                    Value: {this.state.inputFeedback}
                    <br />

                </div>
                <div className='p-3'>
                    <span className='h4 text-success'>Students</span>
                    <div>Student Count: {this.state.studentCount}</div>
                    <button className='btn btn-primary btn-sm' onClick={this.handleAddStudent}>Add Student</button>
                    &nbsp;
                    <button className='btn btn-danger btn-sm' onClick={this.handleRemoveAllStudents}>Remove All Students</button>

                    {this.state.studentList.map((student, index) => {
                        return (
                            < div key={index} > - {student.name}</div>
                        )
                    })}
                </div>
            </div >
        )
    }
}

export default CyclOPediaClassPage;