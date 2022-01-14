import react from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom' 
import { FaPizzaSlice } from 'react-icons/fa'

export const Nav = styled.nav`
    height: 80px;
    displey: flex;
    justify-content: center;
    font-weight: 700;
    align-items: center;
`
export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    cursor:poiner;

    @media screen and (max-width: 400px) {
        position:absolute;
        top:10px;
        left:25px;
    }
`

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

 p {
     transform: translate(-175%, 100%);
     font-wieght: bold;
 }
`

export const Bars = styled(FaPizzaSlice)`
 font-size: 2rem;
 transform: translate(-50%, -15%);
`