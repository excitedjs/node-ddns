export interface DDNSProvider {
    updateIpv4(ip: string) : Promise<any>
    updateIpv6(ip: string) : Promise<any>
}