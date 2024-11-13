function openModal(image, description, cvdocno, chknumber, chkdate, payee, amount) {
    const modal = document.getElementById("modal");
    document.getElementById("modal-image").src = image.src;
    document.getElementById("image-desc").innerText = description;
    document.getElementById("image-cvdocno").innerText = cvdocno;
    document.getElementById("image-chknumber").innerText = chknumber;
    document.getElementById("image-chkdate").innerText = chkdate;
    document.getElementById("image-payee").innerText = payee;
    document.getElementById("image-amount").innerText = amount;
    modal.style.display = "flex";
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
  }