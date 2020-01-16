// Hello.js
export default {
	create: () => {
		console.log("Hello");
		var hello = document.createElement('div');
		hello.textContent = "Hi there and hello!";
		return hello;
	}
}