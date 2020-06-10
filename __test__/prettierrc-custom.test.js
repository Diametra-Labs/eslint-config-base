const prettierConfig = require('../.prettierrc.js');

describe('The prettierrc custom file should not change', () => {
    test('It should response with custom configuration', () => {
        expect(prettierConfig).toMatchSnapshot();
    });
});
