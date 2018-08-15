import testComponentHelper from "../../../../../test/unit/helpers/ComponentHelper";
import Header from "./../Header";

describe("<Header />", () => {
  const initialProps = {
    className: ""
  };
  const renderComponent = testComponentHelper(Header);

  describe("@renders", () => {
    it("in default state", () => {
      expect(renderComponent().getHtml()).toMatchSnapshot();
    });
  });
});
