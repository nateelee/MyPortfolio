import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

// function sendEmail() 
// {
//   //window.open("mailto:naelee@ucsc.edu")
//   location.href='mailto:naelee@ucsc.edu'
// }
const sendEmail = () => {
  location.href = 'mailto:naelee@ucsc.edu'
}
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, <br />
          and welcome!
        </SectionTitle>
        <SectionText>
        This portfolio was created using React and Node.js which enables this platform to showcases my work.
        </SectionText>
        <Button onClick = {() =>sendEmail()}>
          Contact Me!
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;