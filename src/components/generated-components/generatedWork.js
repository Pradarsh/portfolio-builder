import useDataStore from '../../store/data.store';

const Work = () => {
	const work = useDataStore((state) => state.work);
	if (work.length === 0) return null;
	return (
		<section>
			<h1 style={{ textAlign: 'center' }}>Work Experience</h1>
			<div>
				{work.map((work, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: 30,
							gap: 6,
						}}
					>
						<h2>{work.employer}</h2>
						<p>{work.location}</p>
						<p>{work.title}</p>
						<a href={work.website}>{work.website}</a>
						<p>{work.dates}</p>
						<p>{work.highlights}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Work;
