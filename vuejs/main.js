let eventBus = new Vue()

Vue.component('product-details',{
	props: {
		details: {
			type: Array,
			required: true
		}
	},

	template:`
		<ul>
			<li v-for="detail in details">{{detail}}</li>
		</ul>
	`
})



Vue.component('product',{
	props: {
		premium: {
			type: Boolean,
			required: true
		}	
	},

	template:`
		<div class="product">

			<div class="product-image">
				<img v-bind:src="image">
			</div>

			<div class="product-info">
				<h1>{{ title }} </h1>
				<a v-bind:href="link" target="_blank">  Check it out! </a>
				<p v-if="inventory > 10">In Stock</p>

				<p v-else-if="inventory <= 10 && inventory > 0 ">We have enough socks for you</p>

				<p v-else :class="{ outofStock: !inStock }"> Out of Stock</p>

				<p>Shipping: {{ shipping }}</p>

				<span v-if="onSale">{{ sale }}</span>

				<product-details :details="details"></product-details>

				<ul>
					<li v-for="size in sizeList">{{size.sizeSock}}</li>
				</ul>

				<div v-for="(variant, index) in variants" 
					:key="variant.variantId"
					class="color-box"
					:style="{ backgroundColor:variant.variantColor }"
					@click = "updateProduct(index)">
					<p >{{  }}</p>
				</div>

				<button @click="addItem()" 
						:disabled="!inStock"
						:class="{ disabledButton: !inStock}">
					Add to cart
				</button>


				<button @click="removeItem()">Remove from cart</button>

			</div>
				<product-tab :reviews="reviews"></product-tab>
		</div>
	`,

	data(){
		return {
		brand: 'Vue Mastery',
		product: 'Socks',
		comment: 'Check it out',
		selectedVariant: 0,
		link:'https://www.amazon.com/',
		inventory: 20,
		

		details: ["80% cotton", "20% polyester", "Gender-neutral"],

		variants: [
			{
				variantId: 2234,
				variantColor: "green",
				variantImage: "socks_green.jpg",
				variantQuantity: 12
			},

			{
				variantId: 2235,
				variantColor: "blue",
				variantImage: "socks_blue.jpg",
				variantQuantity: 0
			}
		],

		sizeList: [
			{
				sizeId: 14,
				sizeSock: "10 US"
			},

			{
				sizeId: 15,
				sizeSock: "10.5 US"
			},

			{
				sizeId: 16,
				sizeSock: "11 US"
			},

			{
				sizeId: 17,
				sizeSock: "11.5 US"
			},

			{
				sizeId: 18,
				sizeSock: "12 US"
			}
		],

		reviews: [],

			
		onSale: false,	
	}
},	

	methods: {		
		addItem(){
			this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
		},

		removeItem(){
			this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
		},

		updateProduct(index){
			this.selectedVariant = index;
			// console.log(index)
		},
		
	},

	computed: {
		title(){
			return this.brand + ' ' + this.product
		},

		image(){
			return this.variants[this.selectedVariant].variantImage
		},

		inStock(){
			return this.variants[this.selectedVariant].variantQuantity
		},

		sale(){
			if (this.onSale) {
				return this.brand + ' ' + this.product + ' are on Sale !!!'
			}
			return this.brand + ' ' + this.product + ' are not on Sale !!!'
		},

		shipping(){
			if (this.premium) {
				return "Free"
			}
			return `$2.99`
		}
	},

	mounted(){
		eventBus.$on('review-submitted', productReview =>{
			this.reviews.push(productReview)		
		})
	}
})

Vue.component('product-review',{
	

	template:`
	<form class="review-form" @submit.prevent="onSubmit">

	<p v-if="errors.length">
		<b> Please correct the following error(s): </b>
		<ul>
			<li v-for="error in errors"> {{ error }} </li>
		</ul>
	</p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
      
      <p>
        <label for="review">Review:</label>      
        <textarea id="review" v-model="review"></textarea>
      </p>
      
      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>
          
      <p>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
	`,

	data(){
		return {
			name: null,
			review: null,
			rating: null,
			errors: []
		}
	},

	methods: {
		onSubmit(){
			if (this.name && this.review && this.rating) {
				let productReview = {
					name: this.name,
					review: this.review,
					rating: this.rating
				}
				eventBus.$emit('review-submitted', productReview)
				this.name = null,
				this.review = null,
				this.rating = null
			}
			else{
				if(!this.name) this.errors.push('Name required')
				if(!this.review) this.errors.push('Review required')
				if(!this.rating) this.errors.push('Rating required')
			}

			
		}
	}
})

Vue.component('product-tab',{
	props: {
		reviews: {
			type: Array,
			required: true
		}
	},

	template: `
		<div>
			<span class = "tab"
				:class = "{ activeTab: selectedTab === tab}"
				v-for = "(tab,index) in tabs" 
				:key="index"
				@click="selectedTab = tab">
					{{ tab }}
				</span>

			<div v-show="selectedTab === 'Reviews' ">
				<h2>Reviews</h2>
					<p v-if="!reviews.length"> There are no reviews yet. </p>

					<ul>
						<li v-for = "review in reviews">
							<p> {{review.name}} </p> 
							<p> {{review.review}} </p>
							<p> Rating: {{review.rating}} </p>
						</li>
					</ul>
			</div>

			<product-review v-show = "selectedTab === 'Make a review' "></product-review>
		</div>

		
	`,

	data(){
		return{
			tabs: ['Reviews', 'Make a review'],
			selectedTab: 'Reviews'
		}
	}

})

let app = new Vue({
	el: '#app',
	data: {
		premium: true,
		cart: []
	},

	methods: {
		updateCart(id){
			this.cart.push(id);
		},

		removeCart(id){
			for (let i = this.cart.length - 1; i >= 0; i--){
				if (this.cart[i] === id) {
					this.cart.splice(i, 1);
				}
			}
		}

	}
})