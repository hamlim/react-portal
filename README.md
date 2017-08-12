# React-Portal 🌀

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

This uses React 16's `unstable_createPortal` method which is far easier than the previous popular method `unstable_renderSubtreeIntoContainer`
which is being deprecated over preference for `createPortal`.
