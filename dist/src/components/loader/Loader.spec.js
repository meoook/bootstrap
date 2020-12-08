"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

 * @jest-environment jsdom

 */
jest.mock('./Loader.module.scss');
// let container = null
// beforeEach(() => {
//   // setup a DOM element as a render target
//   container = document.createElement('div')
//   document.body.appendChild(container)
// })
// afterEach(() => {
//   // cleanup on exiting
//   unmountComponentAtNode(container)
//   container.remove()
//   container = null
// })
describe('#Loader', function () {
  it('Should render with svg', function () {
    var _render = (0, _react2.render)( /*#__PURE__*/_react.default.createElement(_index.default, null)),
        getByTestId = _render.getByTestId;

    var element = getByTestId('loader-circle');
    expect(element).toBeInTheDocument();
  });
}); // const renderComponent = (props = {}) => render(<Loader {...props} />)
// describe('<Loader />', () => {
//   it('should render an <a> tag if no route is specified', () => {
//     const { container } = renderComponent()
//     // expect(container.querySelector('svg')).not.toBeNull()
//     expect(container.querySelector('svg')).toBeInTheDocument()
//   })
//   it('Should render with svg', () => {
//     const { getByTestId } = render(<Loader />)
//     const element = getByTestId('loader-circle')
//     expect(element).toBeInTheDocument()
//   })
// })

//# sourceMappingURL=Loader.spec.js.map