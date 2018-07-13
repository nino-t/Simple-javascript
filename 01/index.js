function fivaa(a) {	
	var output = "";
    for (var i = a-1; i >= 0; i--) {
		output += i;
		output += i;
		var res = "";
        for (var j = i+2; j >= 0; j--) {        	
        	for (var x = j; x >= i-3; x--) {
        		res+=j;
        	}
        }
    	output+=res.substring(0, i+1);
    	res="";
        output += "\n";
    }

    return output;
}

console.log(fivaa(5))