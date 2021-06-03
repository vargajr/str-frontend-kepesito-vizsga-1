export class License {
    key?: string;
    name?: string;
    spdx_id?: string;
    url?: string;
    node_id?: string;

    constructor(properties?: License) {
        if (properties) {
            this.key = properties.key || "";
            this.name = properties.name || "";
            this.spdx_id = properties.spdx_id || "";
            this.url = properties.url || "";
            this.node_id = properties.node_id || "";
        }
    }
}
