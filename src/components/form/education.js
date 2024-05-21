import { Button, Input, Snackbar } from '@mui/material';
import styles from '../../styling/form.module.css';
import useDataStore from '../../store/data.store';
import { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';

const EducationForm = ({ setCurrentStep, currentStep }) => {
	const { setEducation, education } = useDataStore((state) => ({
		setEducation: state.setEducation,
		education: state.education,
	}));

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addEducation = () => {
		setEducation([
			...education,
			{
				institution: '',
				major: '',
				degree: '',
				graduationDate: '',
				score: '',
			},
		]);
	};

	const validateAndMove = () => {
		let valid = true;
		education.forEach((item) => {
			if (
				item.institution === '' ||
				item.major === '' ||
				item.degree === '' ||
				item.graduationDate === '' ||
				item.score === ''
			)
				valid = false;
		});
		if (valid) setCurrentStep(currentStep + 1);
		else setOpen(true);
	};

	return (
		<div>
			<Snackbar
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message="Invalid fields, please fill all fields."
				color="red"
			/>
			{education.length == 0 && (
				<div className={styles['no-data']}>No Education</div>
			)}
			{education.map((item, index) => (
				<div className={styles['card']} key={index}>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Institution"
						variant="soft"
						value={
							education[index] && education[index].institution
								? education[index].institution
								: ''
						}
						onChange={(e) =>
							setEducation(
								education.map((EducationItem, EducationIndex) =>
									EducationIndex === index
										? { ...EducationItem, institution: e.target.value }
										: EducationItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Major"
						variant="soft"
						value={
							education[index] && education[index].major
								? education[index].major
								: ''
						}
						onChange={(e) =>
							setEducation(
								education.map((EducationItem, EducationIndex) =>
									EducationIndex === index
										? { ...EducationItem, major: e.target.value }
										: EducationItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Degree"
						variant="soft"
						value={
							education[index] && education[index].degree
								? education[index].degree
								: ''
						}
						onChange={(e) =>
							setEducation(
								education.map((EducationItem, EducationIndex) =>
									EducationIndex === index
										? { ...EducationItem, degree: e.target.value }
										: EducationItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Graduation Date"
						variant="soft"
						value={
							education[index] && education[index].graduationDate
								? education[index].graduationDate
								: ''
						}
						onChange={(e) =>
							setEducation(
								education.map((EducationItem, EducationIndex) =>
									EducationIndex === index
										? { ...EducationItem, graduationDate: e.target.value }
										: EducationItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Score"
						variant="soft"
						value={
							education[index] && education[index].score
								? education[index].score
								: ''
						}
						onChange={(e) =>
							setEducation(
								education.map((EducationItem, EducationIndex) =>
									EducationIndex === index
										? { ...EducationItem, score: e.target.value }
										: EducationItem
								)
							)
						}
					/>
					<div className={styles['delete-con']}>
						<Delete
							onClick={() => {
								const newEducation = education.filter(
									(EducationItem, EducationIndex) => index !== EducationIndex
								);
								setEducation(newEducation);
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
				<Button onClick={addEducation}>Add Education Experience</Button>
			</div>
		</div>
	);
};

export default EducationForm;
