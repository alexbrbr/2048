import { moveLineToLeft, moveLineToRight } from './gameFunctions.js';

describe('move line to left', () => {
  it('line empty, should change nothing', () => {
    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual(line);
  });

  it('line with one value on the left, should change nothing', () => {

    const line = [{
        x: 0,
        y: 0,
        value: 4
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual(line);
  });

  it('line with another value on the left, should change nothing', () => {

    const line = [{
        x: 0,
        y: 0,
        value: 1024
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual(line);
  });

  it('line with another value on the right, should change position', () => {

    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: 1024
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 1024
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });

  it('line with another value in the middle, should change position', () => {

    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: 1024
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 1024
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });

  it('line has 2 equal values, should merge them', () => {

    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: 16
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 32
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });

  it('line has 2 different values, should stack them on the left', () => {

    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: 2
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 16
      },
      {
        x: 1,
        y: 0,
        value: 2
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });

  it('line has 2 different values already on left, should do nothing', () => {

    const line = [{
        x: 0,
        y: 0,
        value: 2
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 2
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });

  it('line has 3 different values already on left, should do nothing', () => {

    const line = [{
        x: 0,
        y: 0,
        value: 2
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: 8
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToLeft(line)).toEqual([{
        x: 0,
        y: 0,
        value: 2
      },
      {
        x: 1,
        y: 0,
        value: 16
      },
      {
        x: 2,
        y: 0,
        value: 8
      },
      {
        x: 3,
        y: 0,
        value: ''
    }]);
  });
});

describe('move line to right', () => {
  it('line empty, should change nothing', () => {
    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToRight(line)).toEqual(line);
  });

  it('line with 1 value, should put it on the right', () => {
    const line = [{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: 2
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: ''
    }];

    expect(moveLineToRight(line)).toEqual([{
        x: 0,
        y: 0,
        value: ''
      },
      {
        x: 1,
        y: 0,
        value: ''
      },
      {
        x: 2,
        y: 0,
        value: ''
      },
      {
        x: 3,
        y: 0,
        value: 2
    }]);
  });
});
