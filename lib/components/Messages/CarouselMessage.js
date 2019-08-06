'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselItem = function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem(props) {
    _classCallCheck(this, CarouselItem);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {};
    return _this;
  }

  CarouselItem.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        title = _props.title,
        subtitle = _props.subtitle,
        url = _props.url,
        buttons = _props.buttons;


    var buttonTags = buttons.map(function (_ref, i) {
      var text = _ref.text,
          payload = _ref.payload;

      return _react2.default.createElement(
        'button',
        { className: 'sc-carousel--action', onClick: _this2.props.onCarouselClick, 'data-payload': payload, key: i },
        ' ',
        text,
        ' '
      );
    });

    return _react2.default.createElement(
      'div',
      { className: 'sc-carousel--item' },
      _react2.default.createElement('div', { className: 'sc-carousel--thumbnail', style: { backgroundImage: 'url(' + url + ')' } }),
      _react2.default.createElement(
        'div',
        { className: 'sc-carousel--info' },
        _react2.default.createElement(
          'div',
          { className: 'sc-carousel--title' },
          title
        ),
        _react2.default.createElement(
          'div',
          { className: 'sc-carousel--subtitle' },
          '$ ',
          subtitle.toLocaleString()
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'sc-carousel--actions' },
        buttonTags
      )
    );
  };

  return CarouselItem;
}(_react.Component);

var CarouselMessage = function CarouselMessage(props) {
  var CarouselList = props.data.map(function (item, i) {
    return _react2.default.createElement(CarouselItem, _extends({}, item, { onCarouselClick: props.onCarouselClick, key: i }));
  });

  return _react2.default.createElement(
    'div',
    { className: 'sc-carousel' },
    CarouselList
  );
};

exports.default = CarouselMessage;
module.exports = exports['default'];