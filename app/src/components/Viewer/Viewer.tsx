import * as React from 'react'
import ViewerItem from '../ViewerItem/ViewerItem'
import * as styles from './Viewer.module.css'
import { ViewerItemCardType } from '../ViewerItem/ViewerItemCardType'
import { IViewerProps } from './IViewerProps'

class Viewer extends React.Component<IViewerProps, {}> {
    public render() {
        const { id, article } = this.props
        return (
            <section id={id} className={styles.container} >
                <div className={styles.title} >Card Types sample</div>
                <div className={styles.big}>
                    <ViewerItem {...article} typeSingleton={ViewerItemCardType.Big} />
                </div>
                <div className={styles.medium}>
                    <ViewerItem {...article} typeSingleton={ViewerItemCardType.Medium} />
                </div>
                <div className={styles.small}>
                    <ViewerItem {...article} typeSingleton={ViewerItemCardType.Small} />
                </div>
            </section>
        )
    }
}

export default Viewer
