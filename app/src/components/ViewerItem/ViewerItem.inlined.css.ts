import { ViewerItemCardType } from './ViewerItemCardType'
export const ViewerItemCardTypeStyles = (props: ViewerItemCardType) => {
    return {
        table: {
            border: '0',
            fontSize: props.summaryFontSize,
            textAlign: 'left',
            backgroundColor: '#f4f4f4',
            maxWidth: props.imageWidth,
        },
        img: {
            border: '0',
            width: '100%',
            maxWidth: props.imageWidth,
            height: props.imageHeight,
            backgroundColor: '#dddddd',
            fontSize: 15,
            color: '#555555'
        },
        title: {
            td: {
                verticalAlign: 'top',
                padding: 10,
                fontSize: props.titleFontSize,
                height: props.titleMinHeight
            },
            a: {
                color: '#db0000',
                textDecoration: 'none'
            }
        },
        date: {
            verticalAlign: 'top',
            padding: '0px 10px',
            fontSize: props.summaryFontSize,
            color: '#555555',
            height: props.dateMinHeight
        },
        summary: {
            verticalAlign: 'top',
            padding: 10,
            fontSize: props.summaryFontSize,
            color: '#555555',
            height: props.summaryMinHeight
        }
    }
}
