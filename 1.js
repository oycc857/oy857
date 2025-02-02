function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    } else {
        dropdown.classList.add("show");
    }
}

// 点击页面其他位置关闭下拉菜单
window.onclick = function (event) {
    const dropdown = document.getElementById("dropdown");
    // 如果点击的目标不是导航栏且下拉菜单处于展开状态
    if (!event.target.closest(".nav1") && dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    }
};

// 触摸事件支持
document.querySelector(".nav1").addEventListener("touchstart", function () {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("show")) {
        dropdown.classList.remove("show");
    } else {
        dropdown.classList.add("show");
    }
});