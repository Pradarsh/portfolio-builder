import { Button, Input, Snackbar } from '@mui/material';
import styles from '../../styling/form.module.css';
import useDataStore from '../../store/data.store';
import { useState } from 'react';
import { Delete } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

const SkillForm = ({ setCurrentStep, currentStep }) => {
	const { setSkill, skill } = useDataStore((state) => ({
		setSkill: state.setSkill,
		skill: state.skill,
	}));

	const m = useDataStore((state) => ({
		skill: state.skill,
		personal: state.personal,
		work: state.work,
		education: state.education,
		volunteer: state.volunteer,
		project: state.project,
	}));

	const [open, setOpen] = useState(false);

	const router = useRouter();

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addSkill = () => {
		setSkill([...skill, '']);
	};

	const validateAndMove = () => {
		let valid = true;
		skill.forEach((item) => {
			if (item === '') valid = false;
		});
		if (valid) {
			router.push('/generated');
		} else setOpen(true);
	};

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Invalid skill, please fill all fields."
				color="red"
			/>
			{skill.length == 0 && (
				<div className={styles['no-data']}>No Skills yet</div>
			)}
			{skill.map((item, index) => (
				<div className={styles['card']} key={index}>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Skill"
						variant="soft"
						value={skill[index] ? skill[index] : ''}
						onChange={(e) => {
							setSkill(
								skill.map((skillItem, skillIndex) =>
									index === skillIndex ? e.target.value : skillItem
								)
							);
						}}
					/>
					<div className={styles['delete-con']}>
						<Delete
							onClick={() => {
								const newSkill = skill.filter(
									(skillItem, skillIndex) => index !== skillIndex
								);
								setSkill(newSkill);
							}}
							style={{
								color: 'red',
								cursor: 'pointer',
							}}
						/>
					</div>
				</div>
			))}
			<div className={styles['btn-con']}>
				<div>
					<Button
						onClick={() => setCurrentStep(currentStep - 1)}
						style={{ marginRight: 20 }}
					>
						Previous
					</Button>
					<Button onClick={validateAndMove}>Next</Button>
				</div>
				<Button onClick={addSkill}>Add Skill</Button>
			</div>
		</div>
	);
};

export default SkillForm;
