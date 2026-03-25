import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Back = styled.button`
position: fixed;
top: 6rem;
left: 2rem;
background-color: transparent;
color: ${props => props.theme === 'dark' ? '#FCF6F4' : '#000000'};
padding: 0.5rem 1rem;
border-radius: 50px;
border: 2px solid ${props => props.theme === 'dark' ? '#FCF6F4' : '#000000'};
font-family: 'Karla', sans-serif;
font-weight: 600;
font-size: calc(0.8rem + 0.4vw);
cursor: pointer;
z-index: 10;
display: flex;
align-items: center;
justify-content: center;
backdrop-filter: blur(4px);
transition: all 0.3s ease;

&:hover{
    background-color: ${props => props.theme === 'dark' ? '#FCF6F4' : '#000000'};
    color: ${props => props.theme === 'dark' ? '#000000' : '#FCF6F4'};
    transform: scale(1.05);
}

&>*:first-child{
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
}
`

const BackButton = ({theme}) => {
    return (
        <Back theme={theme}>
        <NavLink to="/" state={{ showIntro: true }}>
            &#x2190; &nbsp; Home
        </NavLink>
        </Back>
    )
}

export default BackButton
