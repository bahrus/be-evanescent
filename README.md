# be-evanescent

*be-evanescent* is a web component decorator that removes the element it adorns from the DOM tree when the web component definitions it monitors for become registered. 

The biggest use case is providing initial css rules for light children, prior to being slotted.  This is important for avoiding FOUC.  But leaving the styles behind when no longer applicable, could have a lasting negative impact on other light children waiting for their web components to become registered, as well as non-shadowed content.

be-evanescent is a attribute-based alternative to 

