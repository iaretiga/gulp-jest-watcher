jest.dontMock('../lipsum');

describe('lipsum', function() {
    it('adds 1 + 2 to equal Lorem 1 ipsum 2...', function() {
        var lipsum = require('../lipsum');
        expect(lipsum(1, 2)).toBe('Lorem 1 ipsum 2...');
    });
});