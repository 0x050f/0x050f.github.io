function	age(birthday)
{
	today = new Date();
	age = today.getFullYear() - birthday.getFullYear();
	if (today.getMonth() - birthday.getMonth() < 0 ||
(!(today.getMonth() - birthday.getMonth()) && (today.getDate() - birthday.getDate() < 0)))
		age--;
	return (age);
}

function	scrolling(pixel)
{
	window.scroll(0, pixel);
}

function	display(elem)
{
	elem.style.display = 'block';
}

window.onbeforeunload = function ()
{
	window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", function(event)
{ 
	document.getElementById('age').innerHTML = age(new Date(1997, 05, 21));

	document.getElementById('login').addEventListener("click", function()
	{
		i = 0;
		slow = 1;
		while (i < window.innerHeight)
		{
			slow += 0.1;
			if (i > window.innerHeight * (3 / 4))
				slow += 0.000001 * i;
			else if (i < window.innerHeight * (1 / 4))
				slow -= 0.000001 * (window.innerHeight - i);	
			setTimeout(scrolling, (0.01 * slow) * i, i);
			i++;
		}
		inputs = document.getElementsByClassName("input");
		outputs = document.getElementsByClassName("output");
		i = 0;
		while (i < inputs.length)
		{		
			slow += 10;
			setTimeout(display, (0.01 * slow) * window.innerHeight, inputs[i]);
			setTimeout(display, ((0.01 * slow) * window.innerHeight) + 1, outputs[i]);
			i++;
		}
	});
});


