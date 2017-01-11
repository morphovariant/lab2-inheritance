class Account {
    initialBalance:number; 
    ownerName:string

    constructor( balance:number, name:string) {
        this.initialBalance = balance
        this.ownerName = name
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

class CheckingsAccount extends Account {
    
    constructor(private balance:number, private name:string) {
        super(balance, name)
    }

}

class SavingsAccount extends Account {
    private numberWithdraw:number = 0; 

    constructor(private balance:number, private name:string) {
        super(balance, name)
    }   

    withdraw (n:number) {
        if (this.numberWithdraw >= 3) {
            console.log('Withdrawl denied; only 3 withdrawls allowed on savings accounts.')
        } else {
            this.balance -= n
            this.numberWithdraw ++
        }
    }

}

let myChecking:CheckingsAccount = new CheckingsAccount(10000,'Jen Yoakum');
myChecking.deposit(3498);
myChecking.withdraw(2.65);
myChecking.checkBalance();

let mySavings:SavingsAccount = new SavingsAccount(10000,'Jen Yoakum');
mySavings.deposit(3498);
mySavings.withdraw(2.65);
mySavings.checkBalance();
mySavings.withdraw(965.72);
mySavings.checkBalance();
mySavings.withdraw(43.56);
mySavings.checkBalance();
mySavings.withdraw(76.58);
mySavings.checkBalance();