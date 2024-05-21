import { useEffect } from 'react';
import useDataStore from '../../store/data.store';
import styles from '../../styling/landing.module.css';
import {
	Email,
	GitHub,
	LinkedIn,
	LocationCity,
	Phone,
	Twitter,
} from '@mui/icons-material';

const Landing = () => {
	const personal = useDataStore((state) => state.personal);
	const onSocialLink = (link) => {
		window.open(link, '_blank');
	};

	useEffect(() => {
		if (personal.name === '') {
			window.location.href = '/';
		}
	}, []);

	return (
		<div className={styles['landing-con']}>
			<h1 className={styles['name']}>{personal.name}</h1>
			<h2>{personal.title}</h2>
			<p>{personal.shortBio}</p>
			<div className={styles.row}>
				<div className={styles.IconRow}>
					<Email />
					{personal.email}
				</div>
				<div className={styles.IconRow}>
					<Phone />
					{personal.phone}
				</div>
				<div className={styles.IconRow}>
					<LocationCity />
					{personal.location}
				</div>
			</div>
			<p style={{ marginTop: 30 }}>You can follow me on</p>
			<div className={styles.socialRow}>
				{personal.links.linkedin && (
					<LinkedIn
						style={{
							color: '#0077b5',
						}}
						onClick={() => onSocialLink(personal.links.linkedin)}
					/>
				)}
				{personal.links.github && (
					<GitHub
						style={{
							color: '#333',
						}}
						onClick={() => onSocialLink(personal.links.github)}
					/>
				)}
				{personal.links.twitter && (
					<Twitter
						style={{
							color: '#1da1f2',
						}}
						onClick={() => onSocialLink(personal.links.twitter)}
					/>
				)}
			</div>
		</div>
	);
};

export default Landing;
