const cip = require('./caeserCpher')

test('check for abc',()=>{

    expect(cip('abc')).toBe('bcd')
})

test('check for punctuations',()=>{

    expect(cip('abc#')).toBe('bcd#')
})

test('check for integers',()=>{

    expect(cip('abc12')).toBe('bcd12')
})

test('check for integers 2',()=>{

    expect(cip(21)).toBe('not string')
})