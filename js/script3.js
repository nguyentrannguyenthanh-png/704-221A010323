document.getElementById("reg-form").addEventListener("submit", function(e) {
  const p1 = document.getElementById("pass1").value;
  const p2 = document.getElementById("pass2").value;

  if (p1 !== p2) {
    e.preventDefault(); // Ngăn submit nếu mật khẩu không khớp
    document.getElementById("error-msg").textContent = "Mật khẩu không khớp!";
  } else {
    document.getElementById("error-msg").textContent = "";
    alert("Đăng ký thành công!");
  }
});