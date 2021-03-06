export class History {
    title: string;
    content: string;
    markerId: string;
    date: Date;
    keywords: string[];
    images: string[];
    author: string;
    source: string[];
    created: Date;
    lastUpdated: Date;
    approved: Date = null;
    declined: Date = null;
    deleted: Boolean
}