describe('toPingPong', function() {
  it('it will return a number as a string if input is not divisble by 3 or 5', function() {
    expect(toPingPong(4)).to.equal('4');
  });
  it('it will return the string "ping" if input is divisble by 3', function() {
    expect(toPingPong(6)).to.equal('ping');
  });
  // it('it will return a number as a string if its not divisble b 3 or 5', function() {
  //   expect(toPingPong(4)).to.equal('4');
  // });
});
