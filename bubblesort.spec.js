describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles array of length 1', function(){
    expect(bubbleSort([1]) ).toEqual( [1] );
  });
  it('handles multiple', function(){
    expect(bubbleSort([1,2,3]) ).toEqual( [1,2,3]);
  });
});

