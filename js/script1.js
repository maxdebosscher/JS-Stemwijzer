// Page content variables
var progBar = document.getElementById("myBar");

var title = document.getElementById('title');
var statement = document.getElementById('statement');

var proBtn = document.getElementById('proBtn');
var ambivalentBtn = document.getElementById('ambivalentBtn');
var contraBtn = document.getElementById('contraBtn');

var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');

var match = document.getElementById('match');

// Styling
var btnStyleDefault = 'w3-button w3-black w3-hover-cyan';
var btnStyleActive = 'w3-button w3-cyan';

// Logic variables
var statements = [];
var storedStatements = JSON.parse(sessionStorage.getItem('statements'));
var statementIndex = 0;

/**
 * Performs tasks on page load
 */
window.onload = function() {
	showPageContents();
};

/**
 * Show data on page
 */
function showPageContents() {

	// Statements data
	var y = statementIndex + 1;
	var w = 100 / subjects.length;

	if (window.location.href.indexOf('statement') > -1) {
		progBar.style.width = y * w + '%';
		title.innerHTML = y + '. ' + subjects[statementIndex].title;
		statement.innerHTML = subjects[statementIndex].statement;

		if (storedStatements[statementIndex] == 'pro') {
			proBtn.className = btnStyleActive;
			ambivalentBtn.className = btnStyleDefault;
			contraBtn.className = btnStyleDefault;
		} else if (storedStatements[statementIndex] == 'ambivalent') {
			proBtn.className = btnStyleDefault;
			ambivalentBtn.className = btnStyleActive;
			contraBtn.className = btnStyleDefault;
		} else if (storedStatements[statementIndex] == 'contra') {
			proBtn.className = btnStyleDefault;
			ambivalentBtn.className = btnStyleDefault;
			contraBtn.className = btnStyleActive;
		} else {
			proBtn.className = btnStyleDefault;
			ambivalentBtn.className = btnStyleDefault;
			contraBtn.className = btnStyleDefault;
		}
	}

	// Important subjects data
	if (window.location.href.indexOf('important-subjects') > -1) {
		displayImportantSubjects(0, 4);
		displayImportantSubjects(4, 8);
		displayImportantSubjects(8, 12);
	}

	// Result data
	if (window.location.href.indexOf('result') > -1) {
		parties.sort(dynamicSort("name"));
		console.log(parties);

		for (var i = 0; i < parties.length; i++) {
			parties[i].score = 0;
		}

		for (var i = 0; i < subjects.length; i++) {
			subjects[i].parties.sort(dynamicSort("name"));
			console.log(subjects[i].parties);
			var important = findGetParameter('subject' + i);

			for (var j = 0; j < parties.length; j++) {
				if(storedStatements[i] == 'pro') {
					let value = (important == 'on') ? 5 : 1;
					if(subjects[i].parties[j].position == 'pro') {
						parties[j].score += value;
					}
				} else

				if(storedStatements[i] == 'ambivalent') {
					let value = (important == 'on') ? 5 : 1;
					if(subjects[i].parties[j].position == 'ambivalent') {
						parties[j].score += value;
					}
				} else

				if(storedStatements[i] == 'contra') {
					let value = (important == 'on') ? 5 : 1;
					if(subjects[i].parties[j].position == 'contra') {
						parties[j].score += value;
					}
				}
			}
		}

		parties.sort(dynamicSort("-score"));

		match.innerHTML = parties[0].name;

		for (var i = 0; i < parties.length; i++) {
			var num = i + 1;
			col1.innerHTML += num + ': ' + parties[i].name + '<br>';
		}
	}
}

/**
 * Show data of the next statement
 */
function next() {
	if (statementIndex == subjects.length - 1) {
		window.location.href = "important-subjects.php";
	} else {
		statementIndex++;
		showPageContents();
	}
}

/**
 * Show data of the previous statement
 */
function back() {
	if (statementIndex == 0) {
		window.location.href = "index.php";
	} else {
		statementIndex--;
		showPageContents();
	}
}

/** 
 * Pro button function
 */
function pro() {
	if (window.location.href.indexOf('statement') > -1) {
		if (storedStatements == null) {
			statements[statementIndex] = 'pro';
			sessionStorage.setItem('statements', JSON.stringify(statements));
		} else {
			storedStatements[statementIndex] = 'pro';
			sessionStorage.setItem('statements', JSON.stringify(storedStatements));
		}
	}
}

/** 
 * Ambivalent button function
 */
function ambivalent() {
	if (window.location.href.indexOf('statement') > -1) {
		if (storedStatements == null) {
			statements[statementIndex] = 'ambivalent';
			sessionStorage.setItem('statements', JSON.stringify(statements));
		} else {
			storedStatements[statementIndex] = 'ambivalent';
			sessionStorage.setItem('statements', JSON.stringify(storedStatements));
		}
	}
}

/** 
 * Contra button function
 */
function contra() {
	if (window.location.href.indexOf('statement') > -1) {
		if (storedStatements == null) {
			statements[statementIndex] = 'contra';
			sessionStorage.setItem('statements', JSON.stringify(statements));
		} else {
			storedStatements[statementIndex] = 'contra';
			sessionStorage.setItem('statements', JSON.stringify(storedStatements));
		}
	}
}

/**
 * Display opinions list
 */
function toggleOpinions() {
	if (opinions.style.display == 'none') {
		opinionContainer.className += ' w3-container w3-light-gray';
		opinionBtns.className += ' w3-container w3-section';
		opinions.style.display = 'block';
	} else {
		opinionContainer.className -= ' w3-container w3-light-gray';
		opinionBtns.className -= ' w3-container w3-section';
		opinions.style.display = 'none';
	}
}

/**
 * Display opinion explanation
 * @param {int} id 
 */
function toggleExplanation(id) {
	for (var j = 0; j < parties.length; j++) {
		var exp = document.getElementById('exp' + j);

	    if (j == id) {
	    	if (exp.style.display == 'none') {
	    		exp.style.display = 'block';
	    	} else {
	    		exp.style.display = 'none';
	    	}
	    }
	}
}

function displayImportantSubjects(col1Amt, col2Amt) {
	for (var i = col1Amt; i < col2Amt; i++) {
		col1.innerHTML += `<div style="border-bottom: 1px solid black;"><input id="subject ${i} " class="w3-check" type="checkbox" name="subject ${i} "> <label> ${subjects[i].title} </label><p class="w3-tooltip"><i class="far fa-question-circle"></i><span class="w3-text w3-tag tooltip-text"> ${subjects[i].statement} </span></p></div>`;
	}
}



/**
 * Sort arrays
 * @param {array} property 
 */
function dynamicSort(property) {
	var sortOrder = 1;
	if(property.charAt(0) === "-") {
			sortOrder = -1;
			property = property.substr(1);
	}
	return function (a,b) {
			/* next line works with strings and numbers, 
			 * and you may want to customize it to your needs
			 */
			var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
			return result * sortOrder;
	}
}

/**
* Get form data
* @param {*} parameterName 
*/
function findGetParameter(parameterName) {
	var result = null,
			tmp = [];
	location.search
			.substr(1)
			.split("&")
			.forEach(function (item) {
				tmp = item.split("=");
				if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
			});
	return result;
}