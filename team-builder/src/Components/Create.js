import React, { useState } from 'react';
import '../App.css';
import { Card } from './TeamList.js'

// const FormStyle = styled.div`
//     background-color: gray;
//     width: 50%;
//     padding: 10px 0px 10px 10%;
//     margin: 20px auto 0px auto;
//     border-radius: 10px;
// `;

const Create = (props) => {
    const initialMember = { name: "", nickname: "", role: "", email: "" };
    const [newMember, setNewMember] = useState(initialMember);
    return (
        <div>
            <Card>
            <form>
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

            </form>
            </Card>
        </div>
    );
};

export default Create;