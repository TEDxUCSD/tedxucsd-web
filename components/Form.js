import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    width: 100%;
    padding: 8px 10px;
    margin: 10px 0;
    display: flex;
    font-family: var(--ff-primary);
`

const FormContainer = styled.div`
    display: flex;
    padding: 1rem 0;
`

const Button = styled.button`
    font-family: var(--ff-primary);
`

const Form = () => {
    return (
        <>
            <FormContainer>
                <form style={{ width: '90%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                        <StyledInput type="text" name="firstName" placeholder="First Name" />
                        <StyledInput type="text" name="lastName" placeholder="Last Name" />
                    </div>
                    <div>
                        <StyledInput type="text" name="email" placeholder="Email" />
                    </div>
                    <Button type="submit">Subscribe</Button>
                </form>
            </FormContainer>
        </>
    )
}

export default Form