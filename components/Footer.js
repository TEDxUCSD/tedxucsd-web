import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
    background: var(--clr-ted-black);
    color: var(--clr-ted-white);
    font-family: var(--ff-secondary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

const SocialIcon = styled.a`
    color: white;
    margin: 0rem 2rem;
    font-size: 24px;
    &:hover {
        color: #e62b1e;
    }
`

const FooterNav = styled.nav`
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled.a`
    margin: 0rem 2rem;
    text-decoration: none;
    color: var(--clr-ted-white);
    &:hover {
        color: #e62b1e;
    }
`

const SocialMedia = styled.div`
    justify-content: center;
    align-items: center;
    margin: 1.5rem 2rem 0.5rem;
`

const Footer = () => {
    return (
        <FooterSection>
            <SocialMedia>
                <SocialIcon href="https://www.instagram.com/tedxucsd/" target="_blank">
                    <ion-icon src="instagram.svg"></ion-icon>
                </SocialIcon>

                <SocialIcon href="https://www.facebook.com/TEDxUCSD" target="_blank">
                    <ion-icon src="facebook.svg"></ion-icon>
                </SocialIcon>

                <SocialIcon href="https://www.linkedin.com/company/tedxucsd/" target="_blank">
                    <ion-icon src="linkedin.svg"></ion-icon>
                </SocialIcon>

                <SocialIcon href="https://www.youtube.com/channel/UCGHNsmAK-3zKEy8p58kz9iQ" target="_blank">
                    <ion-icon src="youtube.svg"></ion-icon>
                </SocialIcon>
            </SocialMedia>
            <FooterNav>
                <Link href="/" passHref>
                    <StyledLink>HOME</StyledLink>
                </Link>
                <p>|</p>
                <Link href="/" passHref>
                    <StyledLink>SPEAKERS</StyledLink>
                </Link>
                <p>|</p>
                <Link href="/" passHref>
                    <StyledLink>EVENTS</StyledLink>
                </Link>
                <p>|</p>
                <Link href="/" passHref>
                    <StyledLink>MEDIA</StyledLink>
                </Link>
                <p>|</p>
                <Link href="/about" passHref>
                    <StyledLink>ABOUT</StyledLink>
                </Link>
            </FooterNav>

            <p>© 2022 TEDxUCSD. All rights reserved.</p>


        </FooterSection>
    );
};

export default Footer;