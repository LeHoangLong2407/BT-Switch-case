function xuly(){
	var thang = parseInt(document.getElementById('month').value);
	switch (thang){
		case 1:
		case 3:
		case 5:
		case 7:
		case 10:
		case 12:		
			document.getElementById('ketqua').innerHTML= "có 31 ngày";
			break;
		case 2:
			document.getElementById('ketqua').innerHTML='có 28 hoặc 29 ngày';
			break;
		case 4:
		case 6:
		case 9:
		case 11:		
			document.getElementById('ketqua').innerHTML='có 30 ngày';
			break;		
	}

}