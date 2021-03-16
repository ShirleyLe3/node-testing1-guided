// Test away!
// ```it('works', () => {

//    // ASSERTIONS
//     expect(3).toBe(3)
//     expect(3).not.toBe(4)
//     expect(3).toBeGreaterThan(3)
// })

// it('is not the same toEqual and toBe', () => {
//         let a = {}
//         let b = {}
//         let c = {}

//         expect(a).toBe(b)       // fail   same shae does not work with composite structures
//         expect(a).toEqual(b)    // pass
//     })```



describe('Car class', () => {   
    // ## TEST 3-----------------------------part of it
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })    

    // ## TEST 1----------------------------
    //  1)   writing failed tests
    it('exists', () => {
        expect(Car).toBeDefined()
    })
    //  2)    minimum code pass test
    const Car = require('./car')     

    //  3)    build/refactor in code.  (reformmat. clean code)
    //          test detects errors in code


    // ## TEST 2------------------------------------
    it('creates instance of cars', () => {
        const prius = new Car('toyota', 'prius')
        expect(prius).toBeInstanceOf(Car)           
    })                                  //  2)   modules.exports = class Car {    }

    // ## TEST 3-----------------------------
    it('can have a "make" prop', () => {
        expect(prius).toHaveProperty('make', 'toyota')
        expect(prius.make).toBe('toyota')           
    })                                  //  2)   modules.exports = class Car {constructor(make) {this.make = make}   }

    it('creates instances of cars', () => {
        expect(prius).toBeInstanceOf(Car)        
    })     

    it('cars have a "make" prop', () => {
        expect(prius).toHaveProperty('make', 'toyota')
        expect(prius.make).toBe('toyota')           
    })                     

    it('cars have a "model" prop', () => {
        expect(prius).toHaveProperty('model', 'prius')        
    })   

    it('has odometer prop starting at zero', () => {
        expect(prius).toHaveProperty('odometer', 0)          
    })   


    it('has a drive method in car instances', () => {
        expect(prius.drive).toBeInstanceOf(Function)
        expect(prius.drive).toBe(Car.prototype.drive)
    })

    it('drive method returns the driven distance', () => {
                // arrange
        const expected = `${10} km driven!`
                // act
        const actual = prius.drive(10)
                // assert
        expect(actual).toBe(expected)           
    })                     

    it('drive method increases odometer by driven distance', () => {
                // arrange
        expect(prius.odometer).toBe(0)
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(10)
        expect(prius.odometer).toBe(20)
    })    
                // act
    it('driveAsync method RESOLVES to the driven distance', async () => {
        const distance = await prius.driveAsync(10)
                // assert
        expect(distance).toBe(10)           
    })   

    it('driveAsync method RESOLVES to the driven distance', () => {
        prius.driveAsync(10).then(distance => {
            expect(distance).toBe(10)           
    })                     

})})
