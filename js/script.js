document.addEventListener("DOMContentLoaded", function () {
    const captcha = document.getElementById("captcha");
    const generateCaptcha = () => {
      const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let captchaText = "";
      for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      captcha.value = captchaText;
    };
    generateCaptcha();
});
