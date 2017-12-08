var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  // it('it has a sample test', function(){
  //   assert.equal(true, true)
  // })

  it('should update the running total when a number is clicked', function(){
    calculator.numberClick(5);
    calculator.numberClick(4)
    assert.equal(calculator.runningTotal, 54);
  })

  it('should reset the running total to 0 when clear is clicked', function(){
    calculator.numberClick(7);
    calculator.clearClick();
    assert.equal(calculator.runningTotal, 0);
  })

  it('should update the previous operator when a new operator is clicked', function(){
    calculator.operatorClick('*');
    calculator.operatorClick('+');
    assert.equal(calculator.previousOperator, '+');
  })

  it('should add 2 numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 8);
  })

  it('should subtract 2 numbers', function(){
    calculator.numberClick(9);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 4);
  })

  it('should divide 2 numbers', function(){
    calculator.numberClick(3);
    calculator.numberClick(0);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 6);
  })

  it('should multiply 2 numbers', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 14);
  })

  it('should remember the previous total', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(calculator.previousTotal, 14);
  })

  it('should chain operations together', function(){
    calculator.numberClick(2);
    calculator.operatorClick('*');
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 10);
  })

});
