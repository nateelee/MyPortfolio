import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import {SiSamsung } from 'react-icons/si';
import {BsFillBrightnessHighFill } from 'react-icons/BS';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './EducationStyle';

const Education = () =>  (
	<Section id = "edu">
	<br />
	<SectionTitle>Education</SectionTitle>
		<SectionText>
			My academic history
		</SectionText>
		<List>
			<ListItem>
				<ListParagraph>
					2020 - Present
				</ListParagraph>
				<ListContainer>
					<ListTitle>
						University of California, Santa Cruz 
					</ListTitle>
					<br />
					<ListParagraph>
						B.S. in Computer Science <br /> 
						GPA: 3.71 <br /> <br />
						Relevant Coursework: Data Structures and Algorithms, Computer Architecture, Analysis of Algorithms, Computational Models, Probability and Statistics, Principles of Computer Systems Design, Computer Security <br />
					</ListParagraph>
					
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListParagraph>
					2019 - 2020
				</ListParagraph>
				<ListContainer>
					<ListTitle>
						Diablo Valley College
					</ListTitle>
					<br />
					<ListParagraph>
						B.S. in Computer Science <br />
						GPA: 3.72 <br /> <br />
						Relevant Coursework: Calculus for Engineers III, Advanced Programming in C and C++, Discrete Mathematics, Physics for Engineers II, Object-Oriented Programming in C++, Linear Algebra, Differential Equations, Assembly Language Programming, Program Design and Data Structures <br />
					</ListParagraph>
					
				</ListContainer>
			</ListItem>
			<ListItem>
				<ListParagraph>
					2018 - 2019
				</ListParagraph>
				<ListContainer>
					<ListTitle>
						Arizona State University 
					</ListTitle>
					<br />
					<ListParagraph>
						B.S. in Computer Science <br />
						GPA: 3.76 <br /> <br />
						Relevant Coursework: Principles of Programming, Calculus for Engineers I, Physics for Engineers I, Object-Oriented Programming in Java and Data Structures, Calculus for Engineers II <br />
					</ListParagraph>
					
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

export default Education;

