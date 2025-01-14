import { Owner } from "./owner";
import { License } from "./license";
import { NodeWithI18n } from "@angular/compiler";

export class Repo {

    id?: number;
    node_id?: "";
    name?: "";
    full_name?: "";
    private?: boolean;
    owner?: Owner;
    html_url?: "";
    description?: "";
    fork?: boolean;
    url?: "";
    forks_url?: "";
    keys_url?: "";
    collaborators_url?: "";
    teams_url?: "";
    hooks_url?: "";
    issue_events_url?: "";
    events_url?: "";
    assignees_url?: "";
    branches_url?: "";
    tags_url?: "";
    blobs_url?: "";
    git_tags_url?: "";
    git_refs_url?: "";
    trees_url?: "";
    statuses_url?: "";
    languages_url?: "";
    stargazers_url?: "";
    contributors_url?: "";
    subscribers_url?: "";
    subscription_url?: "";
    commits_url?: "";
    git_commits_url?: "";
    comments_url?: "";
    issue_comment_url?: "";
    contents_url?: "";
    compare_url?: "";
    merges_url?: "";
    archive_url?: "";
    downloads_url?: "";
    issues_url?: "";
    pulls_url?: "";
    milestones_url?: "";
    notifications_url?: "";
    labels_url?: "";
    releases_url?: "";
    deployments_url?: "";
    created_at?: "";
    updated_at?: "";
    pushed_at?: "";
    git_url?: "";
    ssh_url?: "";
    clone_url?: "";
    svn_url?: "";
    homepage?: "" | null;
    size?: number;
    stargazers_count?: number;
    watchers_count?: number;
    language?: "";
    has_issues?: boolean;
    has_projects?: boolean;
    has_downloads?: boolean;
    has_wiki?: boolean;
    has_pages?: boolean;
    forks_count?: number;
    mirror_url?: "" | null;
    archived?: boolean;
    disabled?: boolean;
    open_issues_count?: number;
    license?: License;
    forks?: number;
    open_issues?: number;
    watchers?: number;
    default_branch?: "";

    constructor(properties?: Repo) {
        if (properties) {
            this.id = properties.id || 0;
            this.node_id = properties.node_id || "";
            this.name = properties.name || "";
            this.full_name = properties.full_name || "";
            this.private = properties.private || false;
            this.owner = properties.owner || {};
            this.html_url = properties.html_url || "";
            this.description = properties.description || "";
            this.fork = properties.fork || false;
            this.url = properties.url || "";
            this.forks_url = properties.forks_url || "";
            this.keys_url = properties.keys_url || "";
            this.collaborators_url = properties.collaborators_url || "";
            this.teams_url = properties.teams_url || "";
            this.hooks_url = properties.hooks_url || "";
            this.issue_events_url = properties.issue_events_url || "";
            this.events_url = properties.events_url || "";
            this.assignees_url = properties.assignees_url || "";
            this.branches_url = properties.branches_url || "";
            this.tags_url = properties.tags_url || "";
            this.blobs_url = properties.blobs_url || "";
            this.git_tags_url = properties.git_tags_url || "";
            this.git_refs_url = properties.git_refs_url || "";
            this.trees_url = properties.trees_url || "";
            this.statuses_url = properties.statuses_url || "";
            this.languages_url = properties.languages_url || "";
            this.stargazers_url = properties.stargazers_url || "";
            this.contributors_url = properties.contributors_url || "";
            this.subscribers_url = properties.subscribers_url || "";
            this.subscription_url = properties.subscription_url || "";
            this.commits_url = properties.commits_url || "";
            this.git_commits_url = properties.git_commits_url || "";
            this.comments_url = properties.comments_url || "";
            this.issue_comment_url = properties.issue_comment_url || "";
            this.contents_url = properties.contents_url || "";
            this.compare_url = properties.compare_url || "";
            this.merges_url = properties.merges_url || "";
            this.archive_url = properties.archive_url || "";
            this.downloads_url = properties.downloads_url || "";
            this.issues_url = properties.issues_url || "";
            this.pulls_url = properties.pulls_url || "";
            this.milestones_url = properties.milestones_url || "";
            this.notifications_url = properties.notifications_url || "";
            this.labels_url = properties.labels_url || "";
            this.releases_url = properties.releases_url || "";
            this.deployments_url = properties.deployments_url || "";
            this.created_at = properties.created_at || "";
            this.updated_at = properties.updated_at || "";
            this.pushed_at = properties.pushed_at || "";
            this.git_url = properties.git_url || "";
            this.ssh_url = properties.ssh_url || "";
            this.clone_url = properties.clone_url || "";
            this.svn_url = properties.svn_url || "";
            this.homepage = properties.homepage || null;
            this.size = properties.size || 0;
            this.stargazers_count = properties.stargazers_count || 0;
            this.watchers_count = properties.watchers_count || 0;
            this.language = properties.language || "";
            this.has_issues = properties.has_issues || true;
            this.has_projects = properties.has_projects || true;
            this.has_downloads = properties.has_downloads || true;
            this.has_wiki = properties.has_wiki || true;
            this.has_pages = properties.has_pages || false;
            this.forks_count = properties.forks_count || 0;
            this.mirror_url = properties.mirror_url || null;
            this.archived = properties.archived || false;
            this.disabled = properties.disabled || false;
            this.open_issues_count = properties.open_issues_count || 0;
            this.license = properties.license || {};
            this.forks = properties.forks || 0;
            this.open_issues = properties.open_issues || 0;
            this.watchers = properties.watchers || 0;
            this.default_branch = properties.default_branch || "";
        }
    }

}
