import useDataStore from '../../store/data.store';
import Image from 'next/image';
const Project = () => {
	const project = useDataStore((state) => state.project);
	if (project.length === 0) return null;
	return (
		<section>
			<h1 style={{ textAlign: 'center', marginBottom: 30 }}>Projects</h1>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr',
					gap: 20,
				}}
			>
				{project.map((project, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							gap: 6,
							padding: 20,
							border: '1px solid #ccc',
							borderRadius: '5px',
						}}
					>
						<Image
							src={project.thumbnail}
							alt={project.title}
							width={140}
							height={140}
							style={{
								borderRadius: '5px',
								marginRight: 14,
							}}
						/>
						<div>
							<h2>{project.title}</h2>
							<p>{project.description}</p>
							<a href={project.link}>{project.link}</a>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Project;
