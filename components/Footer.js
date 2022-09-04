import styled from 'styled-components';
import Link from 'next/link';

const FooterSection = styled.div`
  background: black;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
    return (
        <FooterSection>
            <p>TEDxUCSD 2022 All Rights Reserved</p>
        </FooterSection>
    );
};

export default Footer;