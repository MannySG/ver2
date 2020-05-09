export class PlaidLink {
    _id: string;
    trackingDate: string;
    updatedAt: string;
    blank: {
        name: string;
        logo: string;
        logoUrl: string;
        id: string;
    }
    createAt: string;
    accounts: [
        {
            _id: string;
            account_id: string;
            name: string;
            subtype: string;
            type: string;
            plaid: string;
            createAt: string;
            status: boolean;
        }
    ]
}