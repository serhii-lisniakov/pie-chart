import React from 'react'
import styled from 'styled-components';
import Chart from './Chart'

const ChartPageWrapper = styled.div`
    background: #182246;
    height: 80vh;
    min-height: 600px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transition: .3s;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    position: relative;
`

const ChartPage = () => (
    <ChartPageWrapper>
        <Chart />
    </ChartPageWrapper>
)

export default ChartPage;