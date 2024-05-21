import useDataStore from '../../store/data.store';
import styles from '../../styling/skill.module.css';
const Skills = () => {
	const skills = useDataStore((state) => state.skill);
	if (skills.length === 0) return null;
	return (
		<section>
			<h1 style={{ textAlign: 'center' }}>Skills</h1>
			<div className={styles['skills-main-con']}>
				{skills.map((skill, index) => (
					<div key={index}>{skill}</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
