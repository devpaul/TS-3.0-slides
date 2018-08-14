type AddType<T> = T extends number[] ? number : string;

function add<TS extends (string | number)[]>(... values: TS): AddType<TS> {
	return null;
}

const one = add(1, 2, 3);
const two = add(1, 'one');
const three = add('one', 'two', 'three');
