//your JS code here. If required.
let URL =" https://jsonplaceholder.typicode.com/todos/1";
async function getData() {
	let data = await fetch(URL);
	let result = await data.json();
	console.log(data); 
	
}
getData();

