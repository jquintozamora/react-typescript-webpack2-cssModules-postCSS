import * as React from "react";

/* tslint:disable:no-var-requires */
const styles: any = require("./App.module.css");
/* tslint:enable:no-var-requires */

interface IAppProps {
    name?: string;
}

export default class App extends React.Component<IAppProps, any> {
    public static defaultProps: IAppProps = {
        name: "TypeScript with React, CSS Modules and HMR (Hot Module Replacement)."
    };
    public render() {
        return (
            <h1 className={styles.title} >Hello, {this.props.name} !!!</h1>
        );
    }
}
