function openTab(tabName) {
  // Ẩn tất cả nội dung
  document.querySelectorAll(".tab-content").forEach(c => c.style.display = "none");
  // Bỏ trạng thái active khỏi tất cả nút
  document.querySelectorAll(".tab-buttons button").forEach(b => b.classList.remove("active"));
  // Hiển thị nội dung tab được chọn
  document.getElementById(tabName).style.display = "block";
  // Đánh dấu nút đang active
  document.getElementById("btn-" + tabName).classList.add("active");
}

// Mặc định mở tab đầu tiên
openTab("Đà Lạt");