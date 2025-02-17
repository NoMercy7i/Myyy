/* إعدادات عامة */
body {
    font-family: 'Arial', sans-serif;
    text-align: center;
    background: #f7f8fc;
    direction: rtl;
    margin: 0;
    padding: 0;
    transition: background 0.3s, color 0.3s;
}

/* وضع الدارك مود */
body.dark-mode {
    background: #121212;
    color: white;
}

/* الحاوية الرئيسية */
.app-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    transition: background 0.3s, color 0.3s;
}

.dark-mode .app-container {
    background: #1e1e1e;
}

/* العنوان */
h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

/* إدخال البيانات */
.input-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
}

input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 16px;
    text-align: center;
    outline: none;
    transition: background 0.3s, color 0.3s;
}

.dark-mode input {
    background: #333;
    color: white;
}

/* زر الإضافة */
button {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}

button:hover {
    background: #0056b3;
}

/* المصاريف */
.expenses-container {
    margin-top: 15px;
}

.expense-card {
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin: 10px 0;
}

.dark-mode .expense-card {
    background: #333;
}

/* قائمة المصاريف */
ul {
    list-style: none;
    padding: 0;
}

li {
    background: #eee;
    padding: 10px;
    margin: 5px 0;
    border-radius: 6px;
}

.dark-mode li {
    background: #444;
}

/* إعدادات */
.settings {
    margin-top: 20px;
}

.reset-btn {
    background: #ff3b30;
}

.reset-btn:hover {
    background: #c82333;
}
