
export interface Inquiry {
    id: string;
    companyName: string;
    message: string;
    status: 'New Lead' | 'Viewed' | 'Replied' | 'Urgent';
    time: string;
    location: string;
    initials: string;
}
