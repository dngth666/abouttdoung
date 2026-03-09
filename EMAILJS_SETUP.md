# ⚙️ CẤUHÌNH EMAILJS - Hướng Dẫn Chi Tiết

## 📝 Tại Sao Cần EmailJS?

Form liên hệ của bạn cần có cách gửi email. EmailJS cho phép gửi email trực tiếp từ website mà không cần backend server. **Miễn phí** cho 200 emails/tháng.

---

## 📋 Các Bước Chi Tiết

### Bước 1: Đăng Ký EmailJS

1. **Vào [emailjs.com](https://www.emailjs.com)**
   - Click "Sign Up"
   - Nhập Email (dùng Gmail của bạn: dngth666@gmail.com)
   - Tạo mật khẩu
   - Click "Create Account"

2. **Xác Nhận Email**
   - Kiểm tra hộp mail
   - Click link activation từ emailjs
   - Xác nhận thành công

3. **Đăng Nhập**
   - Vào emailjs.com
   - Đăng nhập bằng email/password

---

### Bước 2: Lấy PUBLIC KEY

1. **Vào Dashboard**
   - Sau khi đăng nhập, bạn sẽ thấy dashboard

2. **Click "Account" (góc trên trái)**
   - Hoặc vào menu Account Settings

3. **Copy PUBLIC KEY**
   - Sẽ thấy một key dạng: `abc_123_xyz_PUBLIC_KEY_...`
   - Copy value này

4. **Lưu lại**
   - Bạn sẽ dùng key này trong `index.html`

**Ví dụ:**
```
Your Public Key: 4Hg_jPkL6vNm-wQ9xRsTuVwXyZ
```

---

### Bước 3: Tạo Email Service (Gmail)

1. **Vào Email Services**
   - Từ menu trái → "Email Services"
   - Hoặc click "Add New Service"

2. **Chọn Gmail**
   - Service: Gmail
   - Click "Connect Account"

3. **Cho Phép Truy Cập**
   - Gmail sẽ yêu cầu cho phép EmailJS truy cập
   - Click "Allow"
   - Chọn account: dngth666@gmail.com

4. **Lưu Service**
   - Sau khi connect, service sẽ được tạo
   - **Service ID sẽ có dạng**: `service_abc123xyz`
   - Copy ID này

**Ví dụ:**
```
Service ID: service_4Hg7jPkL6vNm
```

---

### Bước 4: Tạo Email Template

1. **Vào Email Templates**
   - Từ menu trái → "Email Templates"

2. **Tạo Template Mới**
   - Click "Create New Template"

3. **Điền Thông Tin**

   **Template Name** (bắt buộc):
   ```
   portfolio_contact
   ```

   **To Email** (ai sẽ nhận email):
   ```
   dngth666@gmail.com
   ```

   **Subject** (tiêu đề email):
   ```
   Tin nhắn mới từ {{from_name}}
   ```

   **Content** (nội dung template):
   ```
   Xin chào,

   Bạn có tin nhắn mới từ trang Portfolio.

   ---
   Tên: {{from_name}}
   Email: {{from_email}}
   
   Tin nhắn:
   {{message}}

   ---
   Gửi từ: Portfolio Cosmos Website
   ```

4. **Test Template** (Optional)
   - Click "Test it"
   - Nhập test data:
     - from_name: "Test User"
     - from_email: "test@example.com"
     - message: "This is a test message"
   - Check email của bạn

5. **Lưu Template**
   - Click "Save"
   - **Template ID sẽ có dạng**: `template_abc123xyz`
   - Copy ID này

**Ví dụ:**
```
Template ID: template_4Hg7jPkL6vNm
```

---

### Bước 5: Cập Nhật Code HTML

**File**: `index.html`

Tìm đoạn này (khoảng dòng 30):

```html
<!-- EmailJS Library -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
<script type="text/javascript">
    (function() {
        emailjs.init({
            publicKey: "YOUR_PUBLIC_KEY_HERE"    <!-- ← THAY ĐỔI ĐÂY
        });
    })();
</script>
```

**Thay** `YOUR_PUBLIC_KEY_HERE` **bằng Public Key của bạn**

Ví dụ:
```html
emailjs.init({
    publicKey: "4Hg_jPkL6vNm-wQ9xRsTuVwXyZ"
});
```

---

### Bước 6: Cập Nhật Code JavaScript

**File**: `js/modules/form.js`

Tìm dòng này (khoảng dòng 49):

```javascript
await emailjs.send('service_portfolio', 'template_portfolio', {
```

**Thay** các ID:

**TRƯỚC:**
```javascript
await emailjs.send('service_portfolio', 'template_portfolio', {
```

**SAU (với ID thực của bạn):**
```javascript
await emailjs.send('service_4Hg7jPkL6vNm', 'template_4Hg7jPkL6vNm', {
```

---

## 🧪 Test EmailJS

### Test trong Website

1. **Mở website** - `http://localhost:8000`
2. **Scroll xuống "Liên Hệ"**
3. **Điền Form:**
   - Tên: "John Doe"
   - Email: "john@example.com"
   - Tin nhắn: "Hello, this is a test message"
4. **Click "Gửi Tin Nhắn"**
5. **Nếu thành công:**
   - ✅ "Tin nhắn đã được gửi!" message
   - 📧 Check email dngth666@gmail.com - nên có message
   - 📧 Email reply-to sẽ set là john@example.com

### Nếu Không Thành Công

**Check điểm này:**

1. **Console Error** (F12 → Console)
   - Copy error message
   - Kiểm tra Public Key benar không?

2. **EmailJS Dashboard**
   - Vào email templates
   - Kiểm tra template có enabled không?
   - Thử "Test it" thủ công

3. **Service Status**
   - Vào Email Services
   - Kiểm tra Gmail service connected?

4. **Network Tab** (F12 → Network)
   - Filter: "emailjs"
   - Check request status (200 = OK)

---

## 📧 Tùy Chỉnh Email Template

### Thêm Trường Khác

Nếu muốn thêm trường (ví dụ: Phone Number):

**1. Update HTML Form** (`index.html`):
```html
<div class="form-group">
    <input type="tel" id="phone" placeholder="Số điện thoại" required>
</div>
```

**2. Update JavaScript** (`js/modules/form.js`):
```javascript
const phoneInput = contactForm.querySelector('#phone');

await emailjs.send('service_ID', 'template_ID', {
    to_email: 'dngth666@gmail.com',
    from_name: name,
    from_email: email,
    phone: phoneInput.value,  // ← Thêm
    message: message,
    reply_to: email
});
```

**3. Update Email Template** (EmailJS):
```
Số điện thoại: {{phone}}
```

---

## 🔒 Bảo Mật Notes

1. **Public Key** - OK để public (dùng cho website)
2. **Private Key** - đừng share (chỉ dùng backend)
3. **API Keys** - đừng commit vào Git
   - Dùng `.env` file
   - Add `.env` vào `.gitignore`

---

## ❓ FAQ

**Q: Có giới hạn email không?**
A: Có. Free plan: 200 emails/tháng. Trên đó cần upgrade.

**Q: Email từ đâu?**
A: Từ Gmail account của bạn (dngth666@gmail.com)

**Q: Tại sao email đến spam?**
A: Gmail mới sẽ vào spam. Thêm sender vào contacts để fix.

**Q: Tôi có thể đổi email nhận?**
A: Có. Trong EmailJS Template → To Email field

---

## 📞 Support

- EmailJS Docs: https://www.emailjs.com/docs/
- FAQs: https://www.emailjs.com/faq/
- Contact: support@emailjs.com

---

**Khúc Chuyên Động:**
- ✅ Form hoạt động mà không cần backend
- ✅ Email gửi trực tiếp từ browser
- ✅ Miễn phí cho 200 emails/tháng
- ✅ Dễ tùy chỉnh template

**Last Updated**: March 8, 2026
