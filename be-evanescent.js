import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeEvanescentController {
    onWhenDefined({ whenDefined, proxy }) {
        const promises = whenDefined.map(s => customElements.whenDefined(s));
        Promise.all(promises).then((values) => {
            proxy.remove();
        });
    }
}
const ifWantsToBe = 'evanescent';
const upgrade = '*';
const tagName = 'be-evanescent';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            forceVisible: true,
            primaryProp: 'whenDefined',
            virtualProps: ['whenDefined'],
        },
        actions: {
            onWhenDefined: {
                ifAllOf: ['whenDefined']
            }
        }
    },
    complexPropDefaults: {
        controller: BeEvanescentController
    }
});
register(ifWantsToBe, upgrade, tagName);
