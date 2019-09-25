import React from 'react';
import TeamMember from "./TeamMember";
import styled from "styled-components";

export const Card = styled.div`
    background-color: gray;
    width: 50%;
    padding: 10px 0px 10px 10%;
    margin: 20px auto 0px auto;
    border-radius: 10px;
`;

const TeamList = (props) => {
    return (
        <div>
            {props.data.map((member, index) => {
                const { name, nickname, role, email } = member;
                return (
                    <Card>
                        <TeamMember
                            key={index}
                            name={name}
                            nickname={nickname}
                            role={role}
                            email={email}
                        />
                    </Card>
                );
            })}
        </div>
    );
};

export default TeamList;