import React from 'react';
import styled from 'styled-components';
const Footer = () => {
  return (
    <Wrap>
      <FooterSection>Copyright © December and Company Inc.</FooterSection>
    </Wrap>
  );
};
const Wrap = styled.div`
  width: 86vw;
  position: absolute;
  bottom: 0;
  height: 30px;
  display: flex;
`;

const FooterSection = styled.p`
  margin: 0 auto;
`;
export default Footer;
