import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    height: var(--nav-height);
    background: var(--clr-ted-black);
    font-family: var(--ff-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
    text-decoration: none;
    color: var(--clr-ted-white);
    &:hover {
        color: #e62b1e;
    }
`

const Logo = styled.img`
    height: 35px;
    padding: 0rem 2rem;
`

const NavbarBlack = () => {
    return (
        <Nav>
            <div>
                <Link href="/" passHref>
                    <a><Logo src="TEDxLogoBlack.png"></Logo> </a>
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
                    <StyledLink>MEDIA</StyledLink>
                </Link>
                <Link href="/about" passHref>
                    <StyledLink>ABOUT</StyledLink>
                </Link>
            </div>
        </Nav>
    )
}

export default NavbarBlack