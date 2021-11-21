import {BeDecoratedProps} from 'be-decorated/types';

export interface BeEvanescentVirtualProps{
    whenDefined: string[];
}

export interface BeEvanescentProps extends BeEvanescentVirtualProps{
    proxy: Element & BeEvanescentVirtualProps;
}

export interface BeEvanescentActions{
    onWhenDefined(self: this): void;
}