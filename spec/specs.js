describe('toPingPong', function() {
  it('it will return a number as a string if input is not divisble by 3 or 5', function() {
    expect(toPingPong(4)).to.equal('4');
  });
  it('it will return the string "ping" if input is divisble by 3', function() {
    expect(toPingPong(6)).to.equal('ping');
  });
  it('it will return the string "pong" if input is divisble by 5', function() {
    expect(toPingPong(5)).to.equal('pong');
  });
  it('it will return the string "pingpong" if input is divisble by both 3 and 5', function() {
    expect(toPingPong(15)).to.equal('pingpong');
  });
});
