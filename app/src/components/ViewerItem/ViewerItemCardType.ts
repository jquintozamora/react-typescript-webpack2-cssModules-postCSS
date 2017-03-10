/**
 * defines the ViewerItemCardType singleton constants
 */
export class ViewerItemCardType {
    public static Big: ViewerItemCardType = new ViewerItemCardType(1, "Big", 330, 660, 110, 160, 21, 16);
    public static Medium: ViewerItemCardType = new ViewerItemCardType(2, "Medium", 155, 310, 50, 125, 20, 14);
    public static Small: ViewerItemCardType = new ViewerItemCardType(3, "Small", 100, 200, 35, 115, 18, 12);

    constructor(
        public id: number,
        public name: string,
        public imageHeight: number,
        public imageWidth: number,
        public titleMaxWords: number,
        public summaryMaxWords: number,
        public titleFontSize: number,
        public summaryFontSize: number
    ) {
    };
}
