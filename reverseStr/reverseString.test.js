const rev = require('./reverseString')


test("check reverse for 'tweet'",()=>
{
    expect(rev('tweet')).toBe('teewt')
})