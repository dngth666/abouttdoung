# 🌌 Portfolio Cosmos - Trang Web Portfolio Vũ Trụ

Đây là một trang web portfolio đơn trang (Single Page Application) với phong cách Cosmos - lấy cảm hứng từ vẻ đẹp của vũ trụ. Thiết kế tối giản, hiện đại với các hiệu ứng glassmorphism, glow effect, và animation mượt mà.

## 📊 Thông Tin Cấu Trúc Project

**Cấu trúc folder hiệp hợp:**
```
Portfolio/
├── index.html                  # Trang HTML chính
├── .gitignore                  # Git ignore rules
├── .env.example               # Environment variables template
├── README.md                  # Documentation
│
├── css/                       # Các file CSS module
│   ├── variables.css          # CSS variables & colors
│   ├── global.css             # Global styles
│   ├── components.css         # Reusable components
│   ├── sections.css           # Section-specific styles
│   └── responsive.css         # Media queries & responsive
│
├── js/                        # JavaScript modules
│   ├── main.js                # Entry point & initialization
│   └── modules/
│       ├── menu.js            # Mobile menu logic
│       ├── scroll.js          # Scroll animations & navigation
│       ├── canvas.js          # Starfield animation
│       ├── form.js            # Contact form handling (EmailJS)
│       └── utils.js           # Utility functions
│
├── assets/                    # Project assets
│   └── images/
│       ├── Avatar.jpg         # Profile image
│       ├── Planet.png         # Background planet element
│       └── Cosmo Background.jpg # Space background
│
└── config/
    └── package.json           # Dependencies & scripts
```

## ✨ Tính Năng Chính

✅ **Phong cách Cosmos** - Nền hình ảnh vũ trụ với hiệu ứng glassmorphism  
✅ **Hiệu ứng Sao Băng** - Canvas-based animation (500 stars + shooting stars)  
✅ **Gradient Text & Glow** - Tiêu đề chính & nút bấm với hiệu ứng sáng  
✅ **Responsive Design** - Hoạt động tốt trên desktop, tablet, mobile  
✅ **Smooth Scrolling** - Cuộn mịn giữa các phần  
✅ **Mobile Menu** - Menu hamburger tự động cho di động  
✅ **Scroll Animations** - Fade-in effects & planet fade-out  
✅ **Active Navigation** - Tự động cập nhật nav link khi cuộn  
✅ **Contact Form** - Biểu mẫu liên hệ với EmailJS integration  
✅ **Font Awesome Icons** - 11 professional icons đã thay thế emoji  
✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Card  
✅ **Modular Code** - CSS/JS được chia thành modules cho dễ bảo trì

## 🎨 Các Phần (Sections)

### 1. **Navigation Header** (`navbar`)
- Logo có gradient text
- Menu liên kết: Giới thiệu, Dự án, Kỹ năng, Liên hệ
- Hiệu ứng glassmorphism khi cuộn
- Menu hamburger cho mobile
- Active link underline animation

### 2. **Hero Section** (Phần Chào Mừng)
- Avatar cá nhân (180px desktop → 120px tablet → 100px mobile)
- Tiêu đề chính lớn với gradient text
- Phụ đề mô tả
- Nút "Xem Hoạt động" với glow effect
- Background radial glow effect

### 3. **About Section** (Giới Thiệu)
- Glass morphism card
- Giới thiệu về bản thân và kinh nghiệm
- Backdrop blur effect

### 4. **Projects Section** (Hoạt Động Nổi Bật)
- 5 project cards với Font Awesome icons
- Project tags & descriptions
- Shimmer animation effect
- Grid layout responsive

### 5. **Highlights/Timeline Section** (Sự Kiện)
- Vertical timeline với 6 milestones
- Thay đổi hướng trái/phải cho alternate layout
- Pulse animation markers
- Gradient yellow titles
- Responsive single column trên mobile

### 6. **Skills Section** (Kỹ Năng)
- 3 skill groups: Developer, Languages, Office & Tools  
- Multiple skill badges
- Hover effects

### 7. **Contact Section** (Liên Hệ)
- Contact form với EmailJS integration
- Social media links với Font Awesome icons
- Form validation & feedback

### 8. **Footer**
- Copyright information

## 🚀 Cài Đặt & Sử Dụng

### 1. **Setup Cấu Trúc Folder**
Hình ảnh cần được di chuyển đến thư mục `assets/images/`:
```bash
# Copy hình ảnh sang folder mới
cp /path/to/Avatar.jpg assets/images/
cp /path/to/Planet.png assets/images/
cp /path/to/Cosmo\ Background.jpg assets/images/
```

### 2. **Setup EmailJS** (Để Form Gửi Email)

