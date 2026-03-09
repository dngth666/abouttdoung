# 🔧 SETUP HƯỚNG DẪN - Portfolio Cosmos

## 📋 Bước 1: Chuẩn Bị Hình Ảnh

### Di chuyển hình ảnh vào folder `assets/images/`

Hiện tại, các hình ảnh đang ở thư mục gốc (`Portflio/`):
- `Avatar.jpg` → **Di chuyển** sang `Portflio/assets/images/Avatar.jpg`
- `Planet.png` → **Di chuyển** sang `Portflio/assets/images/Planet.png`
- `Cosmo Background.jpg` → **Di chuyển** sang `Portflio/assets/images/Cosmo Background.jpg`

#### Cách thực hiện:

**Trên Windows (File Explorer):**
1. Mở `d:\Web\My First Project\Portflio`
2. Tạo folder mới: `assets` → vào `assets` → tạo folder `images`
3. Kéo thả 3 hình ảnh vào `assets/images/`

**Trên Terminal/PowerShell:**
```powershell
cd "d:\Web\My First Project\Portflio"

# Tạo folder
mkdir -p assets\images

# Di chuyển hình ảnh (hoặc copy + delete)
Move-Item "Avatar.jpg" "assets\images\Avatar.jpg"
Move-Item "Planet.png" "assets\images\Planet.png"
Move-Item "Cosmo Background.jpg" "assets\images\Cosmo Background.jpg"
```

**Hoặc dùng Git Bash:**
```bash
cd /d/Web/"My First Project"/Portflio

# Tạo folder
mkdir -p assets/images

# Di chuyển hình ảnh
mv Avatar.jpg assets/images/
mv Planet.png assets/images/
mv "Cosmo Background.jpg" assets/images/
```

---

## 🔑 Bước 2: Setup EmailJS (Để Form Gửi Email)

### 2.1. Đăng Ký EmailJS

