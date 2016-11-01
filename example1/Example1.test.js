import {add, getStringLength} from './Example1'

it('Add', () => {
    expect(add(1,2)).toEqual(3)
})

it ('get string length', ()=> {
    expect(getStringLength('abc')).toEqual(3)
})
