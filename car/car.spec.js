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
    })
})

