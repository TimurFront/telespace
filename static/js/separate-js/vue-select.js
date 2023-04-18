if ($("#app").length > 0) {
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();
	
	today = mm + '/' + dd + '/' + yyyy;
	console.log(today);
	
	let vm = new Vue({
		el: '#app',
		delimiters: ['${', '}'],
		components: {
			Multiselect: window.VueMultiselect.default
		},
		data() {
			return {
				value: [],
				options: [
					{
						language: 'А',
						libs: [
							{ name: 'Авто и мото' },
							{ name: 'Авторский блог' },
							{ name: 'Азербайджанские каналы' }
						]
					},
					{
						language: 'Б',
						libs: [
							{ name: 'Белорусские каналы' },
							{ name: 'Бизнес и финансы' }
						]
					},
					{
						language: 'В',
						libs: [
							{ name: 'Военное' },
							{ name: 'Все подряд' }
						]
					},
				]
			}
		},
		methods: {
			customLabel({ name }) {
				return `${name}`
			}
		},
		watch: {
			value(val) {
				console.log(val)
			}
		}
	})
}
if ($("#app1").length > 0) {
	const app = new Vue({
		el: '#app1',
		components: {
			vuejsDatepicker
		},
		data: () => ({
			disabledDates: {
				to: new Date(Date.now() - 8640000)
			},
			minDate: today,
			message: "Yo!",
			dateTime: '',
		})
	});
}


