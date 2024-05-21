import useDataStore from '../../store/data.store';
import { Button, Input } from '@mui/material';
import styles from '../../styling/form.module.css';
import { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';
import Snackbar from '@mui/material/Snackbar';

const WorkForm = ({ setCurrentStep, currentStep }) => {
	const { setWork, work } = useDataStore((state) => ({
		setWork: state.setWork,
		work: state.work,
	}));

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addWork = () => {
		setWork([
			...work,
			{
				employer: '',
				location: '',
				title: '',
				website: '',
				dates: '',
				highlights: '',
			},
		]);
	};

	const validateAndMove = () => {
		let valid = true;
		work.forEach((item) => {
			if (
				item.employer === '' ||
				item.location === '' ||
				item.title === '' ||
				item.dates === '' ||
				item.highlights === ''
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
				message="Invalid work experience, please fill all fields."
				color="red"
			/>
			{work.length == 0 && (
				<div className={styles['no-data']}>No Experience yet</div>
			)}
			{work.map((item, index) => (
				<div className={styles['card']} key={index}>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Employer"
						variant="soft"
						value={
							work[index] && work[index].employer ? work[index].employer : ''
						}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, employer: e.target.value }
										: workItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Location"
						variant="soft"
						value={
							work[index] && work[index].location ? work[index].location : ''
						}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, location: e.target.value }
										: workItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Title"
						variant="soft"
						value={work[index] && work[index].title ? work[index].title : ''}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, title: e.target.value }
										: workItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Website"
						variant="soft"
						value={
							work[index] && work[index].website ? work[index].website : ''
						}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, website: e.target.value }
										: workItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Dates Eg. July 2014 - Present"
						variant="soft"
						value={work[index] && work[index].dates ? work[index].dates : ''}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, dates: e.target.value }
										: workItem
								)
							)
						}
					/>
					<textarea
						className={styles['textarea-field']}
						placeholder="Highlights"
						value={
							work[index] && work[index].highlights
								? work[index].highlights
								: ''
						}
						onChange={(e) =>
							setWork(
								work.map((workItem, workIndex) =>
									workIndex === index
										? { ...workItem, highlights: e.target.value }
										: workItem
								)
							)
						}
					/>
					<div className={styles['delete-con']}>
						<Delete
							onClick={() => {
								setWork(work.filter((_, i) => i !== index));
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
				<Button onClick={addWork}>Add Work Experience</Button>
			</div>
		</div>
	);
};

export default WorkForm;
