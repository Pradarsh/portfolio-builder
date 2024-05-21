import useDataStore from '../../store/data.store';

const Education = () => {
	const education = useDataStore((state) => state.education);
	if (education.length === 0) return null;
	return (
		<section>
			<h1 style={{ textAlign: 'center' }}>Education</h1>
			<div>
				{education.map((education, index) => (
					<div
						key={index}
						style={{
							display: 'flex',
							flexDirection: 'column',
							marginTop: 30,
							gap: 6,
						}}
					>
						<h2>{education.institution}</h2>
						<p>{education.major}</p>
						<p>{education.degree}</p>
						<p>{education.graduationDate}</p>
						<p>{education.score}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Education;
