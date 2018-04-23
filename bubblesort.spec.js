describe('Bubble Sort', function(){
  // beforeAll(function(){

  // });

  let testArr = [1, 3, 4, 2];
  let testSorted = [1, 2, 3, 4];
  let test2 = [1,10,9,8,2,7,6,5,4,3];
  let test2Sorted = [1,2,3,4,5,6,7,8,9,10];
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
  it('properly sorts our 2nd test array', function(){
    expect(bubbleSort(test2) ).toEqual(test2Sorted);
  });

  // it('uses bubble sort the expected number of times', function(){
  //   spyOn(window, 'swap').and.callThrough();
  //   bubbleSort(testArr);
  //   //expect(bubbleSort(testArr)).toEqual(testSorted);
  //   expect(bubbleSort.swap.calls.count()).toEqual(1)
  // })
});

