"use strict";

var encryptedInputText,
    decryptedInputText,
    encryptedInputArea = document.querySelector(".enc-input-text"),
    encryptedInputForm = document.querySelector(".enc-form"),
    decryptedInputArea = document.querySelector(".dec-input-text"),
    decryptedInputForm = document.querySelector(".dec-form"),
    encKey = "",
    decKey = "",
    encrypted,
    decrypted,
    encResult = document.querySelector(".enc-result"),
    decResult = document.querySelector(".dec-result");
encryptedInputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  encryptedInputText = encryptedInputArea.value;
  encKey = document.querySelector(".enc-key").value; // console.log(encKey);
  // console.log(encryptedInputText);

  encrypted = CryptoJS.AES.encrypt(encryptedInputText, encKey);
  encrypted = encrypted.toString(); // console.log(encrypted);

  encResult.textContent = encrypted;
});
decryptedInputForm.addEventListener("submit", function (event) {
  event.preventDefault();
  decryptedInputText = decryptedInputArea.value;
  decKey = document.querySelector(".dec-key").value; // console.log(decKey);
  // console.log(decryptedInputText);

  decrypted = CryptoJS.AES.decrypt(decryptedInputText, decKey);
  decrypted = decrypted.toString(CryptoJS.enc.Utf8); // console.log(decrypted);

  decResult.textContent = decrypted;
});
//# sourceMappingURL=main.js.map
