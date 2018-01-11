describe('Bubble Sort', function(){
  beforeEach(function() {
    spyOn(window, 'swap').and.callThrough();
    spyOn(window, 'compare').and.callThrough();
  });
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles an array', function() {
    expect( bubbleSort([9, 8, 4, 6, 3, 5]) ).toEqual( [3, 4, 5, 6, 8, 9] );
  });
  it('handles an ordered array', function() {
    expect( bubbleSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(swap.calls.count()).toEqual(0);
    expect(compare.calls.count()).toEqual(3);
  });
  it('handles a reverse sorted list', function() {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(compare.calls.count()).toEqual(20);
    expect(swap.calls.count()).toEqual(10);
  });
});
