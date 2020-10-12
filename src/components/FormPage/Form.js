import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addItemAction } from '../../store/items/actions'


const FormWrapper = styled.form`
    width: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: #fff;
    position: relative;
    & label {
        display: flex;
        flex-direction: column;
        width: 50%;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 13px;
        position: relative;
        & p {
            position: absolute;
            margin: 0;
            color: red;
            text-transform: none;
            letter-spacing: 0;
            right: 5px;
            font-size: 10px;
            top: 4px;
        }
    }
    @media (max-width: 1024px) {
        width: 100%;
        label {
            width: 70%;
        }
    }
    @media (max-width: 475px) {
        label {
            width: 100%;
        }
    }
`
const Input = styled.input`
    width: 100%;
    margin: 3px 0 10px;
    height: 35px;
    border: 1px solid #ffffff40;
    color: #fff;
    background: none;
    outline: none;
    font-size: 20px;
    border-radius: 5px;
    padding: 0 20px;
    &::placeholder {
        color: #ffffff40;
        font-size: 14px;
    }
    &::-webkit-outer-spin-button, ::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    -moz-appearance: textfield;
`
const AddBtn = styled.button`
    width: 100px;
    height: 40px;
    color: #fff;
    background: none;
    border: 2px solid #ffffff40;
    transition: .3s;
    letter-spacing: 2px;
    font-weight: 400;
    cursor: pointer;
    outline: none;
    &:hover {
        color: #000;
        background: #fff;
    }
    position: absolute;
    right: 0;
    &::after {
        position: absolute;
        content: '';
        width: 8px;
        height: 8px;
        right: -10px;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
        border-top: 1px solid #ffffff;
        border-right: 1px solid #ffffff;
    }
    @media (max-width: 1024px) {
        position: relative;
        &::after {
            right: 50%;
            top: 100%;
            transform: translateX(50%) rotate(135deg);
        }
    }
`

const Form = () => {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const [ifEmpty, setIfEmpty] = useState(false)
    const dispatch = useDispatch()

    const addItem = (e) => {
        e.preventDefault()

        if (name.trim().length === 0 || value === 0 || value === '') {
            setIfEmpty(prev => !prev)
            setValue('')
            setTimeout(() => setIfEmpty(prev => !prev), 2000)
            return
        }

        const newItem = {
            name,
            value,
            id: Date.now()
        }

        if (name.length && value > 0) dispatch(addItemAction(newItem))
        
        setName('')
        setValue('')
    }

    return (
        <>
            <FormWrapper onSubmit={addItem}>
                <label>
                    Item
                    <Input 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)} 
                        placeholder='Enter the name of item'
                    />
                    {ifEmpty && <p>Must be no-empty</p>}
                </label>
                <label>
                    Value
                    <Input 
                        type="number" 
                        value={value} 
                        step='any' 
                        onChange={e => setValue(+e.target.value)}
                        placeholder='123,4'
                    />
                    {ifEmpty && <p>Must be &gt; 0</p>}
                </label>
                <AddBtn type='submit'>ADD</AddBtn>
            </FormWrapper>
        </>
    )
}

export default Form;