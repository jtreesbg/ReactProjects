import React from 'react';

class Instructor extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('Mounted - instructor');
    }

    componentDidUpdate() {
        console.log('Updated - instructor');
    }

    componentWillUnmount() {
        console.log('Unmount - instructor');
    }

    handleToggleInstructor = () => {
        this.props.handleToggleInstructor();
    }

    render() {
        return (
            <div className='p-3'>
                <span className='h4 text-success'>Instructor</span>
                <i
                    className={`bi ${this.props.hideInstructor ? 'bi-toggle-off ' : 'bi-toggle-on '} btn btn-success btn-sm`}
                    onClick={this.handleToggleInstructor}
                />
                {!this.props.hideInstructor && this.props.instructor ? (
                    <div>
                        <br />
                        Name: {this.props.instructor.name}
                        <br />
                        Email: {this.props.instructor.email}
                        <br />
                        Phone: {this.props.instructor.phone}
                    </div>
                ) : null}
            </div>
        )
    }
}

export default Instructor