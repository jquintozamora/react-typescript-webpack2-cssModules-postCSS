import * as React from "react";

interface IAppProps {
	name?: string;
}

export default class App extends React.Component<IAppProps, any> {
	public static defaultProps: IAppProps = {
		name: "TypeScript with React and HMR (Hot Module Replacement)"
	};
	render() {
		return (
			<h1 className='appTitle' >Hello, {this.props.name} !!!</h1>
		);
	}
}