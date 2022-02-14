const CAR = {
	make       : 'Honda',
	model      : 'Accord',
	color      : 'Blue',
	hasSunroof : true
};

class Car {
	constructor(make, model, color) {
		this.make = make;
		this.model = model;
		this.color = color;
	}

	getMake() {
		return this.make;
	}
}

function isActiveClient(client) {
	const clientRecord = database.lookup(client);
	return clientRecord.isActive();
}

const menuConfig = {
	title       : 'Order',
	// User did not include 'body' key
	buttonText  : 'Send',
	cancellable : true
};

function createMenu(config) {
	let finalConfig = Object.assign(
		{
			title       : 'Foo',
			body        : 'Bar',
			buttonText  : 'Baz',
			cancellable : true
		},
		config
	);
	return finalConfig;
	// config now equals: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
	// ...
}
