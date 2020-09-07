// instantiation //

class Player {
	constructor(name, type) {
		this.name = name;
		this.type = type;
	}

	introduce() {
		console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
	}

	magic(){};
}

class Warlock extends Player {
	constructor(name) {
		super(name, "Warlock");
	}
	magic(){
		console.log("Shadow Bolt!");
	}
}

class Healer extends Player {
	constructor(name) {
		super(name, "Healer");
	}
	magic(){
		console.log("Greater Heal!");
	}
}

let p1 = new Warlock("amos");
let p2 = new Healer("shelly");


p1.introduce();
p1.magic();
p2.introduce();
p2.magic();