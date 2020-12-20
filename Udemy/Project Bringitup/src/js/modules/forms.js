export default class Form {
  constructor(forms, url) {
    this.forms = document.querySelectorAll(forms);
    this.inputs = document.querySelectorAll("input");
    this.message = {
      loading: "Загрузка...",
      success: "Спасибо! С вами скоро свяжутся",
      failure: "Что-то пошло не так",
    };
    this.path = url;
  }

  clearInputs() {
    this.inputs.forEach((input) => {
      input.value = "";
    });
  }

  checkMailInputs() {
    const mailInputs = document.querySelectorAll('[type="email"]');

    mailInputs.forEach((input) => {
      input.addEventListener("keypress", (e) => {
        if (e.key.match(/[^a-z 0-9 @ \.]/gi)) {
          e.preventDefault();
        }
      });
    });
  }

  async postData(url, data) {
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  }

  initMask() {
    const setCursorposition = (pos, elem) => {
      elem.focus();

      if (elem.setSelectionRange) {
        elem.setSelectionRange(pos, pos);
      } else if (elem.createTextRange) {
        let range = elem.createTextRange();

        range.collapse(true);
        range.moveEnd("character", pos);
        range.moveStart("character", pos);
        range.select();
      }
    };

    function creatMask(e) {
      let matrix = "+1 (___) ___-____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

      if (def.length >= val.length) {
        val = def;
      }

      this.value = matrix.replace(/./g, function (a) {
        return /[_\d]/.test(a) && i < val.length
          ? val.charAt(i++)
          : i >= val.length
          ? ""
          : a;
      });

      if (e.type === "blur") {
        if (this.value.length === 2) {
          this.value = "";
        }
      } else {
        setCursorposition(this.value.length, this);
      }
    }

    const inputs = document.querySelectorAll('[name="phone"]');

    inputs.forEach((input) => {
      input.addEventListener("input", creatMask);
      input.addEventListener("focus", creatMask);
      input.addEventListener("blur", creatMask);
    });
  }

  init() {
    this.checkMailInputs();
    this.initMask();

    this.forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        let statusMessage = document.createElement("div");
        statusMessage.style.cssText = `
           margin-top: 15px;
           font-size: 18px;
           color: grey;
        `;
        form.parentNode.appendChild(statusMessage);

        statusMessage.textContent = this.message.loading;

        const formData = new FormData(form);

        this.postData(this.path, formData)
          .then((res) => {
            console.log(res);
            statusMessage.textContent = this.message.success;
          })
          .catch(() => {
            statusMessage.textContent = this.message.failure;
          })
          .finally(() => {
            this.clearInputs();

            setTimeout(() => {
              statusMessage.remove();
            }, 5000);
          });
      });
    });
  }
}
