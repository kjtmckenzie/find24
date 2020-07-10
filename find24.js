function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * Math.floor(max-min)+min);
}

nums = ['2', '3', '3', '4'];
operators = ['+', '-', '/', '**'];
parenthesis = ['(', ')']

while(1){
	eq_nums = nums.slice();
	shuffle(eq_nums);
	var eq = [];
	var prev_char = "z";
	
	while (eq_nums.length > 0) {
		char_to_insert = getRandomInt(0,3);
		if (char_to_insert == 0) {
			if (isNaN(prev_char)) {
				num_to_insert = eq_nums.pop();
				prev_char = num_to_insert;
				eq.push(num_to_insert);
			}
		} else if (char_to_insert == 1) {
			if (!isNaN(prev_char) || prev_char == ")") {
				op_to_insert = operators[getRandomInt(0,operators.length)];
				prev_char = op_to_insert;
				eq.push(op_to_insert);
			}
		} else {
			paren_to_insert = parenthesis[getRandomInt(0,parenthesis.length)]
			if (paren_to_insert == "(" || prev_char != "(") {
				eq.push(paren_to_insert);
				prev_char = paren_to_insert;
			}
			
		}
	}
	
	equation=eq.join('');
	
	num_open_parens = (equation.match(new RegExp("\\(", "g")) || []).length;
	num_closed_parens = (equation.match(new RegExp("\\)", "g")) || []).length;
	
	if (num_open_parens > num_closed_parens) {
		for (i = 0; i < (num_open_parens - num_closed_parens); i++)
			equation += ")"
	}
	try {
		val=eval(equation);
		//console.log(equation + "=" + val);
		if (val > 23.5 && val < 24.5) 
			console.log(equation + "=" + val);
	} catch (error) {
	
	}

	
}


