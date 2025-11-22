import an from "./anzii.js";
const Anzii = an;
export const anzii = function (modules = null) {
	modules ? Anzii.Activate([modules]) : Anzii.Activate();
};
