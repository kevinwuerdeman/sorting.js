describe('Split Array function', function(){
  // beforeEach(function() {
  //   spyOn(window, 'swap').and.callThrough();
  //   spyOn(window, 'compare').and.callThrough();
  it('is able to split an array into two halves', function(){
    expect(split([1, 2])).toEqual( [[1], [2]]);
  });
  it('is able to split an array into two halves', function(){
    expect(split([1, 2, 3])).toEqual( [[1,2], [3]]);
  });
});

describe('Merge function', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge([1], [2, 9, 8, 2])).toEqual([1, 2, 9, 8, 2]);
  });
});

describe('MergeSort', function(){
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(mergeSort([1, 3, 8, 5, 2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });
});
