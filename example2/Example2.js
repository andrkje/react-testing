export default class BankAccount {
    constructor(balance = 0, interestRate) {
        this.balance = balance
        this.interestRate = interestRate
    }

    deposit(amount) {
        if (amount < 0)
            throw 'Invalid amount'
        this.balance += amount
    }

    withdraw(amount) {
        if (amount < 0 || this._tooLargeWithdrawalAmount(amount)) {
            throw 'Invalid amount'
        }
        this.balance -= amount
    }

    _tooLargeWithdrawalAmount(amount) {
        return (this.balance - amount) <= 0
    }

    calculateInterest() {
        this.balance += this._getInterest()
    }


    _getInterest() {
        return this.balance * (this.interestRate / 100)
    }

    getBalance() {
        return this.balance
    }

    getInterestRate() {
        return this.interestRate

    }
}