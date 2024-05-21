'use client';
import Landing from '../../components/generated-components/landing';
import Skills from '../../components/generated-components/generatedSkill';
import Work from '../../components/generated-components/generatedWork';
import Volunteer from '../../components/generated-components/generatedVolunteer';
import Education from '../../components/generated-components/generatedEducation';
import Project from '../../components/generated-components/generatedProject';
import styles from './page.module.css';

const page = () => {
	return (
		<main className={styles['main']}>
			<Landing />
			<Skills />
			<Work />
			<Volunteer />
			<Education />
			<Project />
		</main>
	);
};

export default page;
