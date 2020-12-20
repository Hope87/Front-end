export default class Download {
  constructor(triggersSelector) {
    this.btns = document.querySelectorAll(triggersSelector);
    this.path = "assets/img/mainbg.jpg";
  }

  downLoadItem(path) {
    const element = document.createElement("a");

    element.setAttribute("href", path);
    element.setAttribute("download", "nice__picture");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  init() {
    this.btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        this.downLoadItem(this.path);
      });
    });
  }
}
