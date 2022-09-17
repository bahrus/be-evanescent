import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';

export interface EndUserProps{
    whenDefined: string[];
}

export interface VirtualProps extends EndUserProps, MinimalProxy{
}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy;
}

export type PP = ProxyProps;

export interface Actions{
    onWhenDefined(pp: PP): void;
}