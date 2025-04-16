class BankAccount {
    public accountHolderName: string;
    protected accountNumber: string;
    private balance: number;
    
    constructor(name:string,initialBalance: number) {
        this.balance = initialBalance;
        this.accountHolderName=name;
        this.accountNumber= this.generateAccountNumber() ;
    }
    
    public deposit(amount: number): boolean {
        if (amount > 0) {
        this.balance += amount;
        return true;
        }
        return false;
    }
    
    public withdraw(amount: number): void {
        if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        }
    }
    
    public getBalance(): number {
        return this.balance;
    }
    public getAccountHolderName(): string {
        return this.accountHolderName;
    }
    public getAccountNumber(): string {
        return this.accountNumber;
    }

    private generateAccountNumber(): string {
        return Math.random().toString(36).substring(2, 10).toUpperCase();
    }
}



// Example usage
const account:BankAccount = new BankAccount("John Doe", 1000);
console.log(account.getAccountHolderName()); // Accessing public method
console.log(account.getAccountNumber()); // Accessing public method
console.log(account.getBalance()); // Accessing public method
account.deposit(500); // Depositing money
account.withdraw(200); // Withdrawing money
console.log(account.getBalance()); // Checking balance