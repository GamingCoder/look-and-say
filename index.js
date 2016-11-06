module.exports = function(seed, iterations) {
	iterations = iterations || 1;
	r = [seed.toString()];

	function reduceNumber(prev,cur){
		if(!prev[0]) prev[0] = [cur,1];
		else if (prev[prev.length-1][0] === cur) prev[prev.length-1][1]++;
		else prev[prev.length] = [cur,1];
		return prev;
	}

	for(var i=1; i<=iterations; i++){
		r[i] = r[i-1]
			.split('')
			.reduce(reduceNumber, [])
			.map(function(e){
				return e[1]+e[0];
			})
			.join('');
	}

	return r;
};
