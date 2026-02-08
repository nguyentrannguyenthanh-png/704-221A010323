function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);

  if (!weight || !height || height <= 0) {
    document.getElementById("result").textContent = "Vui lòng nhập dữ liệu hợp lệ.";
    return;
  }

  const bmi = weight / (height * height);
  let category = "";

  if (bmi < 18.5) {
    category = "Thiếu cân";
  } else if (bmi < 24.9) {
    category = "Bình thường";
  } else {
    category = "Thừa cân";
  }

  document.getElementById("result").textContent =
    "Chỉ số BMI: " + bmi.toFixed(2) + " - " + category;
}