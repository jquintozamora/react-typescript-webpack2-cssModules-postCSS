import * as React from 'react'
import { ViewerItemCardTypeStyles } from './ViewerItem.inlined.css'
import { IViewerItemProps } from './IViewerItemProps'

class ViewerItem extends React.Component<IViewerItemProps, {}> {

    public render() {
        const { date, imageSrc, linkUrl, summary, title, typeSingleton } = this.props
        const summaryMaxWords: number = typeSingleton.summaryMaxWords
        const finalSummary: string = (summary.length > summaryMaxWords) ? summary.substring(0, summaryMaxWords).concat('...') : summary
        const titleMaxWords: number = typeSingleton.titleMaxWords
        const finalTitle: string = (title.length > titleMaxWords) ? title.substring(0, titleMaxWords).concat('...') : title

        // Get JS Styles
        const InlineStyles = ViewerItemCardTypeStyles(typeSingleton)

        return (
            <table
                role='presentation'
                aria-hidden='true'
                cellSpacing={0}
                cellPadding={0}
                // width="100%"
                style={InlineStyles.table}
            >
                <tbody>
                    <tr>
                        <td>
                            <img
                                src={imageSrc}
                                aria-hidden='true'
                                width={InlineStyles.img.maxWidth}
                                height={InlineStyles.img.height}
                                alt='alt_text'
                                className='center-on-narrow'
                                style={InlineStyles.img}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td style={InlineStyles.title.td} >
                            <a
                                target='_blank'
                                style={InlineStyles.title.a}
                                href={linkUrl}
                            >
                                {finalTitle}
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <td style={InlineStyles.date} >
                            {date}
                        </td>
                    </tr>
                    <tr>
                        <td style={InlineStyles.summary} >
                            {finalSummary}
                        </td>
                    </tr>
                </tbody>
            </table>

        )
    }
}

export default ViewerItem
