import React from 'react';
import './Answer.css'
const Answer = () => {
    return (
        <div className='container'>
            <div className='answer'>
                <h1>how react works</h1>
                <p>
                    React is a javascript library. React generally work by creating virtual dom.react has a structure.in this sturcture there are component.each component are isolated to rander.thats why the parfomance time is very smooth.
                    generally react code is writen with jsx. which is almost same as plain javascript code.JSX  helps to bring the cleanliness of HTML to the power of JavaScript.
                </p>
            
            </div>
            <div className='answer'>
                <h1>props vs state</h1>
                <p>props are read only but state can changes asynchronously.props are immutable but state mutable.props allows passing data from  component to  component as agrument but state holde imformation of component.stateless component have props but stateless component doesn't have state.props make component reusable but state can't make.</p>
            </div>
            <div className='answer'>
                <h1>how usestate work</h1>
                <p>usestate is a react hook .that is allow us to state variable in funcional component.in this hook there are a state value variable.that return the current state value. and a callback funcion which can set value of that variable.actually </p>
            </div>
        </div>
    );
};

export default Answer;