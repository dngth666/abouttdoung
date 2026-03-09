# ⚡ QUICK START - 5 Phút Để Chạy Portfolio

## 🚀 Cách Nhanh Nhất

### 1️⃣ Di Chuyển Hình Ảnh (30 giây)
```powershell
cd "d:\Web\My First Project\Portflio"
mkdir -p assets\images
Move-Item "Avatar.jpg" "assets\images\"
Move-Item "Planet.png" "assets\images\"
Move-Item "Cosmo Background.jpg" "assets\images\"
```

### 2️⃣ Setup EmailJS (2 phút)
1. Vào [emailjs.com](https://www.emailjs.com) → Sign Up
2. Copy **Public Key** từ Account settings
3. Paste vào `index.html` (search: `YOUR_PUBLIC_KEY_HERE`)
4. Tạo Email Service (Gmail) → Copy Service ID
5. Tạo Template → Copy Template ID
6. Update `js/modules/form.js` với Service/Template ID

### 3️⃣ Chạy Locally (30 giây)
```bash
cd "d:\Web\My First Project\Portflio"
python -m http.server 8000
```
Mở: `http://localhost:8000`

### 4️⃣ Test Form (1 phút)
- Scroll đến "Liên hệ"
- Nhập form → Gửi
- Check email xem có nhận message không

### 5️⃣ Deploy (Optional)
- Kéo thả folder vào [netlify.com](https://netlify.com)
- Hoặc push lên GitHub → Enable Pages

## ✅ Done! 🎉

---

## 📊 Cấu Trúc Mới

```
css/            ← CSS modules (variables, global, sections)
js/             ← JS modules (menu, scroll, canvas, form)
assets/images/  ← Hình ảnh (Avatar, Planet, Background)
.gitignore      ← Git rules
.env.example    ← Environment template
README_NEW.md   ← Full documentation
SETUP.md        ← Hướng dẫn chi tiết
```

## 🔧 Nếu Gặp Lỗi

| Lỗi | Giải pháp |
|-----|----------|
| CSS không load | Check path: `css/variables.css` |
| Starfield không hiển thị | Check canvas element trong HTML |
| Form không gửi email | Verify EmailJS keys trong `index.html` |
| Hình ảnh không load | Check: `assets/images/Avatar.jpg` |

## 📖 Tài Liệu Đầy Đủ

- **SETUP.md** - Hướng dẫn chi tiết setup
- **README_NEW.md** - Full documentation
- **.env.example** - Environment variables

---

**Thuận lợi hơn so với trước:**
- ✅ CSS chia module → Dễ bảo trì
- ✅ JS chia module → Dễ debug & scale
- ✅ Folder structure rõ ràng → Dễ tìm file
- ✅ SEO optimized → Tốt cho ranking
- ✅ EmailJS integrated → Form hoạt động
- ✅ .gitignore setup → Ready for version control
