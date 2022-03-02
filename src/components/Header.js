import React from 'react'
import styled from 'styled-components'


function Header() {
  return (
    <Style>
      <div>
        <h1>Hemsida</h1>
      </div>
    </Style>
  )
}


const Style = styled.div`
padding: 1px;
text-align: center;
background: #D3D3D3;
color: black;
`
export default Header