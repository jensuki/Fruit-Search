const input = document.querySelector('#fruit');
const suggestionsList = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	return fruit.filter(eachFruit => eachFruit.toLowerCase().includes(str.toLowerCase()));

}

function searchHandler(e) {
	const userInput = e.target.value;
	const filteredList = search(userInput);
	showSuggestions(filteredList, userInput)
}

function showSuggestions(list, currentInputVal) {

	suggestionsList.innerHTML = "";
	if (currentInputVal === "") return;

	list.forEach(listItem => {
		const li = document.createElement('li');
		const index = listItem.toLowerCase().indexOf(currentInputVal.toLowerCase());
		if (index != -1) {
			li.innerHTML = listItem.substring(0, index) +
				'<strong>' +
				listItem.substring(index, index + currentInputVal.length) +
				'</strong>' +
				listItem.substring(index + currentInputVal.length);
		}
		suggestionsList.appendChild(li);
	})

}

function useSuggestion(e) {
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
	}
	suggestionsList.textContent = ''
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestionsList.addEventListener('click', useSuggestion);