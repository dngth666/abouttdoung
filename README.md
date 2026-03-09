# 🌌 Portfolio Cosmos - Trang Web Portfolio Vũ Trụ

Đây là một trang web portfolio đơn trang (Single Page Application) phong cách Cosmos, lấy cảm hứng từ vẻ đẹp của vũ trụ. Trang web được thiết kế tối giản, hiện đại với các hiệu ứng glassmorphism, glow effect, animation mượt mà kết hợp hình nền các hành tinh và vũ trụ.

---

## 1. 📊 Cấu Trúc Dự Án (Project Structure)

Dự án tuân thủ chuẩn một ứng dụng Static Web hiện đại, dễ bảo trì:

```text
Portflio/
├── index.html            # Trang chính chứa toàn bộ giao diện HTML
├── package.json          # File cấu trúc NPM chứa các tập lệnh khởi chạy
├── .env.example          # Mẫu khai báo thông tin biến môi trường (EmailJS)
├── .gitignore            # File bỏ qua các tệp tin lưu trữ rác/không đưa lên Git
├── README.md             # Tài liệu dự án duy nhất (File này)
│
├── css/                  # Thư mục mã nguồn CSS tổ chức theo Mô-đun
│   ├── variables.css     # Định nghĩa các biến môi trường, màu gradient, hiệu ứng
│   ├── global.css        # Khai báo reset style, body, link và canvas nền
│   ├── components.css    # Các elements dùng chung: nút bấm, thẻ bài, sidebars
│   ├── sections.css      # Mã nguồn chia riêng cho từng cụm giao diện (Hero, About, Timeline)
│   └── responsive.css    # Tùy biến reponsive cho mọi loại màn hình (Mobile, Tablet)
│
├── js/                   # Thư mục mã nguồn JavaScript tổ chức theo Mô-đun
│   ├── main.js           # Điểm neo bắt đầu, kích hoạt mọi mô-đun
│   └── modules/
│       ├── menu.js       # Xử lý điều hướng Hamburger menu
│       ├── scroll.js     # Chuyển cảnh mềm mại khi cuộc trang
│       ├── canvas.js     # Render bầu trời sao băng
│       ├── form.js       # Gọi API Gửi Form Email qua EmailJS
│       └── utils.js      # Các hàm tiện ích
│
└── assets/               # Thư mục lưu trữ hình ảnh
    └── images/
        ├── Avatar.jpg         # Hiển thị cho profile cá nhân
        ├── Planet.png         # Áp dụng cho các item ở chuỗi Timeline và Background
        └── Cosmo Background.jpg # Hình nền Vũ trụ chính
```

---

## 2. 🎨 Phong Cách Thiết Kế Theo Concept (Design Style & Aesthetic)

- **Chủ Đề Ánh Sáng Vũ Trụ (Cosmic Glow):** Hình ảnh nổi bật là tiểu hành tinh, bầu trời sao (Starfield canvas canvas) và hiệu ứng thiên thạch xẹt qua màn hình liên tục.
- **Glassmorphism:** Hầu như tất cả các Box/Card (Thẻ bài) đều sử dụng chế độ làm mờ nền (backdrop-filter) với viền trắng siêu trong suốt mang tới cảm giác xuyên thấu hư ảo.
- **Gradient Sống Động:** Các hiệu ứng làm nổi bật bao gồm tiêu đề, Marker sự kiện (📍) hay công cụ Sidebar Menu đều áp dụng mảng màu rực rỡ `--secondary-gradient` đỏ/xanh hòa quyện, kết hợp với Box Shadow sáng mạnh khi người dùng trỏ chuột (Hover).
- **Responsive Animations:** Trang web có đầy đủ hiệu ứng Scroll Reveal (Trượt lên khi lướt xuống), Fade In. Ở các thiết bị Mobile, danh sách sự kiện từ so le sẽ tụ về một dòng đồng thời dồn hình minh hoạ gọn gàng.

---

## 3. 🛠️ Thư Viện Đã Sử Dụng (Libraries Used)

Dự án này sử dụng phần lớn là mã Javascript thuần cùng CSS Module nguyên bản nhằm tối ưu tốc độ và không cần sử dụng đóng gói Webpack phức tạp. 
Chỉ có các thư viện sau đây hỗ trợ tác vụ bên trong:
1. **[EmailJS](https://www.emailjs.com/) (`@emailjs/browser`):** Cho phép người dùng gửi thẳng thư Feedback từ Liên hệ ở form web đến tài khoản Gmail do bạn cấu hình ở `index.html` và `.env`.
2. **Font Awesome (`v6.4.0`):** Biểu tượng Icons sinh động ứng dụng ở Sidebar mạng xã hội (Facebook, Github, Mails...).
3. **HTTP Server (NPM):** Thư viện Dev dependencies dùng để tạo host local xem Preview Website mỗi khi code.

---

## 4. 🚀 Hướng Dẫn Chạy Dự Án Trên Local (Development Environment)

Để có thể xem và kiểm tra lại toàn bộ trang web này dễ dàng trên ngay laptop cá nhân của bạn. Chỉ cần chạy:

### Bước 1. Mở Terminal
Sử dụng VS Code, mở thư mục `Portflio`, mở cửa sổ **Terminal** lên.

### Bước 2. Cài đặt các thư viện bổ trợ Local Test (Lần đầu tiên)
```bash
npm install
```

### Bước 3. Khởi Tới Server (Live Preview)
```bash
npm run dev
```
Hệ thống sẽ chạy một host giả lập trên máy bạn. Hãy click vào Link đường dẫn trên Terminal (Thường là `http://localhost:8000/`) để xem trực tiếp các thay đổi thiết kế trên trình duyệt.

---

## 5. 🌐 Hướng Dẫn Cập Nhật Web (Push Lên Git & Deployment)

Mỗi khi bạn vừa chỉnh sửa thông tin mô tả, hay thêm hình ảnh về một sự kiện mới vào `index.html`. Bạn cần đưa sự thay đổi đó lên Git để Web tự update kết quả mới nhất cho người dung xem qua trình quy trình 3 câu lệnh sau:

### Lệnh 1: Thêm toàn bộ các file vừa thay đổi vào khu vực theo dõi chuẩn bị
```bash
git add .
```

### Lệnh 2: Gói gọn thay đổi với một lời nhắn nhỏ cho bản thân hiểu mình vừa thay đổi cái gì
```bash
git commit -m "update: Thay đổi hình ảnh Planet cho lịch sử hoạt động"
```
*(Bạn nên thay đổi nội dung trong chuỗi `"..."` bằng dòng chữ liên quan).*

### Lệnh 3: Đẩy thẳng nội dung đó lên kho (Repository) Github
```bash
git push origin main
```

> **Sau khi lệnh PUSH hoàn tất**, kho Github sẽ tự động lấy đoạn nguồn mới nhất cung cấp lại cho bên Hosting Static tự làm mới Website ở tên miền của bạn. Chờ từ 1-3 Phút, F5 trình duyệt và thay đổi của bạn sẽ có mặt trên phiên bản Online của Portfolio! 

---
_Đây là bộ tài nguyên và cẩm nang tham khảo mã nguồn Project Porfolio Cosmos của Dương Ngọc Thắng._
