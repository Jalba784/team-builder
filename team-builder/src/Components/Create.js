import React, { useState } from 'react';
import '../App.css';
import { Card } from './TeamList.js'
import Button from "react-bootstrap/Button";
import styled from "styled-components";

const CenteredForm = styled.div`
    margin-left: 15%;
`;


const Create = (props) => {
    const initialMember = { name: "", nickname: "", role: "", email: "" };
    const [newMember, setNewMember] = useState(initialMember);

    const handleChange = (event) => {
        setNewMember({...newMember, [event.target.name]: event.target.value})
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        (!newMember.name || !newMember.email) ? alert("Name and Email are required!") : props.setMember([newMember, ...props.members]);

        resetForm();
    };

    const resetForm = () => {
        setNewMember(initialMember);
    };

    return (
        <div>
            <Card>
            <form onSubmit={handleSubmit}>
                <CenteredForm>
                <h2>New Team Member</h2>
                <div className='input-stack'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' className='name' placeholder='John Smith' value={newMember.name} />
                </div>
                <div className='input-stack'>
                    <label for='nickname'>Nickname</label>
                    <input type='text' nickname='nickname' className='nickname' placeholder='Jonny' value={newMember.nickname} />
                </div>
                <div className='input-stack'>
                    <label for='role'>Role</label>
                    <select className='role'>
                        <option>Any</option>
                        <option>Server Administrator</option>
                        <option>Quality Assurance Tester</option>
                        <option>Web Content Specialist</option>
                        <option>Frontend Developer</option>
                        <option>Backend Developer</option>
                        <option>UI Designer</option>
                        <option>UX Designer</option>
                        <option>Information Architect</option>
                    </select>
                </div>
                <div className='input-stack'>
                    <label for='Email'>Email Address</label>
                    <input type='text' name='email' className='email' placeholder='name123@email.com' value={newMember.email} />
                </div>
                </CenteredForm>
                <Button className="formButton" type="submit" variant="dark">Submit</Button>
                <Button type="button" onClick={resetForm} variant="dark">Reset</Button>
            </form>
            </Card>
        </div>
    );
};

export default Create;