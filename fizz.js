var numeros = 100;

for(var i = 1; i <= numeros; i++)
{
  if(esDivisible(i,3))
  {
    console.log("Fizz");
  }
  if(esDivisible(i,5))
  {
    console.log("Buzz");
  }
  if(!esDivisible(i,3) && !esDivisible(i,5))
  {
    console.log(i);
  }
  console.log("\n");
}

function esDivisible(num, divisor)
{
  if(num % divisor == 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}
