//#region Property Guessing

interface PropertyGuessing {
	tacos: string[];
}

const tacoBag = {
	tacos: ["baja", "veggie"]
}

const tacos = tacoBag.taco;

//#endregion

//#region decreased verbosity

interface Foo {
	data: {
		several: {
			levels: {
				deep: string;
			}
		}
	}
}

const foo: Foo = {
	data: {
		several: {
			levels: {
				deep: 1000
			}
		}
	}
}

//#endregion
