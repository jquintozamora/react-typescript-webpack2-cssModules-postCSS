import { ViewerItemCardType } from './ViewerItemCardType'

export interface IViewerItemProps {
    date: Date
    imageSrc: string
    linkUrl: string
    summary: string
    title: string
    typeSingleton: ViewerItemCardType
}
