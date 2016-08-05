//removes all the repetitions in one array
	function noRep(arr){
		var result=[];
		for(var i=0;i<arr.length;i++){
			if(result.indexOf(arr[i])===-1){
				result.push(arr[i]);
			}
		}
		return result;
	}

//intersection of two arrays
	function inter(arr1,arr2){
		var result=[];
		for(var i=0;i<arr1.length;i++){
			for(var j=0;j<arr2.length;j++){
				if(arr1[i]===arr2[j]){
					result.push(arr1[i]);
				}
			}
		}

		return noRep(result);
	}

//sym of two arrays
function symTwo(arr1,arr2){
	var args=[];
	args.push(arr1,arr2);
	var result=[];
	//union of all the arrays with no repetition
	var union=noRep(args.reduce(function(a,b){return a.concat(b);}));
	//intersection of all the arrays
	var inters=args.reduce(function(a,b){
			return inter(a,b);
	});
	result=union.filter(function(elu){return inters.indexOf(elu)===-1;});
	return result;
}

//sym of multiple arrays
function sym(arr){
  var args=Array.prototype.slice.call(arguments);
  return args.reduce(function(a,b){return symTwo(a,b);});
}

sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
