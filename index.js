let accordian = document.getElementsByClassName("FAQtitle");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// Login modal logic
const signinButton = document.querySelector('.signinbutton');
const loginModal = document.getElementById('loginModal');
const closeLoginModal = document.getElementById('closeLoginModal');
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');

// Add event listeners for all 'Get Started' buttons
const getStartedButtons = document.querySelectorAll('.primarybutton');
if (getStartedButtons && loginModal && loginMessage) {
  getStartedButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Prevent form submission if inside a form
      if (btn.closest('form')) return;
      loginModal.style.display = 'block';
      loginMessage.textContent = '';
    });
  });
}

if (signinButton && loginModal && closeLoginModal && loginForm) {
  signinButton.addEventListener('click', () => {
    loginModal.style.display = 'block';
    loginMessage.textContent = '';
  });
  closeLoginModal.addEventListener('click', () => {
    loginModal.style.display = 'none';
  });
  window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
  });
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (email === 'admin@gmail.com' && password === 'Admin@123') {
      loginMessage.style.color = 'green';
      loginMessage.textContent = 'Login successful!';
      setTimeout(() => {
        loginModal.style.display = 'none';
        // Show movie gallery after login
        const movieGallery = document.getElementById('movieGallery');
        if (movieGallery) movieGallery.style.display = 'block';
        window.scrollTo({ top: movieGallery.offsetTop, behavior: 'smooth' });
      }, 1000);
    } else {
      loginMessage.style.color = 'red';
      loginMessage.textContent = 'Invalid email or password.';
    }
  });
}
