describe('The FruitEater function ', function(){
    it('should count how many apples have been eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('apple');
        assert.equal(2,appleAndPearEater.applesEaten());
    });
    
    it('should count how many apples and pears have been eaten', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        appleAndPearEater.eat('pear');
        appleAndPearEater.eat('apple');
        assert.equal(3,appleAndPearEater.applesEaten());
        assert.equal(2,appleAndPearEater.pearsEaten());
    });

     it('should return error message when anything other than apple or pear is in the input', function(){
        var appleAndPearEater = FruitEater();
        appleAndPearEater.eat("");
        
        assert.equal("not valid fruit",appleAndPearEater.notValidFruit());
       
    });
})