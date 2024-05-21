import useDataStore from '../../store/data.store';

const Volunteer = () => {
	const volunteer = useDataStore((state) => state.volunteer);
	if (volunteer.length === 0) return null;
	return (
		<section>
			<h1 style={{ textAlign: 'center' }}>Volunteer</h1>
			<div>
				{volunteer.map((volunteer, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: 30,
							gap: 6,
						}}
					>
						<h2>{volunteer.organization}</h2>
						<p>{volunteer.location}</p>
						<p>{volunteer.title}</p>
						<p>{volunteer.dates}</p>
						<p>{volunteer.highlights}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Volunteer;
