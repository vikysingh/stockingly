import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background: unset;
position: absolute;
top: 0;
left: 0;
`

const Label = styled.label`
font-weight: lighter;
font-size: 2rem;
color: ${props => (props.primary ? 'white' : "red")};
user-select: none;
`

function Indicator(props) {
    const { theme, text } = props
    return (
        <Wrapper>
            {
                theme === "primary" ? <Label primary > { text } </Label> :
                <Label danger > { text } </Label>
            }
        </Wrapper>
    );
}

export default Indicator