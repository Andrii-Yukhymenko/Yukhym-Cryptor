let inputText,
  inputArea = document.querySelector(".input-text__input"),
  inputForm = document.querySelector(".form"),
  key = "",
  encrypted,
  decrypted,
  resultArea = document.querySelector(".result__area");

inputForm.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("enc-btn")) {
    inputText = inputArea.value;
    key = document.querySelector(".key__input").value;
    encrypted = CryptoJS.AES.encrypt(inputText, key);
    encrypted = encrypted.toString();
    resultArea.textContent = encrypted;
  }
  if (event.target.classList.contains("dec-btn")) {
    inputText = inputArea.value;
    key = document.querySelector(".key__input").value;
    decrypted = CryptoJS.AES.decrypt(inputText, key);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    resultArea.textContent = decrypted;
  }
});

let copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", () => {
  resultArea.select();
  document.execCommand("copy");
});
