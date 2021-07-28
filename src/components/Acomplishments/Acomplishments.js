import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const lang = [
  'Python', 'C', 'C++', 'C#', 'JavaScript', 'Java', 'HTML/CSS', 'Scala', 'SQL'
]
const tools = [
  'Azure Storage, Azure DevOps', '.Net Platform', 'Apache Spark', 'Git, GitHub', 'Node.js', 'React', 'Vim', 'OGL', 'Firebase', 'Databricks', 'Jira'
]
const linkedin = [
  'Agile Software Development: Scrum for Developers', 'Issued July 2021', 'Credential ID: AYNo0X0vMGrkc_INrHGarABXbzNt'
]
const jpmorgan = [
  'Software Engineering Virtual Experience', 'Issued July 2021', 'Credential ID: XDYaaCn4BqMCQWSdW'
]
const data = [
  { number: "Languages", text: lang, text1: '', text2: ''},
  { number: "Software Tools", text: tools, text1: '', text2: '',},
  { number: "LinkedIn Certification", text: [], text1: 'Certificate: Agile Software Development: Scrum for Developers', text2: 'Issued July 2021', text3:'Credential ID: AYNo0X0vMGrkc_INrHGarABXbzNt', },
  { number: "JPMorgan Chase & Co Certification", text: [], text1: 'Certificate: Software Engineering Virtual Experience', text2: 'Issued July 2021',  text3: 'Credential ID: XDYaaCn4BqMCQWSdW',},
];

const Acomplishments = () => (
  <Section>
    <Section id = "skills"></Section>
    <SectionTitle>Skills and Certifications</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text.map((name, index) => (
            <BoxText>{name}</BoxText>
          ))}
          </BoxText> 
          <BoxText>{card.text1}</BoxText>
          <br />
          <BoxText>{card.text2}</BoxText>
          <br />
          <BoxText>{card.text3}</BoxText>
          <br />
          
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
