let arr = [1,2,4,591,392,391,2,5,10,2,1,1,'1',20,20];

let Q1 = function(arr) {
	arr.sort((a,b) => a - b);
	let count = 1;
	let resArr = [];
	for(var n=1 ; n < arr.length; ++n){
		if(arr[n] === arr[n-1]){
			count ++;
		}
		else{
			if(count > 1){
				resArr.push(Array(count).fill(arr[n-1]));
			}
			else{
				resArr.push(arr[n-1]);
			}
			count = 1;
		}
	}

	if(arr[arr.length - 1] === arr[arr.length - 2]){
		resArr[resArr.length -1].push(arr[arr.length - 1]);
	}
	else{
		resArr.push(arr[arr.length - 1]);
	}

	return resArr;
}

Q1(arr);


// BERNOULI RANDOM VARIABLES //

function generator(n) {
	let arr = [];
	for(i of Array(n)){
	    arr.push(Math.floor(Math.random() * 6) + 1);
	}
	let sum = arr.reduce((acc,t) => acc + t);
	console.log(`sum: ${sum}. Avg: ${sum / n}` )
}
