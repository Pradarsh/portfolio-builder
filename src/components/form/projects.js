import { Button, Input, Snackbar } from '@mui/material';
import styles from '../../styling/form.module.css';
import useDataStore from '../../store/data.store';
import { useEffect, useState } from 'react';
import { Delete } from '@mui/icons-material';

const ProjectForm = ({ setCurrentStep, currentStep }) => {
	const { setProject, project } = useDataStore((state) => ({
		setProject: state.setProject,
		project: state.project,
	}));

	const [open, setOpen] = useState(false);

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const addProject = () => {
		setProject([
			...project,
			{
				title: '',
				link: '',
				thumbnail: '',
				description: '',
			},
		]);
	};

	const validateAndMove = () => {
		let valid = true;
		project.forEach((item) => {
			if (
				item.title === '' ||
				item.link === '' ||
				item.thumbnail === '' ||
				item.description === ''
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
			{project.length == 0 && (
				<div className={styles['no-data']}>No Projects</div>
			)}
			{project.map((item, index) => (
				<div className={styles['card']} key={index}>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Title"
						variant="soft"
						value={
							project[index] && project[index].title ? project[index].title : ''
						}
						onChange={(e) =>
							setProject(
								project.map((ProjectItem, ProjectIndex) =>
									ProjectIndex === index
										? { ...ProjectItem, title: e.target.value }
										: ProjectItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Link"
						variant="soft"
						value={
							project[index] && project[index].link ? project[index].link : ''
						}
						onChange={(e) =>
							setProject(
								project.map((ProjectItem, ProjectIndex) =>
									ProjectIndex === index
										? { ...ProjectItem, link: e.target.value }
										: ProjectItem
								)
							)
						}
					/>
					<Input
						className={styles['input-field']}
						size="lg"
						placeholder="Thumbnail URL"
						variant="soft"
						value={
							project[index] && project[index].thumbnail
								? project[index].thumbnail
								: ''
						}
						onChange={(e) =>
							setProject(
								project.map((ProjectItem, ProjectIndex) =>
									ProjectIndex === index
										? { ...ProjectItem, thumbnail: e.target.value }
										: ProjectItem
								)
							)
						}
					/>
					<textarea
						className={styles['textarea-field']}
						placeholder="Description"
						value={
							project[index] && project[index].description
								? project[index].description
								: ''
						}
						onChange={(e) =>
							setProject(
								project.map((ProjectItem, ProjectIndex) =>
									ProjectIndex === index
										? { ...ProjectItem, description: e.target.value }
										: ProjectItem
								)
							)
						}
					/>
					<div className={styles['delete-con']}>
						<Delete
							onClick={() => {
								setProject(project.filter((_, i) => i !== index));
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
				<Button onClick={addProject}>Add Project</Button>
			</div>
		</div>
	);
};

export default ProjectForm;
