class Account{
    constructor(name, accNo,balance) {
        this.name = name
        this.accNo = accNo
        this.balance = balance
    }
    deposit(amount){
        this.balance += amount
    }
    withdraw(amount){
        if(amount> this.balance){
            console.log("insufficient balance")

        }else{
            this.balance +=amount
        }
    }
    printDetails(){
        console.log(`${this.name} ${this.accNo} USD${this.balance}`)
    }
}
//objects
let acc1 = new Account("Jane","001", 18000)
let acc2 = new Account("June","002", 12000)

acc1.deposit(6000)
acc1.printDetails()
acc1.withdraw(300)
acc1.printDetails()