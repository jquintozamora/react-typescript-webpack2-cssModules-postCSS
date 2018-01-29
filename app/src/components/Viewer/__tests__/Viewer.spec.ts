import testComponentHelper from '../../../../../test/unit/helpers/ComponentHelper'
import Viewer from '../Viewer'

describe('<Viewer />', () => {
    const initialProps = {
        className: ''
    }
    const renderComponent = testComponentHelper(Viewer)
    describe('@renders', () => {
        it('in default state', () => {
            expect(renderComponent().getHtml())
                .toMatchSnapshot()
        })
    })
})
