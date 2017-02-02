import * as React from "react";

export interface IAppProps {
	name: string;
}

export class App extends React.Component<IAppProps, any> {
	render() {
		return (
			<h1 className='appTitle' >2 3 4 5 66Hello, {this.props.name}!</h1>
		);
	}
}