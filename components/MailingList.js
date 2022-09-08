import React from 'react'
import styled from 'styled-components'
import { Columns, Container } from './Container.styles'
import Form from './Form'

const Header = styled.h1`
    font-family: var(--ff-primary);
    font-size: 45px;
    font-weight: 500;
    color: var(--clr-ted-white);
    text-align: center;
`

const FormDesc = styled.p`
    font-family: var(--ff-primary);
    font-size: 22px;
    font-weight: 400;
    color: var(--clr-ted-white);
    text-align: right;
`

const MailingList = () => {
    return (
        <div style={{ backgroundColor: '#ea4427' }}>
            <Container>
                <Header>Join Our Mailing List!</Header>
                <Columns>
                    <Form></Form>
                    <FormDesc>
                        Joining our mailing list gives you access to news and updates from our TEDxUCSD team as well as link to our favorite TED talks of the month
                    </FormDesc>
                </Columns>
            </Container>
        </div>

    )
}

export default MailingList