var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";

function createPassword() {
    let len = document.getElementById("password-length").value;
    let password = "";

    for (let i = 0; i < len; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
        console.log(i);
    }
    console.log(password);

    document.getElementById("password").innerText = password;

}