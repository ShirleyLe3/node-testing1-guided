const Car = require("./car.js")

//TDD - Test driven development
//1 - Create the test, make sure it fails
//2 - Get it passing with the least
//amount of code
//3 - Refactor it - make it pretty/easy to read


it("works",()=>{
    expect(3).toBeGreaterThan(2)    //eslint-disable-line
})

test("toEqual and toBe", ()=>{
    let a = {}
    let b = {}
    let c = a
    //expect(a).toBe(b)
    //expect(a).toEqual(b)
    expect(a).toBe(c)
})

describe("car class",()=>{
    let odyssey
    beforeEach(()=>{
        odyssey = new Car("honda","odyssey")
    })
    it("exists", ()=>{
        expect(Car).toBeDefined()
    })
    it("creates car instances",()=>{        
        expect(odyssey).toBeInstanceOf(Car)
    })
    it("cars have a make prop",()=>{
        expect(odyssey).toHaveProperty("make")
        //expect(odyssey).toEqual({make:"honda"})
    })
    it("cars have a model prop",()=>{
        expect(odyssey).toHaveProperty("model")
    })
    it("has odo prop starting at 0",()=>{
        expect(odyssey).toHaveProperty("odometer",0)
    })
    it("cars have a drive method", ()=>{
        //expect(odyssey.drive).toEqual(Car.prototype.drive)
        expect(odyssey.drive).toBeInstanceOf(Function)
    })
    //it.only runs only that test
    it("drive method returns drive distance",()=>{
        const expected = 10 //arrange
        const actual = odyssey.drive(10) //act
        expect(actual).toBe(expected) //assert
    })
    it("drive method increases odo",()=>{
        //expect(odyssey.odometer).toBe(0)
        odyssey.drive(10)
        expect(odyssey.odometer).toBe(10)
        odyssey.drive(10)
        expect(odyssey.odometer).toBe(20)
    })
    it("driveAsync resolves distance",async ()=>{
        // const distance = await odyssey.driveAsync(10)
        // expect(distance).toBe(10)

        odyssey.driveAsync(10).then(distance =>{
            expect(distance).toBe(10)
        })
    })
})

