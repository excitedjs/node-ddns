export interface IPProvider { 
    getIpv4(): Promise<string>;
    getIpv6(): Promise<string>;
}