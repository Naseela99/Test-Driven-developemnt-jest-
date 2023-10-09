const cap = require('./capitalize');


test('capitalize first letter of "apple"',() =>
{
    expect(cap('apple')).toBe('Apple')
});

test('capitalize first letter of "an orange"',() =>
{
    expect(cap('an orange')).toBe('An orange')
});