# be-evanescent

*be-evanescent* is a web component decorator that removes the element it adorns from the DOM tree when the web component definitions it monitors for become registered. 

<a href="https://nodei.co/npm/be-evanescent/"><img src="https://nodei.co/npm/be-evanescent.png"></a>

Size of package, including custom element behavior framework (be-decorated):

[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/be-evanescent?style=for-the-badge)](https://bundlephobia.com/result?p=be-evanescent)

Size of new code in this package:

<img src="http://img.badgesize.io/https://cdn.jsdelivr.net/npm/be-evanescent?compression=gzip">

[![Playwright Tests](https://github.com/bahrus/be-evanescent/actions/workflows/CI.yml/badge.svg?branch=baseline)](https://github.com/bahrus/be-evanescent/actions/workflows/CI.yml)

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

## Using from CDN:

```html
<script type=module crossorigin=anonymous>
    import 'https://esm.run/be-evanescent';
</script>
```

