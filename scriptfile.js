var number1, number2, sign;
function callNum(num)
{
	document.getElementById("dis").innerHTML= num;
	switch(num)
	{
		case "+": sign=1; break;
		case "-": sign=2; break;
		case "*": sign=3; break;
		case "/": sign=4;
	}
	if(number1==undefined)
		number1=num;
	else
		number2=num;
}
function calculate()
{
	if(sign==1)
		document.getElementById("dis").innerHTML = Number(number1)+Number(number2);
	else if(sign==2)
		document.getElementById("dis").innerHTML = Number(number1)-Number(number2);
	else if(sign==3)
		document.getElementById("dis").innerHTML = Number(number1)*Number(number2);
	else
		document.getElementById("dis").innerHTML = Number(number1)/Number(number2);
	number1= undefined;
	number2= undefined;
}