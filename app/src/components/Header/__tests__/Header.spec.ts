import testComponentHelper from '../../../../../test/unit/helpers/ComponentHelper'
import Header from './../Header'

describe('<Header />', () => {
    const initialProps = {
        className: '',
    };
    const renderComponent = testComponentHelper(Header);

    describe('@renders', () => {
        it('in default state', () => {
            expect(renderComponent().getHtml())
                .toMatchSnapshot();
        })
    })

    // describe('Header presentational component', () =>{
    //     it('should renders two Link elements, first one with propert to equals "/about" and ' +
    //         'text equals "About" and second one with property to equals "/members" and text' +
    //         'equals "Members"', () => {
    //         let headerWrapper = shallow(<Header />);
    
    //         expect(headerWrapper.find('Link').at(0)).to.be.exist;
    //         expect(headerWrapper.find('Link').at(0).prop('to')).to.be.equals("/about");
    //         expect(headerWrapper.find('Link').at(0).children().text()).to.be.equals("About");
    //         expect(headerWrapper.find('Link').at(1)).to.be.exist;
    //         expect(headerWrapper.find('Link').at(1).prop('to')).to.be.equals("/members");
    //         expect(headerWrapper.find('Link').at(1).children().text()).to.be.equals("Members");
    //     });
    // })


})