import * as React from "react";
import ViewerItem from "../ViewerItem/ViewerItem";

/* tslint:disable:no-var-requires */
const styles: any = require("./Viewer.module.css");

// Since TypeScript 2.3 it doesn´t import ViewerItemCardType on this way we need to use require
// import {ViewerItemCardType} from "../ViewerItem/ViewerItemCardType";
const cardType = require("../ViewerItem/ViewerItemCardType");
/* tslint:enable:no-var-requires */

import { IViewerProps } from "./IViewerProps";

class Viewer extends React.Component<IViewerProps, {}> {

    public render() {
        const { id, article } = this.props;
        return (
            <section id={id} className={styles.container} >
                <div className={styles.big}>
                    <ViewerItem {...article} typeSingleton={cardType.ViewerItemCardType.Big} />
                </div>
                <div className={styles.medium}>
                    <ViewerItem {...article} typeSingleton={cardType.ViewerItemCardType.Medium} />
                </div>
                <div className={styles.small}>
                    <ViewerItem {...article} typeSingleton={cardType.ViewerItemCardType.Small} />
                </div>
            </section>
        );
    }
}

export default Viewer;
