// 第一頁：3/27 ~ 4/30
var page1Data = [
    { date: "3/27", week: "五", morning: "開訓 / 就業市場趨勢分析", afternoon: "基本電路學" },
    { date: "3/30", week: "一", morning: "基本電路學", afternoon: "基本電路學" },
    { date: "3/31", week: "二", morning: "基本電路學", afternoon: "用電量測與焊接技巧" },
    { date: "4/01", week: "三", morning: "產品設計概論與實務", afternoon: "產品設計概論與實務" },
    { date: "4/02", week: "四", morning: "電腦輔助製圖系統認證", afternoon: "電腦輔助製圖系統認證" },
    { date: "4/03", week: "五", morning: "標準機件繪製", afternoon: "標準機件繪製" }, 
    { date: "4/07", week: "二", morning: "伺服馬達控制與實質", afternoon: "伺服馬達控制與實質" },
    { date: "4/08", week: "三", morning: "伺服馬達控制與實質", afternoon: "伺服馬達控制與實質" },
    { date: "4/09", week: "四", morning: "CAD電腦平面製圖", afternoon: "CAD電腦平面製圖" },
    { date: "4/10", week: "五", morning: "CAD電腦平面製圖", afternoon: "CAD電腦平面製圖" },
    { date: "4/13", week: "一", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "4/14", week: "二", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "4/15", week: "三", morning: "物聯網Web基礎概念", afternoon: "物聯網Web基礎概念" },
    { date: "4/16", week: "四", morning: "物聯網Web基礎概念", afternoon: "物聯網Web基礎概念" },
    { date: "4/17", week: "五", morning: "感測器程式設計", afternoon: "感測器程式設計" },
    { date: "4/20", week: "一", morning: "感測器程式設計", afternoon: "感測器程式設計" },
    { date: "4/21", week: "二", morning: "感測器程式設計", afternoon: "感測器程式設計" },
    { date: "4/22", week: "三", morning: "感測器程式設計", afternoon: "感測器程式設計" },
    { date: "4/23", week: "四", morning: "智慧核心晶片及軟體開發工具", afternoon: "智慧核心晶片及軟體開發工具" },
    { date: "4/24", week: "五", morning: "JavaScript程式設計結構HTTP與聯網", afternoon: "JavaScript程式設計結構HTTP與聯網" },
    { date: "4/27", week: "一", morning: "JavaScript程式設計結構HTTP與聯網", afternoon: "JavaScript程式設計結構HTTP與聯網" },
    { date: "4/28", week: "二", morning: "智慧核心晶片及軟體開發工具", afternoon: "智慧核心晶片及軟體開發工具" },
    { date: "4/29", week: "三", morning: "CAD電腦平面製圖", afternoon: "CAD電腦平面製圖" },
    { date: "4/30", week: "四", morning: "Solidworks 3D立體建模", afternoon: "Solidworks 3D立體建模" }
];

// 第二頁：5/01 ~ 5/29
var page2Data = [
    { date: "5/01", week: "五", morning: "Solidworks 3D立體建模", afternoon: "Solidworks 3D立體建模" },
    { date: "5/04", week: "一", morning: "JavaScript程式設計結構HTTP與聯網", afternoon: "JavaScript程式設計結構HTTP與聯網" },
    { date: "5/05", week: "二", morning: "使用jQuery建構HTTP與聯網", afternoon: "使用jQuery建構HTTP與聯網" },
    { date: "5/06", week: "三", morning: "機械零組件設計", afternoon: "機械零組件設計" },
    { date: "5/07", week: "四", morning: "機械零組件設計", afternoon: "機械零組件設計" },
    { date: "5/08", week: "五", morning: "機械零組件設計", afternoon: "機械零組件設計" },
    { date: "5/11", week: "一", morning: "使用jQuery建構HTTP與聯網", afternoon: "使用jQuery建構HTTP與聯網" },
    { date: "5/12", week: "二", morning: "ChatGPT人工智慧建立與端雲端應用連結", afternoon: "ChatGPT人工智慧建立與端雲端應用連結" },
    { date: "5/13", week: "三", morning: "機械零組件設計", afternoon: "機械零組件設計" },
    { date: "5/14", week: "四", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "5/15", week: "五", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "5/18", week: "一", morning: "智慧端系統與程式開發", afternoon: "ESP32無線網路及雲端資料庫" },
    { date: "5/19", week: "二", morning: "智慧端系統與程式開發", afternoon: "ESP32無線網路及雲端資料庫" },
    { date: "5/20", week: "三", morning: "ESP32無線網路及雲端資料庫", afternoon: "ESP32無線網路及雲端資料庫" },
    { date: "5/21", week: "四", morning: "ESP32無線網路及雲端資料庫", afternoon: "ESP32無線網路及雲端資料庫" },
    { date: "5/22", week: "五", morning: "ESP32無線網路及雲端資料庫", afternoon: "雲端上傳與遠端控制" },
    { date: "5/25", week: "一", morning: "ChatGPT人工智慧建立與端雲端應用連結", afternoon: "ChatGPT人工智慧建立與端雲端應用連結" },
    { date: "5/26", week: "二", morning: "檢定題型分析與證照輔導", afternoon: "檢定題型分析與證照輔導" },
    { date: "5/27", week: "三", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "5/28", week: "四", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" },
    { date: "5/29", week: "五", morning: "機皮模型剖析與體現輔導", afternoon: "機皮模型剖析與體現輔導" }
];

// 第三頁：6/01 ~ 6/18
var page3Data = [
    { date: "6/01", week: "一", morning: "資訊及通訊科技概念", afternoon: "資通訊科技平台應用" },
    { date: "6/02", week: "二", morning: "檢定題型分析與證照輔導", afternoon: "檢定題型分析與證照輔導" },
    { date: "6/03", week: "三", morning: "ESP32無線網路及雲端資料庫", afternoon: "ESP32無線網路及雲端資料庫" },
    { date: "6/04", week: "四", morning: "ESP32無線網路及雲端資料庫", afternoon: "遠端智慧控制系統運作" },
    { date: "6/05", week: "五", morning: "遠端智慧控制系統運作", afternoon: "資通訊科技平台應用" },
    { date: "6/08", week: "一", morning: "遠端智慧控制系統運作", afternoon: "資通訊科技平台應用" },
    { date: "6/09", week: "二", morning: "雲端上傳與遠端控制", afternoon: "專題製作與成果發表" },
    { date: "6/10", week: "三", morning: "3D列印技術應用", afternoon: "產品設計3D列印輸出打樣" },
    { date: "6/11", week: "四", morning: "專題製作與成果發表", afternoon: "產品設計3D列印輸出打樣" },
    { date: "6/12", week: "五", morning: "專題製作與成果發表", afternoon: "產品設計3D列印輸出打樣" },
    { date: "6/15", week: "一", morning: "專題製作與成果發表", afternoon: "專題製作與成果發表" },
    { date: "6/16", week: "二", morning: "專題製作與成果發表", afternoon: "微學" },
    { date: "6/17", week: "三", morning: "專題製作與成果發表", afternoon: "專題製作與成果發表" },
    { date: "6/18", week: "四", morning: "專題製作與成果發表", afternoon: "結訓" }
];