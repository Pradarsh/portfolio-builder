import { create } from 'zustand';

const state = {
	personal: {
		name: '',
		title: '',
		email: '',
		phone: '',
		shortBio: '',
		location: '',
		links: {
			linkedin: '',
			github: '',
			twitter: '',
		},
	},
	work: [
		{
			employer: '',
			location: '',
			title: '',
			website: '',
			dates: '',
			highlights: '',
		},
	],
	volunteer: [
		{
			organization: '',
			location: '',
			title: '',
			dates: '',
			highlights: '',
		},
	],
	education: [
		{
			institution: '',
			major: '',
			degree: '',
			graduationDate: '',
			score: '',
		},
	],
	project: [
		{
			title: '',
			link: '',
			thumbnail: '',
			description: '',
		},
	],
	skill: [''],
};

const useDataStore = create((set) => ({
	...state,
	setPersonal: (personal) => set({ personal }),
	setWork: (work) => set({ work }),
	setVolunteer: (volunteer) => set({ volunteer }),
	setEducation: (education) => set({ education }),
	setProject: (project) => set({ project }),
	setSkill: (skill) => set({ skill }),
}));

export default useDataStore;
