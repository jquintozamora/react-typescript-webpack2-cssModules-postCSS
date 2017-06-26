import * as React from "react";

/* tslint:disable-next-line:no-var-requires */
const styles: any = require("./Header.module.css");

import { IHeaderProps } from "./IHeaderProps";

class Header extends React.Component<IHeaderProps, {}> {

    public render() {
        return (
            <header className={styles.header}>
                <h1>Hello, {this.props.title}</h1>
                <h2>Background Color from PostCSS variable: {styles.header_bg}</h2>
            </header>
        );
    }
}

export default Header;
