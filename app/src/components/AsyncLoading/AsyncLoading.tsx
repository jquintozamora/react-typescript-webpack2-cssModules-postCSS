import * as React from 'react'
import * as styles from './AsyncLoading.module.css'
import { IAsyncLoadingState } from './IAsyncLoadingState'

/* tslint:disable */
// Source: https://gist.github.com/Kovensky/e2ceb3b9715c4e2ddba3ae36e9abfb05
interface System {
    // Lazy Loading
    import<T>(module: string): Promise<T>
}
declare var System: System;
/* tslint:enable */

// the 'moment' static import is only used for its types so typescript deletes it
import * as moment from 'moment'

class AsyncLoading extends React.Component<{}, IAsyncLoadingState> {

    constructor(props: any, context: any) {
        super(props, context)
        // Default State values
        this.state = {
            time: 'No time'
        }
    }

    public render() {
        return (
            <div className={styles.container}>
                <button onClick={this.lazyLoadingMomentJs}>Lazy Load momentjs</button>
                <div>{this.state.time}</div>
            </div>
        )
    }

    private loadingMomentJs = () => {
        // note, if we have at least one reference to moment in our code without lazyLoading
        // involved, then the module will be included in the bundle by webpack
        // const time = moment().format();
        // console.log(time);
        // this.setState({ time });
    }

    private lazyLoadingMomentJs = async () => {

        // TypeScript >= 2.4.0 with async await
        const momentAsync = await import(/* webpackChunkName: "momentjs" */ 'moment')
        const timeAsync = momentAsync().format()
        console.log('TypeScript >= 2.4.0 with async await:')
        console.log(timeAsync)
        this.setState({ time: timeAsync })

        // TypeScript >= 2.4.0 with then, catch
        import(/* webpackChunkName: "momentjs" */ 'moment')
            .then((moment) => {
                // lazyModule has all of the proper types, autocomplete works,
                // type checking works, code references work \o/
                const time = moment().format()
                console.log('TypeScript >= 2.4.0 with then, catch:')
                console.log(time)
                this.setState({ time })
            })
            .catch((err) => {
                console.log('Failed to load moment', err)
            })

        // TypeScript < 2.4 workaround
        // if we use moment inside System.import then we will use lazy loading
        System.import<typeof moment>(/* webpackChunkName: "momentjs" */ 'moment')
            .then((moment) => {
                // lazyModule has all of the proper types, autocomplete works,
                // type checking works, code references work \o/
                const time = moment().format()
                console.log('TypeScript < 2.4 workaround:')
                console.log(time)
                this.setState({ time })
            })
            .catch((err) => {
                console.log('Failed to load moment', err)
            })
    }
}

export default AsyncLoading
