import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const max_width = '1276px'
const padding = '1rem'

const Nav = styled.nav`
    background-color: ${(props) => props.color} ;
    font-family: var(--ff-secondary);
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;
    align-items: center;
`
const StyledLink = styled.a`
    padding: 0rem 2rem;
    text-decoration: none;
    color: ${(props) => props.color};
    &:hover {
        color: #e62b1e;
    }
`

const Logo = styled.img`
    height: 35px;
    padding: 0rem 2rem;
`

const NavContainer = styled.div`
    width: min(${max_width}, 100% - ${padding}*2);
    margin-inline: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 19.5px;
`

const Navbar = (props) => {
    const bg_color = props.bg;
    const color = props.bg === 'black' ? 'white' : 'black';
    return (
        <Nav color={bg_color}>
            <NavContainer>
                <div>
                    <Link href="/" passHref>
                        <a><Logo src={bg_color === 'black' ? "TEDxLogoBlack.png" : "TEDxLogoWhite.png"}></Logo> </a>
                    </Link>
                </div>
                <div>
                    <Link href="/" passHref>
                        <StyledLink color={color}>SPEAKERS</StyledLink>
                    </Link>
                    <Link href="/" passHref>
                        <StyledLink color={color}>EVENTS</StyledLink>
                    </Link>
                    <Link href="/" passHref>
                        <StyledLink color={color}>MEDIA</StyledLink>
                    </Link>
                    <Link href="/about" passHref>
                        <StyledLink color={color}>ABOUT</StyledLink>
                    </Link>
                </div>
            </NavContainer>
        </Nav>
    )
}

export default Navbar