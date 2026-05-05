window.onload = function() {
    // 1. 取得當前網頁的檔名 (例如: schedule.html)
    // 如果網址後面是空的，就預設為 index.html
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    // 2. 定義導覽列的 HTML 結構 (這裡包含你所有的頁面連結)
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

    // 3. 將內容寫入 HTML 中 id 為 nav_bar 的區塊
    const navContainer = document.getElementById("nav_bar");
    if (navContainer) {
        navContainer.innerHTML = navContent;
    }

    // 4. 自動比對網址，幫對應的 a 標籤加上 active 樣式 (配合 style.css 中的發亮效果)
    const navLinks = document.querySelectorAll("#nav_bar ul li a");
    navLinks.forEach(link => {
        // 取得連結裡的 href 屬性值
        const linkPage = link.getAttribute("href");
        
        // 如果當前頁面檔名與連結目標一致，則加上 active 類別
        if (currentPage === linkPage) {
            link.classList.add("active");
        }
    });
};