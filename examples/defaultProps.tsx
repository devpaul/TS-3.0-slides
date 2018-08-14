import * as React from "react";

class Greet extends React.Component {
	render() {
		const { name } = this.props;
		return <div>Hello ${name.toUpperCase()}!</div>;
	}

	static defaultProps = {
		name: 'world'
	}
}

// Type-checks! No type assertions needed!
let el = <Greet />
