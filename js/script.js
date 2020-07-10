function	age(birthday)
{
	today = new Date();
	age = today.getFullYear() - birthday.getFullYear();
	if (today.getMonth() - birthday.getMonth() < 0 ||
(!(today.getMonth() - birthday.getMonth()) && (today.getDate() - birthday.getDate() < 0)))
		age--;
	return (age);
}

document.addEventListener("DOMContentLoaded", function(event) { 
	document.getElementById('age').innerHTML = age(new Date(1997, 05, 21));
});
