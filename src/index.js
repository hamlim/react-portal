import { Component } from 'react'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'

export default class Portal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    provideMountPoint: PropTypes.func,
  }
  static defaultProps = {
    provideMountPoint() {
      const mount = document.createElement('div')
      document.body.appendChild(mount)
      return mount
    },
  }
  _mount = null
  render() {
    if (!this._mount) {
      this._mount = this.props.provideMountPoint()
    }
    return this.props.isOpen && createPortal(this.props.children, this._mount)
  }
}
