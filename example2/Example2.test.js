import BankAccount from './Example2'

it('Is instantiated with correct balance and interest rate', () => {
    let account = new BankAccount(100, 2);
    expect(account.getBalance()).toEqual(100)
    expect(account.getInterestRate()).toEqual(2)
});

describe('Test deposit to bank account', () => {
    it('Add valid amount', () => {
        let account = new BankAccount(100, 2);
        account.deposit(100)
        expect(account.getBalance()).toBe(200)
    })

    it('Add invalid amount, expect error', () => {
        let account = new BankAccount(100, 2) // must be inside a function to be able to catch error
        expect(() => {
            account.deposit(-100)
        }).toThrowError()
    })
})


describe('Test withdrawal from bank account', () => {

    // We can use beforeEach to run a function before each individual test
    let account
    beforeEach(() => {
        account = new BankAccount(100, 2);
    })

    it('Test withdraw valid amount', () => {
        account.withdraw(50)
        expect(account.getBalance()).toEqual(50)
    });

    it('Test withdraw too large amount', () => {
        expect(() => {  // must be inside a function to be able to catch error
            account.withdraw(200)
        }).toThrowError()
    });

    it('Test withdraw negative amount, expect error', () => {
        expect(() => {
            account.withdraw(-100)
        }).toThrowError()
    });
})

it('Test calculate interest', () => {
    let account = new BankAccount(100, 2);
    account.calculateInterest()
    expect(account.getBalance()).toEqual(102)
});