const calc = require('./calculator')


test('check all functions for 2,3',()=>{
    expect(calc['sum'](2,3)).toBe(5)
    expect(calc['subtract'](2,3)).toBe(-1)
    expect(calc['divide'](2,3)).toBe(0)
    expect(calc['multiply'](2,3)).toBe(6)

})