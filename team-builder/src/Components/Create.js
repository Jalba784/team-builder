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
    return (
        <div>
            <Card>
            <form>
                <CenteredForm>
                <h2>New Team Member</h2>
                <div className='input-stack'>
                    <label for='name'>Name</label>
                    <input type='text' name='name' className='name' placeholder='John Smith' />
                </div>
                <div className='input-stack'>
                    <label for='nickname'>Nickname</label>
                    <input type='text' nickname='nickname' className='nickname' placeholder='Jonny'/>
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
                    <input type='text' name='email' className='email' placeholder='name123@email.com'/>
                </div>
                </CenteredForm>
                <Button className="formButton" variant="dark">Submit</Button>
                <Button variant="dark">Reset</Button>
            </form>
            </Card>
        </div>
    );
};

export default Create;