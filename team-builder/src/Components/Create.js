import React, { useState } from 'react';

const Create = (props) => {
    const initialMember = { name: "", nickname: "", role: "", email: "" };
    const [newMember, setNewMember] = useState(initialMember);
    return (
        <div>
            <form>
                <h2>New Team Member</h2>
                <div>
                    <label for='name'>Name</label>
                    <input type='text' name='name' value='name' />
                </div>
                <div>
                    <label for='nickname'>Nickname</label>
                    <input type='text' nickname='nickname' value='nickname'/>
                </div>
                <div>
                    <label for='role'>Role</label>
                    <select id='role'>
                        <option>Project Manager</option>
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
                <div>
                    <label for='Email'>Email Address</label>
                    <input type='text' name='email' value='email'/>
                </div>

            </form>
        </div>
    );
};

export default Create;