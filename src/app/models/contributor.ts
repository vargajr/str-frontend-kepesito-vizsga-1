import { Owner } from "./owner";

export class Contributor extends Owner{
    contributions?: number;

    constructor(properties?: Contributor) {
        super();
        if (properties) {
            this.login = properties.login || '';
            this.id = properties.id || 0;
            this.node_id = properties.node_id || '';
            this.avatar_url = properties.avatar_url || '';
            this.gravatar_id = properties.gravatar_id || '';
            this.url = properties.url || '';
            this.html_url = properties.html_url || '';
            this.followers_url = properties.followers_url || '';
            this.following_url = properties.following_url || '';
            this.gists_url = properties.gists_url || '';
            this.starred_url = properties.starred_url || '';
            this.subscriptions_url = properties.subscriptions_url || '';
            this.organizations_url = properties.organizations_url || '';
            this.repos_url = properties.repos_url || '';
            this.events_url = properties.events_url || '';
            this.received_events_url = properties.received_events_url || '';
            this.type = properties.type || '';
            this.site_admin = properties.site_admin || false;
            this.contributions = properties.contributions || 0;
        }
    }
}
