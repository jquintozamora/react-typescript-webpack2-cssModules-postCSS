/**
 * complex enum simple emulation
 *      kind of Factory with static singleton ViewerItemCardType constants.
 *
 *  Resources:
 *  - TypeScript enums: https://github.com/Microsoft/TypeScript/issues/1206#issuecomment-296441490
 *  - Using real factory sample: https://github.com/torokmark/contact-me/issues/2
 *  - More about enums: https://basarat.gitbooks.io/typescript/content/docs/enums.html#enum-with-static-functions
 *  - Singleton: https://basarat.gitbooks.io/typescript/docs/tips/singleton.html
 *  - Similar sample: https://codepen.io/ImagineProgramming/pen/GZMXWe?editors=0010#0
 */
export class ViewerItemCardType {
    public static Big: ViewerItemCardType = new ViewerItemCardType(1, 'FeaturedBig', 330, 660, 110, 160, 21, 16, 68, 18, 58)
    public static Medium: ViewerItemCardType = new ViewerItemCardType(2, 'FeaturedSmall', 155, 310, 50, 125, 20, 14, 66, 16, 68)
    public static Small: ViewerItemCardType = new ViewerItemCardType(3, 'NormalArticle', 100, 200, 35, 115, 18, 12, 62, 14, 75)
    public static All: ViewerItemCardType[] = [
        ViewerItemCardType.Big,
        ViewerItemCardType.Medium,
        ViewerItemCardType.Small
    ]
    private constructor(
        public id: number,
        public name: string,
        public imageHeight: number,
        public imageWidth: number,
        public titleMaxWords: number,
        public summaryMaxWords: number,
        public titleFontSize: number,
        public summaryFontSize: number,
        public titleMinHeight: number,
        public dateMinHeight: number,
        public summaryMinHeight: number
    ) { }
}
