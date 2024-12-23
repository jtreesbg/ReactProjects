import React from 'react';

// const InstructorFunc = ({ instructor, hideInstructor, handleToggleInstructor }) => {
const InstructorFunc = (props) => {
    return (
        <div className='p-3'>
            <span className='h4 text-success'>Instructor</span>
            <i
                className={`bi ${props.hideInstructor ? 'bi-toggle-off' : 'bi-toggle-on'} btn btn-success btn-sm`}
                onClick={props.handleToggleInstructor}
            />
            {!props.hideInstructor && props.instructor ? (
                <div>
                    <br />
                    Name: {props.instructor.name}
                    <br />
                    Email: {props.instructor.email}
                    <br />
                    Phone: {props.instructor.phone}
                </div>
            ) : null}
        </div>
    );
};

export default InstructorFunc;
