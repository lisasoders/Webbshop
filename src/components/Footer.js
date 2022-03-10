import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer>
    <div>
      <ul>
      <FooterInfo>
          <li>
          contact
          </li>
          <li>
            Social Media
          </li>
          <li>
            Address
          </li>
        </FooterInfo>
        </ul>
      </div>
      </FooterContainer>

  )
}

const FooterInfo = styled.footer`

list-style: none;
color: white;
padding: 20px;
margin: 60px;
align-items: center;
}`

const FooterContainer = styled.div
`
background: black;
`

export default Footer