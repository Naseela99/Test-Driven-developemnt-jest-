const ana = require('./analyzeArray')



test('for integer array',()=>{
    expect(ana([1,2,3,4])).toEqual(
        {
            average: 2.5,
  min: 1,
  max: 4,
  length: 4
        }
    )
})

test('for integer array',()=>{
    expect(ana([1,2,'say',4])).toBe('Not Integer Array'
    )
})

test('for a number',()=>{
    expect(ana(123)).toBe('Not an Array'
    )
})