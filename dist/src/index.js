import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { unstable_createPortal } from 'react-dom';

export default class Portal extends Component {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this._mount = null, _temp;
  }

  render() {
    if (!_mount) {
      _mount = this.props.provideMountPoint();
    }
    return this.props.isOpen && unstable_createPortal(this.props.children, _mount);
  }
}
Portal.propTypes = {
  isOpen: PropTypes.bool,
  provideMountPoint: PropTypes.func
};
Portal.defaultProps = {
  provideMountPoint() {
    const mount = document.createElement('div');
    document.body.appendChild(mount);
    return mount;
  }
};