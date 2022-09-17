import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {Actions, ProxyProps, VirtualProps, PP} from './types';
import {register} from 'be-hive/register.js';

export class BeEvanescent implements Actions{
    onWhenDefined({whenDefined, proxy}: PP){
        const promises: Promise<any>[] = whenDefined.map(s => customElements.whenDefined(s));
        Promise.all(promises).then(x => {
            proxy.remove();
        });
    }
}


const ifWantsToBe = 'evanescent';

const upgrade = '*';

const tagName = 'be-evanescent';

define<ProxyProps & BeDecoratedProps<ProxyProps, Actions>, Actions>({
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
        controller: BeEvanescent
    }
});

register(ifWantsToBe, upgrade, tagName);