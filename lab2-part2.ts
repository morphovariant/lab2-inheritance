class SavingsAccount {
    private numberWithdraw:number = 0;    

    constructor(private initialBalance:number, private ownerName:string) {

    }

    deposit (n:number) {
        this.initialBalance += n
    }

    withdraw (n:number) {
        if (this.numberWithdraw >= 3) {
            console.log('Withdrawl denied; only 3 withdrawls allowed on savings accounts.')
        } else {
            this.initialBalance -= n
            this.numberWithdraw ++
        }
    }

    checkBalance () {
        console.log (`Current balance: ${this.initialBalance} \nAccount Owner: ${this.ownerName}`)
    }
}

let myAccount:SavingsAccount = new SavingsAccount(10000,'Jen Yoakum');
myAccount.deposit(3498);
myAccount.withdraw(2.65);
myAccount.checkBalance();
myAccount.withdraw(965.72);
myAccount.checkBalance();
myAccount.withdraw(43.56);
myAccount.checkBalance();
myAccount.withdraw(76.58);
myAccount.checkBalance();