1. Vào [emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up"** (tự do, không cần credit card)
3. Xác thực email
4. Đăng nhập vào dashboard

### 2.2. Lấy Public Key

1. Vào **"Account"** (góc trên trái)
2. Copy **"Public Key"** (dạng: `YOUR_PUBLIC_KEY_*`)
3. Lưu lại value này

### 2.3. Tạo Email Service

1. Vào **"Email Services"** từ menu trái
2. Click **"Add New Service"**
3. Chọn **"Gmail"** (hoặc email provider khác)
4. Click **"Connect Account"**
5. Cho phép EmailJS truy cập Gmail
6. Copy **Service ID** (ví dụ: `service_abc123xyz`)

### 2.4. Tạo Email Template

1. Vào **"Email Templates"** từ menu trái
2. Click **"Create New Template"**
3. Tên template: `portfolio_contact`
4. Subject: `New message from {{from_name}}`
5. Template content:
```
From: {{from_name}} ({{from_email}})
Message:
{{message}}
```
6. Click **"Test it"** để test
7. Lưu template
8. Copy **Template ID** (ở URL hoặc page)

### 2.5. Cập Nhật Code

**File: `index.html`**

Tìm section này (dòng ~30):
```javascript
<script type="text/javascript">
    (function() {
        emailjs.init({
            publicKey: "YOUR_PUBLIC_KEY_HERE"  // ← THAY ĐỔI
        });
    })();
</script>
```

Thay `YOUR_PUBLIC_KEY_HERE` bằng public key từ bước 2.2

**File: `js/modules/form.js`**

Tìm line này (dòng ~49):
```javascript
await emailjs.send('service_portfolio', 'template_portfolio', {
```

Thay đổi:
- `'service_portfolio'` → `'service_YOUR_ID'` (từ 2.3)
- `'template_portfolio'` → `'template_YOUR_ID'` (từ 2.4)

**Hoặc** - Cập nhật thông qua Environment Variables:

Tạo file `.env`:
```
EMAILJS_SERVICE_ID=service_YOUR_SERVICE_ID
EMAILJS_TEMPLATE_ID=template_YOUR_TEMPLATE_ID
EMAILJS_USER_ID=YOUR_PUBLIC_KEY_HERE
```

---

## 🌐 Bước 3: Test Locally

### Option A: Python HTTP Server
```bash
cd "d:\Web\My First Project\Portflio"
python -m http.server 8000
```

### Option B: Node.js HTTP Server
```bash
cd "d:\Web\My First Project\Portflio"
npx http-server . -p 8000
```

### Option C: VS Code Live Server
1. Cài extension **"Live Server"** (Ritwick Dey)
2. Right-click `index.html`
3. Select **"Open with Live Server"**
4. Browser tự động mở http://localhost:5500

### Kiểm Tra:
- Truy cập `http://localhost:8000` (hoặc port tương ứng)
- Scroll qua các section
- Test form contact:
  - Nhập tên, email, message
  - Click **"Gửi Tin Nhắn"**
  - Nếu thành công: *"Tin nhắn đã được gửi!"*
  - Check email (dngth666@gmail.com) có nhận được message không

---

## 📦 Bước 4: Install Dependencies (Optional)

```bash
cd "d:\Web\My First Project\Portflio"

# Install EmailJS locally (nếu không dùng CDN)
npm install emailjs-com

# Hoặc từ config folder
npm install --prefix config
```

---

## 🚀 Bước 5: Deploy

### A. Deploy lên Netlify (Recommended)

**Method 1: Drag & Drop**
1. Vào [netlify.com](https://netlify.com)
2. Kéo thả folder `Portflio` vào
3. Tên site: `portfolio-cosmos` (auto generate URL)
4. Done! ✅

**Method 2: Git Integration**
1. Push project lên GitHub
2. Vào Netlify → "New site from Git"
3. Kết nối GitHub
4. Deploy automátically

### B. Deploy lên Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### C. Deploy lên GitHub Pages

```bash
# Initialize git
git init
git add .
git commit -m "Initial: Portfolio Cosmos v1.0"

# Create repo trên GitHub, then
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-cosmos.git
git push -u origin main

# Enable Pages trong repo settings
# Select "main" branch → Save
```

---

## ✅ Checklist Bước Setup

- [ ] Hình ảnh đã move sang `assets/images/`
- [ ] Kiểm tra `index.html` có import CSS modules
- [ ] Kiểm tra `index.html` có import JS modules  
- [ ] EmailJS public key đã add vào `index.html`
- [ ] EmailJS service/template ID đã update trong `js/modules/form.js`
- [ ] Test localhost chạy bình thường
- [ ] Test form gửi email thành công
- [ ] Deploy lên hosting (Netlify/Vercel/GitHub Pages)

---

## 🆘 Troubleshooting

### Lỗi: "Cannot find module"
**Nguyên nhân**: Path file sai  
**Giải pháp**: Kiểm tra path đúng, ví dụ:
```html
<!-- Sai ❌ -->
<link rel="stylesheet" href="variables.css">

<!-- Đúng ✅ -->
<link rel="stylesheet" href="css/variables.css">
```

### Lỗi: CSS không load
**Giải pháp**: Đảm bảo tất cả CSS import trong `index.html`:
```html
<link rel="stylesheet" href="css/variables.css">
<link rel="stylesheet" href="css/global.css">
<link rel="stylesheet" href="css/components.css">
<link rel="stylesheet" href="css/sections.css">
<link rel="stylesheet" href="css/responsive.css">
```

### Lỗi: Starfield không hiển thị
**Giải pháp**: Kiểm tra Canvas element:
```html
<!-- Cần có trong HTML -->
<canvas id="starfield"></canvas>
```

### Lỗi: Form không gửi email
**Giải pháp**: 
1. Check browser console (F12) có error?
2. Verify EmailJS keys đúng
3. Verify email service enabled trong EmailJS
4. Test EmailJS dashboard trước

### Lỗi: Hình ảnh không load
**Giải pháp**: Kiểm tra path & file extension:
```html
<!-- Đúng: lowercase, có ./ prefix -->
<img src="./assets/images/Avatar.jpg">

<!-- Sai ❌ -->
<img src="assets/images/avatar.jpg">  <!-- Case sensitive -->
<img src="/assets/images/Avatar.jpg"> <!-- Wrong absolute path -->
```

---

## 📞 Support

Nếu gặp vấn đề:

1. **Check Console** - F12 → Console tab
2. **Read Error Message** - Đọc kỹ error message
3. **Check Paths** - Đảm bảo tất cả path đúng
4. **Check EmailJS** - Verify keys & service setup
5. **Network Tab** - F12 → Network để check file load status

---

**Last Updated**: March 8, 2026
