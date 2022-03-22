const unroll = require("./unroll");

describe("#unroll", function () {
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  it("tests a square array", function() {
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10])
  })

});
