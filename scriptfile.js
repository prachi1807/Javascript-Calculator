var a='';
var b='';
var ans='';
var num = [];
function callNum(digit)
{
	num.push(digit);

	if(num.length != 1)
	{
		a='';
		document.getElementById('dis').innerHTML = a;	// clearing the screen.
	}

	for(i=0; i<num.length; i++)
	{
		a=a+num[i];	// concatenate the elements of the array "num" into a single string, which will be displayed on the screen
	}

	document.getElementById('dis').innerHTML = a;	
}

function calculate()
{
	document.getElementById('dis').innerHTML = '';

	// for(i=0; i<num.length ; i++)
	// {
	// 	b += num[i];						// concatenating the array "num" into a single string
	// }

	ans = eval(a);	

	document.getElementById('dis').innerHTML = ans;		// result display

	while(num.length > 0)
	{
    	num.pop();				// emptying the array "num"
	}

	num.push(ans.toString());

}

function clrscr(){
	document.getElementById('dis').innerHTML = '';
	
	while(num.length > 0){
    	num.pop();				// emptying the array "num"
	}

	a ='';	
	b ='';
}
