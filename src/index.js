let domtoimage = require("dom-to-image");
let FileSaver = require("file-saver");

function getFormatDate() {
	var date = new Date();
	var strMonth = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
	var strDay = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
	var strHours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	var strMinutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	var strSeconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	var currentdate = date.getFullYear() + "-" + strMonth + "-" + strDay + "_" + strHours + "-" + strMinutes + "-" + strSeconds;
	return currentdate;
}

window.onload = () => {
	document.getElementById("btn-save").onclick = async () => {
		FileSaver.saveAs(
			await domtoimage.toBlob(document.querySelector(".cover")),
			"cover-" + getFormatDate() + ".png");
	};
	[".text1", ".text2"].forEach((selector) => {
		document.querySelectorAll(selector).forEach((element) => {
			element.onclick = () => {
				document.querySelector(selector).textContent = element.textContent = window.prompt("改变文本内容", element.textContent);
			}
		});
	});
};
