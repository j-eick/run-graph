import create from 'zustand';

const useStore = create(set => {
	return {
		/***************************
		 ******** CHART DATA *******
		 */
		runData: [
			{
				id: 1,
				day: '12/08',
				distance: 3.4,
				time: '15:23',
				pace: '05:34',
				borg: 7,
				pain: 1,
			},
			{
				id: 2,
				day: '13/08',
				distance: 8.04,
				time: '38:09',
				pace: '06:12',
				borg: 8,
				pain: 1,
			},
			{
				id: 3,
				day: '14/08',
				distance: 3.32,
				time: '18:30',
				pace: '06:23',
				borg: 5,
				pain: 0,
			},
			{
				id: 4,
				day: '15/08',
				distance: 5.02,
				time: '24:30',
				pace: '05:00',
				borg: 8,
				pain: 1,
			},
			{
				id: 5,
				day: '16/08',
				distance: 7.88,
				time: '36:30',
				pace: '05:03',
				borg: 8,
				pain: 1,
			},
			{
				id: 6,
				day: '17/08',
				distance: 7.2,
				time: '34:48',
				pace: '05:45',
				borg: 7,
				pain: 0,
			},
			{
				id: 7,
				day: '18/08',
				distance: 9.23,
				time: '43:30',
				pace: '05:55',
				borg: 8,
				pain: 0,
			},
		],
		addRunData(formSubmit) {
			set(state => {
				return {runData: [...state.runData, formSubmit]};
			});
		},
		/**
		 *** IMPLEMENTATION FOLLOWS ***
		 */
		// editDistance(id, time) {
		// 	set(state => ({
		// 		runData: state.runData.map(entry => (entry.id === id ? {...entry, time} : entry)),
		// 	}));
		// },
		deleteEntry(id) {
			set(state => {
				return {
					runData: state.runData.filter(entry => id !== entry.id),
				};
			});
		},
		/************************
		 ******* WORKOUTS *******
		 */
		workouts: [],
	};
});

export default useStore;
