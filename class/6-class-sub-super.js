class Product {

	setData(title,price){
		this.title = title
		this.price = price
	}

	getData(){
		return [
			this.title,
			this.price
		]
	}
}

class Hotel extends Product{

	setData(title,price,address){
		super.setData(title,price)
		this.address = address
	}

	getData(){
		return [
			...[this.address], ...super.getData()
		]
	}

}

const hotel = new Hotel
hotel.setData('Hilton','3000','Iran,Tehran')
console.log(hotel.getData())

