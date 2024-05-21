'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { useState } from 'react';
import PersonalForm from '../components/form/personal';
import WorkForm from '../components/form/work';
import VolunteerForm from '../components/form/volunteer';
import EducationForm from '../components/form/education';
import ProjectsForm from '../components/form/projects';
import SkillForm from '../components/form/skills';

export default function Home() {
	const [currentStep, setCurrentStep] = useState(1);
	const imagesURL = [
		'/form.jpg',
		'https://images.pexels.com/photos/5238278/pexels-photo-5238278.jpeg?auto=compress&cs=tinysrgb&w=800',
		'https://images.pexels.com/photos/3480494/pexels-photo-3480494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		'https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg',
	];
	return (
		<main className={styles.main}>
			<div className={styles['main-form-card']}>
				<div>
					<h1 className={styles['page-header']}>Simple Portfolio builder</h1>
					<Image
						src={imagesURL[currentStep - 1]}
						alt="Form"
						width={600}
						height={500}
						style={{
							objectFit: 'cover',
							marginTop: '20px',
						}}
					/>
				</div>
				<div className={styles['form-con']}>
					<h1 className={styles['form-title']}>
						{
							{
								1: 'Personal Information',
								2: 'Work Experience',
								3: 'Volunteer Experience',
								4: 'Education',
								5: 'Projects',
								6: 'Skills',
							}[currentStep]
						}
					</h1>
					<div className={styles['from-list']}>
						{currentStep == 1 ? (
							<PersonalForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : currentStep == 2 ? (
							<WorkForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : currentStep == 3 ? (
							<VolunteerForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : currentStep == 4 ? (
							<EducationForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : currentStep == 5 ? (
							<ProjectsForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : currentStep == 6 ? (
							<SkillForm
								setCurrentStep={setCurrentStep}
								currentStep={currentStep}
							/>
						) : null}
					</div>
				</div>
			</div>
		</main>
	);
}
