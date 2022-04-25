import React from 'react';
import { DiFirebase, DiReact, DiPython } from 'react-icons/di';
import {SiSamsung } from 'react-icons/si';
import {BsFillBrightnessHighFill } from 'react-icons/BS';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
	<Section id = "experience">
	<br />
	<SectionTitle>Experience</SectionTitle>
		<SectionText>
			What I've done in Software Development
		</SectionText>
		<List>
			<ListItem>
				<SiSamsung size = "8rem"/>
				<ListContainer>
					<ListTitle>
						Software Engineer Intern @ Samsung 
					</ListTitle>
					<ListParagraph>
						<br />
						Aug 2021 - Oct 2021
						<br />
						<br />
						- Developed command-line application in Redhat Linux with C++ to accelerate OpenCL kernel code compilation.
						<br />
						- Utilized computational algorithms relevant to Samsung Galaxy Phones’ GPUs with C++ programming and tools like OCL.
					    
						
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem style = {{ marginTop:"20px"}}>
				<BsFillBrightnessHighFill size = "3rem" style = {{ marginBottom:"24px"}}/>
				<ListContainer>
					<ListTitle>
						Software Engineer Intern @ Bright Health
					</ListTitle>
					<ListParagraph>
						<br />
						June 2021 - Aug 2021
						<br />
					    <br />
						- Developed ETL (extract, transform, and load) program that read, ingested, normalized, and enriched ADT (Admission, discharge, transfer) datasets to verify coverage under Bright Health Insurance.
						<br />
						- Coded JUnit tests in Scala to ensure valid data quality and error prevention.
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem style = {{ marginTop:"12px"}}>
				<DiPython size = "4rem" style = {{ marginBottom:"20px"}} />
				<ListContainer>
					<ListTitle>
						Python Instructor @ AYC Logic
					</ListTitle>
					<ListParagraph>
						<br />
						Oct 2020 - Dec 2021
						<br />
						<br />
						- AYC Logic is an online coding school that provides students the opportunity of learning advanced Python Object Oriented Programming and game development in Python using tools like Pygame and Pycharm.
					   
						
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider />
	</Section>
);

export default Technologies;

