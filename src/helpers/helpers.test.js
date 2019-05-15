const Helpers = require ('./helpers')


jest.mock('uuid', ()=>{
    return ()=>{
        '1234'
    }
})

// describe('helpers', ()=>{
//     it('should create a person', () => {
//         const expected ={id:'1234', name:'Frodo Baggins'}
//     })
// })
// const actual=Helpers.makePerson('Frodo', 'Baggins')
// expect(actual).toEqual(expected)
describe('helpers', ()=>{
    it('should invoke the callback', ()=>{
       const spy =jest.fn();
       Helpers.forEvenOnly(2,spy);
       Helpers.forEvenOnly(4,spy);
       console.log(spy.mock)

       expect(spy).toHaveBeenCalledTimes(2)
       expect(spy).toHaveBeenCalledWith(2)


    })
})