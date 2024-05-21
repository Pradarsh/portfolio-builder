import styles from '../../styling/form.module.css';
import { Button, Input, InputAdornment } from '@mui/material';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import useDataStore from '../../store/data.store';

const PersonalForm = ({ setCurrentStep, currentStep }) => {
	const { setPersonalData, personal } = useDataStore((state) => ({
		setPersonalData: state.setPersonal,
		personal: state.personal,
	}));

	return (
		<>
			<Input
				className={styles['input-field']}
				size="lg"
				placeholder="Name"
				variant="soft"
				value={personal.name ? personal.name : ''}
				onChange={(e) => setPersonalData({ ...personal, name: e.target.value })}
			/>
			<Input
				className={styles['input-field']}
				size="lg"
				placeholder="Email"
				variant="soft"
				value={personal.email ? personal.email : ''}
				onChange={(e) =>
					setPersonalData({ ...personal, email: e.target.value })
				}
			/>
			<Input
				className={styles['input-field']}
				size="lg"
				placeholder="Current Designation"
				variant="soft"
				value={personal.title ? personal.title : ''}
				onChange={(e) =>
					setPersonalData({ ...personal, title: e.target.value })
				}
			/>
			<Input
				className={styles['input-field']}
				size="lg"
				placeholder="Location"
				variant="soft"
				value={personal.location ? personal.location : ''}
				onChange={(e) =>
					setPersonalData({ ...personal, location: e.target.value })
				}
			/>
			<Input
				className={styles['input-field']}
				size="lg"
				placeholder="Phone Number"
				variant="soft"
				value={personal.phone ? personal.phone : ''}
				onChange={(e) =>
					setPersonalData({ ...personal, phone: e.target.value })
				}
			/>
			<div className={styles['input-row']}>
				<Input
					startAdornment={
						<InputAdornment position="start">
							<LinkedIn />
						</InputAdornment>
					}
					className={styles['input-field']}
					size="lg"
					placeholder="LinkedIn URL"
					variant="soft"
					value={personal.links.linkedin ? personal.links.linkedin : ''}
					onChange={(e) =>
						setPersonalData({
							...personal,
							links: { ...personal.links, linkedin: e.target.value },
						})
					}
				/>
				<Input
					startAdornment={
						<InputAdornment position="start">
							<GitHub />
						</InputAdornment>
					}
					className={styles['input-field']}
					size="lg"
					placeholder="GitHub URL"
					value={personal.links.github ? personal.links.github : ''}
					variant="soft"
					onChange={(e) =>
						setPersonalData({
							...personal,
							links: { ...personal.links, github: e.target.value },
						})
					}
				/>
				<Input
					startAdornment={
						<InputAdornment position="start">
							<Twitter />
						</InputAdornment>
					}
					className={styles['input-field']}
					size="lg"
					placeholder="Twitter URL"
					variant="soft"
					value={personal.links.twitter ? personal.links.twitter : ''}
					onChange={(e) =>
						setPersonalData({
							...personal,
							links: { ...personal.links, twitter: e.target.value },
						})
					}
				/>
			</div>
			<textarea
				onChange={(e) =>
					setPersonalData({ ...personal, shortBio: e.target.value })
				}
				value={personal.shortBio ? personal.shortBio : ''}
				className={styles['textarea-field']}
				placeholder="Short Bio"
			/>
			<Button
				disabled={
					!personal.name ||
					!personal.email ||
					!personal.title ||
					!personal.location ||
					!personal.phone ||
					!personal.shortBio
				}
				onClick={() => setCurrentStep(currentStep + 1)}
			>
				Next
			</Button>
		</>
	);
};

export default PersonalForm;
