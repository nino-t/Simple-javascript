class Cart {
	constructor() {
		this.products = [];
	}

	addProduct(name, qty){
		var product = this.findProduct(name);
		if (product) {
			this.removeProduct(name);
			qty = product.qty + qty;
		}

		var item = {
			name: name,
			qty: qty
		};
		this.products.push(item);
		return item;
	}

	findProduct(name){
		var array = this.products;
		var product = array.find(x => x.name === name);
		return product;
	}

	removeProduct(product){
		var array = this.products;
		array.some(function(item, index) {
			if(array[index]['name'] === product){
				array.splice(index, 1);
				return true;
			}

			return false;
		})

		this.products = array;
		return array;
	}

	showCart(){
		this.products.map(function(product, index){
			console.log(product.name +" ("+ product.qty+ ")");
		});

		return this.products;
	}
}
module.exports = Cart


var cart = new Cart();
cart.addProduct("Baju Biru Mantap", 1);
cart.addProduct("Baju Biru Mantap", 1);
cart.addProduct("Baju Merah Mantap", 12);
cart.removeProduct('Baju Merah Mantap 2');
cart.showCart();