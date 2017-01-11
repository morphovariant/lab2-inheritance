class CheckingsAccount {
    
    constructor(private initialBalance:number, private ownerName:string) {

    }

    deposit (n:number) {
        this.initialBalance += n
    }

    withdraw (n:number) {
        this.initialBalance -= n
    }

    checkBalance () {
        console.log (`Current balance: ${this.initialBalance}\nAccount Owner: ${this.ownerName}`)
    }
}

let myAccount:CheckingsAccount = new CheckingsAccount(10000,'Jen Yoakum');

myAccount.deposit(3498);
myAccount.withdraw(2.65);
myAccount.checkBalance();