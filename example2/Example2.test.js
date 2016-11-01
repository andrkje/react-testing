import BankAccount from './Example2'

it('Is instantiated with correct balance and interest rate', () => {
    let account = new BankAccount(100, 2);
    // check balance
    expect(account.getBalance()).toEqual(100)
    // check interest rate
    expect(account.getInterestRate()).toEqual(2)
});

describe('Deposit', () => {
    it('add valid amount', () => {
        let account = new BankAccount(100, 2);
        account.deposit(100)
        expect(account.getBalance()).toBe(200)
    })

    it('add invalid amount', () => {
        let account = new BankAccount(100, 2)
        expect(()=>{
            account.deposit(-100)
        }).toThrowError()
    })
})


describe('Test bank account withdrawal', () => {
    it('Test withdraw valid amount', () => {
        let account = new BankAccount(100, 2);
        account.withdraw(50)

        expect(account.getBalance()).toEqual(50)
    });

    it('Test withdraw too largee amount', () => {
        let account = new BankAccount(100, 2);

        expect(() => {
            account.withdraw(200)
        }).toThrowError()
    });

    it('Test withdraw negative amount', () => {
        let account = new BankAccount(100, 2);

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