#### Step 1: Đăng ký EmailJS
- Vào [emailjs.com](https://www.emailjs.com) và đăng ký tài khoản miễn phí
- Confirm email address

#### Step 2: Tạo Email Service
- Click "Add New Service" - chọn "Gmail" hoặc "Other Email Service"
- Kết nối email của bạn (dngth666@gmail.com)
- Lấy **Service ID** (ví dụ: `service_xxxxxx`)

#### Step 3: Tạo Email Template
- Click "Email Templates" → "Create New Template"
- Tên template: `portfolio_contact`
- Dùng template này:
```html
Subject: Tin nhắn mới từ {{from_name}} - {{from_email}}

Tin nhắn:
{{message}}
```
- Lấy **Template ID** (ví dụ: `template_xxxxxx`)

#### Step 4: Cấu Hình trong HTML
Mở `index.html` và thay đổi:
```javascript
emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY_HERE"  // Lấy từ EmailJS account
});
```

Cập nhật service/template ID trong `js/modules/form.js`:
```javascript
await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {...})
```

### 3. **Chạy Locally**
```bash
# Cách 1: Dùng Python
python -m http.server 8000

# Cách 2: Dùng Node.js
npx http-server . -p 8000

# Cách 3: Live Server (VS Code extension)
- Cài Extension "Live Server"
- Right-click index.html → "Open with Live Server"
```

Truy cập: `http://localhost:8000`

### 4. **Cấu Hình Git**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio Cosmos"
git branch -M main
git remote add origin <YOUR_REPO_URL>
git push -u origin main
```

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Gradients, animations, glassmorphism, flexbox, grid
- **JavaScript (ES6 Modules)** - Vanilla JS, Canvas API, DOM manipulation
- **Font Awesome 6.4.0** - Icon library (11 icons)
- **EmailJS** - Email service integration
- **Canvas API** - Starfield animation (500 stars with twinkling)

## 📱 Responsive Breakpoints

| Device | Width | Changes |
|--------|-------|---------|
| Desktop | > 1024px | Full layout |
| Tablet | 768px - 1024px | 2-column grid → 1-column |
| Mobile | < 768px | Menu hamburger, stacked layout |
| Small Mobile | < 480px | Extra padding reductions |

## 🎯 Performance Optimizations

1. **CSS Modular** - Chia nhỏ file CSS cho dễ load & maintain
2. **JS Modular** - Chỉ init features được dùng
3. **Image Optimization** - Nên optimize hình ảnh:
   ```bash
   # Use TinyPNG online hoặc ImageOptim
   # Convert to WebP format cho web
   ```
4. **Canvas** - Dùng requestAnimationFrame cho smooth animation

## 🔒 Environment Variables

Tạo `.env` file (Copy từ `.env.example`):
```
EMAILJS_SERVICE_ID=service_portfolio
EMAILJS_TEMPLATE_ID=template_portfolio
EMAILJS_USER_ID=your_public_key_here
CONTACT_EMAIL=dngth666@gmail.com
```

## 🚀 Deployment

### Option 1: Netlify (Recommended)
```bash
# Kéo thả folder vào Netlify
# Hoặc kết nối GitHub repository
```

### Option 2: Vercel
```bash
vercel deploy
```

### Option 3: GitHub Pages
```bash
git push origin main
# Vào repository settings → Pages
# Select branch "main" → Deploy
```

## 📊 File Sizes

| File | Size | Notes |
|------|------|-------|
| index.html | ~12 KB | Semantic markup |
| css/variables.css | ~1 KB | CSS variables |
| css/global.css | ~2 KB | Global styles |
| css/components.css | ~8 KB | Components |
| css/sections.css | ~22 KB | Section styles |
| css/responsive.css | ~6 KB | Media queries |
| js/main.js | ~2 KB | Entry point |
| js/modules/menu.js | ~1 KB | Menu module |
| js/modules/scroll.js | ~3 KB | Scroll effects |
| js/modules/canvas.js | ~4 KB | Starfield |
| js/modules/form.js | ~2 KB | Form handling |
| js/modules/utils.js | ~2 KB | Utils |

**Total CSS**: ~39 KB  
**Total JS**: ~14 KB  
**Total**: ~53 KB (trước khi minify/compress)

## 🐛 Debugging

### Canvas Starfield không render
- Kiểm tra console có error message?
- Ensure canvas element có id="starfield"
- Check browser support Canvas API

### Form không gửi email
- Verify EmailJS keys đúng
- Check EmailJS service/template tồn tại
- Xem browser console cho error messages

### Hình ảnh không load
- Verify path: `./assets/images/filename.jpg`
- Check hình ảnh tồn tại trong folder
- Kiểm tra file extension (case-sensitive)

## 🔄 Cập Nhật Sau Này

### Thêm Feature Mới:
1. Tạo file JS mới trong `js/modules/`
2. Import và export functions
3. Import trong `js/main.js`
4. Gọi function trong `DOMContentLoaded`

### Sửa Styles:
1. Edit file CSS tương ứng trong `css/`
2. Không cần edit styles.css (đã deprecated)

### Deploy Changes:
```bash
git add .
git commit -m "Update: [description]"
git push
```

## 📞 Liên Hệ

- **Email**: dngth666@gmail.com
- **Email**: Thang.DN221870@sis.hust.edu.vn
- **GitHub**: https://github.com/duongngocthang
- **Instagram**: @tdoung813
- **Facebook**: facebook.com/tdoung813

## 📄 License

MIT License - Tự do sử dụng & modify

---

**Last Updated**: March 8, 2026  
**Version**: 1.0.0 (Restructured)
