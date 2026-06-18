//@ts-check

/** @import {EMC} from './types/mount-observer/types' */;
/** @import {AllProps, Actions} from './types/be-evanescent/types' */
/** @import {RAConfig} from './types/roundabout/types' */

/**
 * @type {EMC<any, AllProps, Element, RAConfig<AllProps, Actions> >}
 */
export const emc = {
    enhConfig: {
        enhKey: 'BeEvanescent',
        spawn: 'be-evanescent/be-evanescent.js',
        withAttrs: {
            base: 'be-evanescent',
            _base: {
                instanceOf: 'Array',
                mapsTo: 'whenDefined'
            }
        }
    },
    customData: {
        weakRef: {
            properties: ['enhancedElement']
        },
        actions: {
            onWhenDefined: {
                ifAllOf: ['whenDefined', 'enhancedElement']
            }
        },
        compacts: {
            when_resolved_changes_dispatch: 'resolved',
        }
    }
}

export function render(){
    return JSON.stringify(emc, null, 4);
}

console.log(render());
