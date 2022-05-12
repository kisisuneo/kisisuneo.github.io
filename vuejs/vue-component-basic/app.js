let PlanComponent = {
	
	props: {
		name: {
			type: String,
			required: true
		},
		selected: {type: Boolean, default: false}
	},

	template:`#plan-template`,

	methods:{
		select(){
			this.$emit('select', this.name)
		}
	}
}

let PlanPickerComponent = {
	components: {'plan-up': PlanComponent},
	template:`#plan-picker-template`,
	data(){
		return {
			plans: ["The Curious", "The Addict", "The Single"],
			selectedPlan: null
		}
	},
	methods:{
		selectPlan(plan){
			this.selectedPlan = plan
		}
	}
}

const app = Vue.createApp({
	components: {'plan-picker': PlanPickerComponent}
})
.mount('#app')

// .component('plan-picker',{
// 	components: {planUp: PlanComponent},
// 	template:`#plan-picker-template`,
// 	data(){
// 		return {
// 			plans: ["The Curious", "The Addict", "The Single"]
// 		}
// 	}
// })

// .component('plan-up',{
// 	template:`#plan-template`,
// 	props: {
// 		name: {
// 			type: String,
// 			required: true
// 		},
// 		price: Number

// 	}
// })

