import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeEvanescentActions, BeEvanescentProps, BeEvanescentVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeEvanescentController implements BeEvanescentActions{
    onWhenDefined({whenDefined, proxy}: this){
        const promises: Promise<CustomElementConstructor>[] = whenDefined.map(s => customElements.whenDefined(s));
        Promise.all(promises).then((values) => {
            proxy.remove();
        });
    }
}

export interface BeEvanescentController extends BeEvanescentProps{}

const ifWantsToBe = 'evanescent';

const upgrade = '*';

const tagName = 'be-evanescent';

define<BeEvanescentProps & BeDecoratedProps<BeEvanescentProps, BeEvanescentActions>, BeEvanescentActions>({
    config:{
        tagName,
        propDefaults:{
            upgrade,
            ifWantsToBe,
            primaryProp: 'whenDefined',
            virtualProps: ['whenDefined'],
            
        },
        actions:{
            onWhenDefined:{
                ifAllOf:['whenDefined']
            }
        }
    }
})

register(ifWantsToBe, upgrade, tagName);