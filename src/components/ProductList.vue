<template>
	
	
	<ul class="list-group">
		<li class="list-group.item" v-for="p in products">{{p.title}}--{{p.price|currency}}
		<br>
		<div class="btn-group">
		<button :disabled="!p.inventory" @click="addToCart(p)" class="btn-btn-default btn-sm">
		Add To Cart
		</button>
		</li>
		
	</ul>

	
</template>
<script>
import {mapGetters,mapActions} from 'vuex'

export default{
	computed: mapGetters({
		products:'allProducts'
	}),
	methods:mapActions([
		'addToCart'
	]),
	created(){
		this.$store.dispatch('getAllProducts')
	}

}
</script>