import expect from 'expect';

const a = 24;
const b = 3453;
const c = 0;

describe('numbertests', () =>{
 it('number should give correct binary number', () =>{

    expect(a.toString(2)).toBe('11000');

  });

 it('number should give correct octal number', () =>{
     expect(a.toString(8)).toBe('30');

  });
 it('number should give correct hexadecimal number', () =>{
    expect(b.toString(16)).toBe('d7d');

   });

 it('should give back binary 0', () =>{
   expect(c.toString(2)).toBe('0');
 });
});

describe('inputchange function', ()=>{
  it('should give back correct state', ()=>{
    expect({number: parseInt(30, 8)}).toEqual({number: 24});
  });
  it('should give back from hexadcimal', ()=>{
    expect({number: parseInt('D7D', 16)}).toEqual({number: 3453});
  });
});
