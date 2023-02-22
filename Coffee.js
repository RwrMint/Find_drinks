var express = require("express")
var server  = express()
server.listen(10000)
server.get("/find", showFindPage)

function showFindPage(request, response) {
	if (request.query.name == null) {
		response.send(findPage)
	} else {
		var result = "Not found"
		for (var i = 0; i < drinks.length; i++) {
			if (drinks[i].name == request.query.name) {
				result = "The price is " + drinks[i].price
			}
		}
		response.send("<b>" + result + "</b>")
	}
}

var findPage = `<form>
					<input name="name">
					<button>Find</button>
				</form>
				`
var drinks = [
				{name: "Latte", price: 80},
				{name: "Mocha", price: 90},
				{name: "Cappuccino", price: 80},
				{name: "Water", price: 15}
			 ]