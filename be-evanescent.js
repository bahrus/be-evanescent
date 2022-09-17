import { define } from 'be-decorated/be-decorated.js';
import { register } from 'be-hive/register.js';
export class BeEvanescent {
    onWhenDefined({ whenDefined, proxy }) {
        const promises = whenDefined.map(s => customElements.whenDefined(s));
        Promise.all(promises).then(x => {
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
            forceVisible: ['style'],
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
        controller: BeEvanescent
    }
});
register(ifWantsToBe, upgrade, tagName);
