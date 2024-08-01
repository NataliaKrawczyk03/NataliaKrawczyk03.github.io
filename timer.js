function ref()
		{
			var date = new Date();

		var h = date.getHours();
		if(h<10) h = "0" + h
		var m = date.getMinutes();
		if(m<10) m = "0" + m
		var s = date.getSeconds();
		if(s<10) s = "0" + s

		var d = date.getDay()
        if(d<10) d = "0" + d
		var mo = date.getMonth() + 1
        if(mo<10) mo = "0" + mo
		var y = date.getFullYear()

		document.getElementById("time").innerHTML = h + ':' + m + ":" + s	
        document.getElementById("date").innerHTML = d + '/' + mo + "/" + y	
	
		setTimeout("ref()",1000);
        }