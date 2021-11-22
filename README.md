# be-evanescent

*be-evanescent* is a web component decorator that removes the element it adorns from the DOM tree when the web component definitions it monitors for become registered. 

<a href="https://nodei.co/npm/be-evanescent/"><img src="https://nodei.co/npm/be-evanescent.png"></a>

The biggest use case is providing initial css rules for light children, prior to being slotted.  This is important for avoiding FOUC.  But leaving the styles behind when no longer applicable, could have a lasting negative impact on other light children waiting for their web components to become registered, as well as non-shadowed content.  Not to mention the performance impact of having non applicable css sitting in memory.

be-evanescent is an attribute-based alternative to [transient-style](https://github.com/bahrus/transient-style).

## Syntax

```html
<style be-evanescent='["be-evanescent"]'>
    div{
        color: red;
    }
</style>
```

The style tag is removed from the DOM tree as soon as web component "be-evanescent" is registered.

## Viewing Locally

1.  Install git.
2.  Fork/clone this repo.
3.  Install node.
4.  Open command window to folder where you cloned this repo.
5.  > npm install
6.  > npm run serve
7.  Open http://localhost:3030/demo/dev in a modern browser.

