import an from "./anzii.js";
const Anzii = an;
export const anzii = function (modules = null) {
	//  console.log('THE VALUE OF ACTIVATE')
	//  console.log(Anzii)
	// console.log(Components)
	// console.log('The typeof Components')
	// console.log(Components instanceof Array)
	// console.log('The server Module')
	// console.log(Server)
	// Components.unshift({Server})
	// let html = true
	//    console.log('ANZII OBJECT')
	//    console.log(Anzii)
	//    console.log(Anzii.Activate)
	modules ? Anzii.Activate([modules]) : Anzii.Activate();
};
