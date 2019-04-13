export class ContactInfo {
    mobile: string;
    phone: string;
    address: string;
}

export class User {
    name: string;
    lastname: string;
    email: string;
    contactInfo: ContactInfo;
    constructor() {
        this.contactInfo = new ContactInfo();
    }
}


