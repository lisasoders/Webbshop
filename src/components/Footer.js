import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <div class="styledFooter">
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
  )
}

const FooterInfo = styled.footer`
text-align: center;
font-size: 2rem;
background: #D3D3D3;
color: black;
list-style: none;
padding: 1,5rem;
}`


export default Footer