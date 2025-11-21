class Customer {
    id: number;
    name: string;
    email: string;
    phone: string;

    constructor(id: number, name: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    displayInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Email: ${this.email}`);
        console.log(`Phone: ${this.phone}`);
    }

    updateEmail(newEmail: string): void {
        this.email = newEmail;
    }
}

const customer = new Customer(1, "Nguyen Van A", "nguyen@example.com", "0123456789");
customer.displayInfo();
console.log("\nSau khi cập nhật email:");
customer.updateEmail("newemail@example.com");
customer.displayInfo();
