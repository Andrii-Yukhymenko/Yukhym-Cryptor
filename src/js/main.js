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
    // console.log(encKey);
    // console.log(encryptedInputText);
    encrypted = CryptoJS.AES.encrypt(inputText, key);
    encrypted = encrypted.toString();
    // console.log(encrypted);
    resultArea.textContent = encrypted;
  }

  if (event.target.classList.contains("dec-btn")) {
    inputText = inputArea.value;
    key = document.querySelector(".key__input").value;
    // console.log(decKey);
    // console.log(decryptedInputText);
    decrypted = CryptoJS.AES.decrypt(inputText, key);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    // console.log(decrypted);
    resultArea.textContent = decrypted;
  }
});

let copyBtn = document.querySelector(".copy");
copyBtn.addEventListener("click", () => {
  resultArea.select();
  document.execCommand("copy");
});
