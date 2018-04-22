# React-Warp 🌀

A dead simple component to handle rendering portals.

Simply pass in your children and provide an `isOpen` prop:

```JSX
<div>
  <Portal isOpen={this.state.showPortal}>
    <h1>The 🍰 is a lie!</h1>
  </Portal>
</div>
```

### Under the Hood:

This uses React 16's `createPortal`, it also has an additional hook to allow implementers to provider their own factory function for determining where to mount the portal.

### API:

* `<Portal>` props:
  * `isOpen`: boolean determines if the portal is rendering the children or null
  * `provideMountPoint`: function a function to return the portal mount point, defaults to creating a div and appending it to the bottom of the body
