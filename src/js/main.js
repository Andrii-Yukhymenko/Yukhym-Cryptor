let inputText,
  inputArea = document.querySelector(".input-text"),
  inputForm = document.querySelector(".form"),
  key = "",
  encrypted,
  decrypted,
  resultArea = document.querySelector(".result");

inputForm.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.classList.contains("enc-btn")) {
    inputText = inputArea.value;
    key = document.querySelector(".key").value;
    // console.log(encKey);
    // console.log(encryptedInputText);
    encrypted = CryptoJS.AES.encrypt(inputText, key);
    encrypted = encrypted.toString();
    // console.log(encrypted);
    resultArea.textContent = encrypted;
  };

  if (event.target.classList.contains("dec-btn")) {
    inputText = inputArea.value;
    key = document.querySelector(".key").value;
    // console.log(decKey);
    // console.log(decryptedInputText);
    decrypted = CryptoJS.AES.decrypt(inputText, key);
    decrypted = decrypted.toString(CryptoJS.enc.Utf8);
    // console.log(decrypted);
    resultArea.textContent = decrypted;
  };
});

// decryptedInputForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   decryptedInputText = decryptedInputArea.value;
//   decKey = document.querySelector(".dec-key").value;
//   // console.log(decKey);
//   // console.log(decryptedInputText);
//   decrypted = CryptoJS.AES.decrypt(decryptedInputText, decKey);
//   decrypted = decrypted.toString(CryptoJS.enc.Utf8);
//   // console.log(decrypted);
//   decResult.textContent = decrypted;
// });
