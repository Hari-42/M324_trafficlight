describe('Traffic Light Tests', () => {
    test('basic math test', () => {
        expect(1 + 1).toBe(2);
    });

    test('traffic light state test', () => {
        const states = ['red', 'yellow', 'green'];
        expect(states).toContain('red');
        expect(states).toHaveLength(3);
    });
});