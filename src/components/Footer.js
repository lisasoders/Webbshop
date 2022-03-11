import React from 'react';
import styled from 'styled-components';
import { RiMapPinLine } from "react-icons/ri";
import {MdOutlineContactSupport} from 'react-icons/md'
import {HiOutlineMail} from 'react-icons/hi'

function Footer() {
  return (
    <FooterContainer>
    <footer>
      <div class="top_footer">
<section>
<span><RiMapPinLine/></span>
<span>Gustavslundsvägen 151 D, Bromma, Sweden, 10000</span>
</section>
<section>
<span><MdOutlineContactSupport/></span>
<span>(00) 0000 0000</span>
</section>
<section>
<span><HiOutlineMail/></span>
<span>info@websitename.com</span>
</section>
</div>
      </footer>
      </FooterContainer>

  )
}


const FooterContainer = styled.div
`
background: black;
`

export default Footer