import React from 'react'
import styled from 'styled-components';
import Form from './Form'
import List from './List'

const FormPageWrapper = styled.div`
    background: #182246;
    height: 80vh;
    min-height: 600px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .3s;
    display: flex;
    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

const FormPage = () => (
        <FormPageWrapper>
            <Form />
            <List />
        </FormPageWrapper>
)


export default FormPage;