var generator = require('../generators');

describe('generators', () => {
  it('should returns the expected Out', function() {
    const expectedOut = ['This', 'is', 'a', 'generator', 'sample'];

    for (val of expectedOut) {
      expect(generator.next().value).toBe(val);
    }
  });
});
