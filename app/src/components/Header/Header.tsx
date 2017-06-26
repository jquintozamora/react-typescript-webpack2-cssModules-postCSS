import * as React from "react";

/* tslint:disable-next-line:no-var-requires */
const styles: any = require("./Header.module.css");

import { IHeaderProps } from "./IHeaderProps";

class Header extends React.Component<IHeaderProps, {}> {

    public render() {
        return (
            <header className={styles.header}>
                <h1>Hello, {this.props.title}</h1>
                <h3>Header background Color from PostCSS => var(--headerBackground): {styles.header_bg}</h3>
            </header>
        );
    }
}

export default Header;
