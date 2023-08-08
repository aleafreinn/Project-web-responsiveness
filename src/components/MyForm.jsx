import {useState} from 'react';
import styled from 'styled-components';


let Form = styled.form`
    display: block;
    label {
        color: black;
        font-size: 15pt;
    }
    input {
        text-align: center;
        font-family: system-ui;
        font-size: 25pt;

    }
    #submitButton {
        padding: 1rem;
        border-radius: 12px;
        border: none;
        cursor: pointer;
        transform: scale(1);
        transition: all 0.3s ease-in-out;
        &:hover {
            transform: scale(1.2)
        }
    }
`

function MyForm() {
    const [inputs, setInputs] = useState({});
    const [showForm, setShowForm] = useState('block');

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(value);
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowForm('none');
        return alert(`Hi, ${inputs.username}! Your age is ${inputs.age}.`)
    }

    return (
        <Form onSubmit={handleSubmit} style={{display: showForm}}>
            <label>
                Enter your name:
            </label>
            <br />
            <input 
                type="text"
                name="username"
                placeholder='Name'
                value={inputs.username || ""}
                onChange={handleChange}
            />
            <br /><br />
            <label>
                Enter your age:
            </label>
            <br />
            <input 
                type="number"
                name="age"
                placeholder='Age'
                value={inputs.age || ""}
                onChange={handleChange}
            />
            <br /><br />
            <input id="submitButton" type="submit" />
        </Form>
    )
}

export default MyForm