export class Listrepodata {

    name?: "";
    fork?: boolean;
    stargazers_count?: number;
    pushed_at?: "";

    constructor(properties?: Listrepodata) {
        if (properties) {
            this.name = properties.name || "";
            this.fork = properties.fork || false;
            this.stargazers_count = properties.stargazers_count || 0;
            this.pushed_at = properties.pushed_at || "";
        }
    }

}
