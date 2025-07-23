const wes = document.querySelector(".wes");

wes.addEventListener("click", function(e) {
  const shouldChangePage = confirm("This is a malicious site");
  e.preventDefault();

  if (!shouldChangePage) {
    // window.location = e.currentTarget.href
    e.preventDefault();
  }
  window.location = e.currentTarget.href;
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function(e) {
  const name = e.currentTarget.name.value;
  // console.log(e.currentTarget.email.value)
  // console.log(e.currentTarget.agree.checked)
  if (name.includes("gid")) {
    alert("sorry bro");
    e.preventDefault();
  }
});
