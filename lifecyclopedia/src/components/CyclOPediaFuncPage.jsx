import React, { useEffect, useId, useRef, useState } from 'react';
import { getRandomUser } from '../Utility/api';
import InstructorFunc from './InstructorFunc';

const CyclOPediaFuncPage = () => {
    const [state, setState] = useState(() => {
        return {
            instructor: undefined,
            studentList: [],
            studentCount: 0,
            hideInstructor: false,
        }
    });

    //    {current: 0}
    const prevStudentCount = useRef(0);

    const id = useId();

    const [inputName, setInputName] = useState(() => '');
    const [inputFeedback, setInputFeedback] = useState(() => '');


    useEffect(() => {
        // Get's called on Initial/First Render/ Mount
        const getUser = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    instructor: {
                        name: response.data.first_name + ' ' + response.data.last_name,
                        email: response.data.email,
                        phone: response.data.phone_number
                    }
                }
            });
        };

        if (!state.hideInstructor) {
            getUser();
            setInputFeedback('');
            setInputName('');
        }
    }, [state.hideInstructor]);

    useEffect(() => {
        const getStudent = async () => {
            const response = await getRandomUser();
            setState((prevState) => {
                return {
                    ...prevState,
                    studentList: [
                        ...prevState.studentList,
                        {
                            name: response.data.first_name + ' ' + response.data.last_name
                        },
                    ],
                };
            });
        };

        if (prevStudentCount.current < state.studentCount) {
            console.log('new student');

            getStudent();
        }
        else if (prevStudentCount.current > state.studentCount) {
            setState((prevState) => {
                return { ...prevState, studentList: [], };
            });
        };

    }, [state.studentCount]);

    useEffect(() => {
        prevStudentCount.current = state.studentCount;
    }, [state.studentCount]);


    const handleAddStudent = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: state.studentCount + 1
            }
        });
    }

    const handleRemoveAllStudents = () => {
        setState((prevState) => {
            return {
                ...prevState,
                studentCount: 0
            }
        });
    }

    const handleToggleInstructor = () => {
        setState((prevState) => {
            return {
                ...prevState,
                hideInstructor: !prevState.hideInstructor
            }
        });
    }

    return (
        <div>
            {state.instructor &&
                <InstructorFunc
                    instructor={state.instructor}
                    hideInstructor={state.hideInstructor}
                    handleToggleInstructor={handleToggleInstructor} />
            }
            <div className='p-3'>
                <span className='h4 text-success'>Feedback</span><br />
                <input
                    type='text'
                    value={inputName}
                    placeholder='Name...'
                    onChange={(e) => { setInputName(e.target.value) }}
                    id={`${id}-inputName`}
                ></input>
                <label htmlFor={`${id}-inputName`}>Name value: </label>{inputName}
                <br />
                <textarea
                    placeholder='Feedback...'
                    value={state.inputFeedback}
                    onChange={(e) => { setInputFeedback(e.target.value) }}
                    id={`${id}-inputFeedback`}
                ></textarea>
                <label htmlFor={`${id}-inputFeedback`}>Feedback value: </label>{inputFeedback}
                <br />

            </div>
            <div className='p-3'>
                <span className='h4 text-success'>Students</span>
                <div>Student Count: {state.studentCount}</div>
                <button className='btn btn-primary btn-sm' onClick={handleAddStudent}>Add Student</button>
                &nbsp;
                <button className='btn btn-danger btn-sm' onClick={handleRemoveAllStudents}>Remove All Students</button>

                {state.studentList.map((student, index) => {
                    return (
                        < div key={index} > - {student.name}</div>
                    )
                })}
            </div>
        </div >
    )
}

export default CyclOPediaFuncPage;