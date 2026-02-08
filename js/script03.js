const secret = Math.floor(Math.random()*100)+1;
let attempts = 0;

function checkGuess() {
  const val = parseInt(document.getElementById("guess").value);
  if (isNaN(val) || val<1 || val>100) {
    document.getElementById("result").textContent = "Nhập số hợp lệ!";
    return;
  }
  attempts++;
  if (val === secret) {
    document.getElementById("result").textContent = "Đúng rồi! Bạn thử " + attempts + " lần.";
    launchFireworks();
  } else if (val < secret) {
    document.getElementById("result").textContent = "Quá thấp!";
  } else {
    document.getElementById("result").textContent = "Quá cao!";
  }
}

function launchFireworks() {
  for (let i=0; i<10; i++) {
    const fw = document.createElement("div");
    fw.className = "firework";
    fw.style.left = Math.random()*window.innerWidth+"px";
    fw.style.top = Math.random()*window.innerHeight+"px";
    document.body.appendChild(fw);
    setTimeout(()=>fw.remove(),1000);
  }
}