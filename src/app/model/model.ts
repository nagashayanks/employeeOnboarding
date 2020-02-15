
export interface CurrentUser {
    userId: number;
}

export interface SchemaSummary {
    schemeId: number;
    schemeName: string;
    userName: string;
    paymentMode: string;
    date: any;
    email: string;
}
export interface Cause {
    schemeId: number;
    schemeName: string;
    description: string;
    amount: number;
    taxBenefitAmount: number;
    taxBenefitDescription: string;
    imageUrl: string;

}
export interface Donationdata {

    name: string;
    panNumber: string;
    mobile: number;
    email: string;
    paymentMode: string;
    date: string;
    schemeName: string;
    description: string;
    amount: number;
    taxBenefitAmount: number;
    taxBenefitDescription: number;
}
export interface Pie {
    schemeId: number;
    name: string;
    y: number;
}
