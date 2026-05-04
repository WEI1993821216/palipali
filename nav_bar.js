window.onload = function() {
    // 1. 取得當前網頁的檔名 (例如: schedule.html)
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 2. 定義導覽列的 HTML 結構 (先把 class="active" 拿掉)
    const navContent = `
    <nav>
        <div class="container">
            <a href="index.html" class="logo">財團法人勞動基金會</a>
            <ul>
                <li><a href="index.html">課程首頁</a></li>
                <li><a href="schedule.html">班級課表</a></li>
                <li><a href="courses.html">課程簡介</a></li>
                <li><a href="future.html">發展方向</a></li>
                <li><a href="registration.html">報名資訊</a></li>
            </ul>
        </div>
    </nav>`;

    document.getElementById("nav_bar").innerHTML = navContent;

    // 3. 自動比對網址，幫對應的 a 標籤加上 active
    const navLinks = document.querySelectorAll("#nav_bar ul li a");
    navLinks.forEach(link => {
        // 取得連結裡的 href (例如: schedule.html)
        const linkPage = link.getAttribute("href");
        
        // 如果網址檔名包含這個連結的 href，就亮起來
        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
};