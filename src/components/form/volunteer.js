import { Button, Input, Snackbar } from '@mui/material';
import styles from '../../styling/form.module.css';
import useDataStore from '../../store/data.store';
import { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';

const VolunteerForm = ({ setCurrentStep, currentStep }) => {
	const { setVolunteer, volunteer } = useDataStore((state) => ({
		setVolunteer: state.setVolunteer,
		volunteer: state.volunteer,
	}));

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addVolunteer = () => {
		setVolunteer([
			...volunteer,
			{
				organization: '',
				location: '',
				title: '',
				dates: '',
				highlights: '',
			},
		]);
	};

	const validateAndMove = () => {
		let valid = true;
		volunteer.forEach((item) => {
			if (
				item.organization === '' ||
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
				message="Invalid, please fill all fields."
				color="red"
			/>
			{volunteer.length == 0 && (
				<div className={styles['no-data']}>No Volunteer Experience yet</div>
			)}
			{volunteer.map((item, index) => (
				<div className={styles['card']} key={index}>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Organization"
						variant="soft"
						value={
							volunteer[index] && volunteer[index].organization
								? volunteer[index].organization
								: ''
						}
						onChange={(e) =>
							setVolunteer(
								volunteer.map((volunteerItem, volunteerIndex) =>
									volunteerIndex === index
										? { ...volunteerItem, organization: e.target.value }
										: volunteerItem
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
							volunteer[index] && volunteer[index].location
								? volunteer[index].location
								: ''
						}
						onChange={(e) =>
							setVolunteer(
								volunteer.map((volunteerItem, volunteerIndex) =>
									volunteerIndex === index
										? { ...volunteerItem, location: e.target.value }
										: volunteerItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Title"
						variant="soft"
						value={
							volunteer[index] && volunteer[index].title
								? volunteer[index].title
								: ''
						}
						onChange={(e) =>
							setVolunteer(
								volunteer.map((volunteerItem, volunteerIndex) =>
									volunteerIndex === index
										? { ...volunteerItem, title: e.target.value }
										: volunteerItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Dates"
						variant="soft"
						value={
							volunteer[index] && volunteer[index].dates
								? volunteer[index].dates
								: ''
						}
						onChange={(e) =>
							setVolunteer(
								volunteer.map((volunteerItem, volunteerIndex) =>
									volunteerIndex === index
										? { ...volunteerItem, dates: e.target.value }
										: volunteerItem
								)
							)
						}
					/>
					<textarea
						className={styles['textarea-field']}
						placeholder="Highlights"
						value={
							volunteer[index] && volunteer[index].highlights
								? volunteer[index].highlights
								: ''
						}
						onChange={(e) =>
							setVolunteer(
								volunteer.map((volunteerItem, volunteerIndex) =>
									volunteerIndex === index
										? { ...volunteerItem, highlights: e.target.value }
										: volunteerItem
								)
							)
						}
					/>
					<div className={styles['delete-con']}>
						<Delete
							onClick={() => {
								const newVolunteer = volunteer.filter(
									(volunteerItem, volunteerIndex) => index !== volunteerIndex
								);
								setVolunteer(newVolunteer);
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
				<Button onClick={addVolunteer}>Add Volunteer Experience</Button>
			</div>
		</div>
	);
};

export default VolunteerForm;
