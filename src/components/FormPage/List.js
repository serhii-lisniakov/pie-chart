import React, { useEffect } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { deleteItemAction } from '../../store/items/actions';



const ListWrapper = styled.div`
    width: 50%;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    color: #fff;
    & ul {
        list-style: none;
        padding: 0;
        width: 70%;
        & li {
            display: grid;
            grid-template-columns: 1fr 100px 10px;
            padding: 3px 15px;
            margin: 3px;
            border-bottom: 1px solid #ffffff40;
            & span:first-child {
                text-transform: capitalize;
                letter-spacing: 1px;
            }
            & span:last-child {
                color: #ff000091;
                cursor: pointer;
                transition: .3s;
                &:hover {
                    color:#ff0000;
                }
            }
        }
    }
    @media (max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 475px) {
        font-size: 12px;
        ul {
            width: 100%;
        }
    }
`

const List = () => {
    const items = useSelector(state => state.items)
    const dispatch = useDispatch()

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    
    if (!items.length) return <ListWrapper>No items</ListWrapper>
    return (
        <ListWrapper>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                        <span onClick={() => dispatch(deleteItemAction(item.id))}>x</span>
                    </li>
                ))}
            </ul>
        </ListWrapper>
    )
}

export default List;