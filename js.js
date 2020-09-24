"use strict";

(function () {
  const form = document.getElementById("form-calc");
  const amount = document.querySelector("#amount .value");
  const select = document.querySelector("#select .value");
  const selTxt = document.querySelector("#select .value-txt");
  const person = document.querySelector("#person .value");
  const perTxt = document.querySelector("#person .value-txt");
  const resultTip = document.querySelector("#tip .result");
  const resultTotal = document.querySelector("#total .result");
  const amountPer = document.querySelector("#amount-person .result");
  const tipPer = document.querySelector("#tip-per .result");

  function numCheck() {
    const typeNum = Number(amount.value);
    if (amount.value === "" || select.value === "0" || person.value === "0") {
      alert("Amount / Select Tip / Split을 설정해주세요.");
    } else if (!typeNum) {
      alert("Amount는 숫자만 가능합니다.");
    } else {
      calculate();
    }
  }

  function calculate() {
    console.log(typeof person.value);
    const tipValue = amount.value * (select.value / 100);
    const numAmount = Number(amount.value);
    resultTip.textContent = `₩ ${tipValue}`;
    resultTotal.textContent = `₩ ${numAmount + tipValue}`;
    amountPer.textContent = `₩ ${numAmount / person.value}`;
    tipPer.textContent = `₩ ${tipValue / person.value}`;
  }

  function submitCalc(e) {
    e.preventDefault();
    numCheck();
  }

  function pushValueText() {
    selTxt.textContent = this.value;
    console.log(this.value);
  }

  form.addEventListener("submit", submitCalc);
  select.addEventListener("change", function () {
    selTxt.textContent = select.value;
  });
  person.addEventListener("change", function () {
    perTxt.textContent = person.value;
  });
})();
