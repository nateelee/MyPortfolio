import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

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
        My name is Nathaniel Lee and this is my online portfolio where you can learn more about my experiences. 
        </SectionText>
        <Button onClick = {() =>sendEmail()}>
          Contact Me!
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;