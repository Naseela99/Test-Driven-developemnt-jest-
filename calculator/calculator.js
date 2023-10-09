const calculator = 
{
    "sum": function sum(a,b){
        return a+b;
    },
    'subtract': function subtract(a,b){
        return a-b;
    },
    'divide':
        function divide(a,b){
            return Math.floor(a/b);
        },
    'multiply':
    function multiply(a,b){
        return a*b;
    }
    
}

module.exports = calculator