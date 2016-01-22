describe('toPingPong', function() {
  it('it will return a number as a string if its not divisble b 3 or 5', function() {
    expect(toPingPong(4)).to.equal('4');
  });
});
