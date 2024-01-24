export type workItem = {
    title: string;
    tenders_submission_deadline: string;
    ca: string;
    estimated_value: string;
}

export interface TenderProps {
    category: string;
    workItems: workItem[];
}