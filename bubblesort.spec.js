describe('Bubble Sort', function(){
  // beforeAll(function(){

  // });

  let testArr = [1, 3, 4, 2];
  let testSorted = [1, 2, 3, 4];
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles array of length 1', function(){
    expect(bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles multiple', function(){
    expect(bubbleSort([1,2,3]) ).toEqual( [1,2,3]);
  });
  it('properly sorts our test array', function(){
    expect(bubbleSort(testArr) ).toEqual(testSorted);
  });

  it('uses bubble sort the expected number of times', function(){
    spyOn(window, 'swap').and.callThrough();
    bubbleSort(testArr);
    //expect(bubbleSort(testArr)).toEqual(testSorted);
    expect(bubbleSort.swap.calls.count()).toEqual(1)
  })
});

