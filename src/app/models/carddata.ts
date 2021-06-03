export class Carddata {

    login?: string;
    avatar_url?: string;
    contributions?: number;

    constructor(properties?: Carddata) {
        if (properties) {
            this.login = properties.login || '';
            this.avatar_url = properties.avatar_url || '';
            this.contributions = properties.contributions || 0;
        }
    }
}
