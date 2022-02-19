import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeEvanescentActions, BeEvanescentProps, BeEvanescentVirtualProps} from './types';
import {register} from 'be-hive/register.js';

export class BeEvanescentController implements BeEvanescentActions{
    onWhenDefined({whenDefined, proxy}: this){
        const promises: Promise<any>[] = whenDefined.map(s => customElements.whenDefined(s));
        Promise.all(promises).then(x => {
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
            forceVisible: ['style'],
            primaryProp: 'whenDefined',
            virtualProps: ['whenDefined'],
            
        },
        actions:{
            onWhenDefined:{
                ifAllOf:['whenDefined']
            }
        }
    },
    complexPropDefaults:{
        controller: BeEvanescentController
    }
})

register(ifWantsToBe, upgrade, tagName);