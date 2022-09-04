import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    height: 80px;
    background: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
    &:hover {
        color: #e62b1e;
    }
`

const Logo = styled.img`
    height: 35px;
    padding: 0rem 2rem;
`


const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <a><Logo src="TEDxLogo.png"></Logo> </a>
                </Link>
            </div>
            <div>
                <Link href="/" passHref>
                    <StyledLink>SPEAKERS</StyledLink>
                </Link>
                <Link href="/" passHref>
                    <StyledLink>EVENTS</StyledLink>
                </Link>
                <Link href="/" passHref>
                    <StyledLink>PARTNERS</StyledLink>
                </Link>
                <Link href="/" passHref>
                    <StyledLink>ABOUT</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default Navbar