'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _React = require('./React');

var _React2 = _interopRequireDefault(_React);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cx = require('./cx');

var _cx2 = _interopRequireDefault(_cx);

var _joinClasses = require('./joinClasses');

var _joinClasses2 = _interopRequireDefault(_joinClasses);

var _createReactClass = require('create-react-class');

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Copyright Schrodinger, LLC
                                                                                                                                                                                                                              * All rights reserved.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * This source code is licensed under the BSD-style license found in the
                                                                                                                                                                                                                              * LICENSE file in the root directory of this source tree. An additional grant
                                                                                                                                                                                                                              * of patent rights can be found in the PATENTS file in the same directory.
                                                                                                                                                                                                                              *
                                                                                                                                                                                                                              * @providesModule FixedDataTableCellDefault
                                                                                                                                                                                                                              * @typechecks
                                                                                                                                                                                                                              */

/**
 * Component that handles default cell layout and styling.
 *
 * All props unless specified below will be set onto the top level `div`
 * rendered by the cell.
 *
 * Example usage via from a `Column`:
 * ```
 * const MyColumn = (
 *   <Column
 *     cell={({rowIndex, width, height}) => (
 *       <Cell
 *         width={width}
 *         height={height}
 *         className="my-class">
 *         Cell number: <span>{rowIndex}</span>
*        </Cell>
 *     )}
 *     width={100}
 *   />
 * );
 * ```
 */
var FixedDataTableCellDefault = (0, _createReactClass2.default)({
  displayName: 'FixedDataTableCellDefault',

  propTypes: {

    /**
     * Outer height of the cell.
     */
    height: _propTypes2.default.number,

    /**
     * Outer width of the cell.
     */
    width: _propTypes2.default.number,

    /**
     * Optional prop that if specified on the `Column` will be passed to the
     * cell. It can be used to uniquely identify which column is the cell is in.
     */
    columnKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),

    /**
     * Optional prop that represents the rows index in the table.
     * For the 'cell' prop of a Column, this parameter will exist for any
     * cell in a row with a positive index.
     *
     * Below that entry point the user is welcome to consume or
     * pass the prop through at their discretion.
     */
    rowIndex: _propTypes2.default.number
  },

  render: function render() {
    //Remove some props like columnKey and rowIndex so we don't pass it into the div
    var _props = this.props,
        height = _props.height,
        width = _props.width,
        style = _props.style,
        className = _props.className,
        children = _props.children,
        columnKey = _props.columnKey,
        rowIndex = _props.rowIndex,
        props = _objectWithoutProperties(_props, ['height', 'width', 'style', 'className', 'children', 'columnKey', 'rowIndex']);

    var innerStyle = _extends({
      height: height,
      width: width
    }, style);

    return _React2.default.createElement(
      'div',
      _extends({}, props, {
        className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap1'), (0, _cx2.default)('public/fixedDataTableCell/wrap1'), className),
        style: innerStyle }),
      _React2.default.createElement(
        'div',
        {
          className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap2'), (0, _cx2.default)('public/fixedDataTableCell/wrap2')) },
        _React2.default.createElement(
          'div',
          {
            className: (0, _joinClasses2.default)((0, _cx2.default)('fixedDataTableCellLayout/wrap3'), (0, _cx2.default)('public/fixedDataTableCell/wrap3')) },
          _React2.default.createElement(
            'div',
            { className: (0, _cx2.default)('public/fixedDataTableCell/cellContent') },
            children
          )
        )
      )
    );
  }
});

module.exports = FixedDataTableCellDefault;