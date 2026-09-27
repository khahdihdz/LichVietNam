# 🇻🇳 Lịch Việt Nam

Ứng dụng web/PWA **Lịch Việt Nam** dùng để tra cứu và chuyển đổi lịch Dương – Âm theo múi giờ Việt Nam (UTC+7).

> Mục tiêu của dự án là cung cấp một lịch Việt Nam nhẹ, chạy trực tiếp trên trình duyệt và có thể sử dụng offline sau khi PWA được cài đặt.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![PWA](https://img.shields.io/badge/PWA-ready-5a0.svg)](manifest.json)

## ℹ️ Thông tin repository

| Mục | Thông tin |
|---|---|
| **Tên dự án** | Lịch Việt Nam |
| **Repository** | `khahdihdz/LichVietNam` |
| **Loại** | Web app / Progressive Web App (PWA) |
| **Ngôn ngữ chính** | HTML, CSS, JavaScript |
| **Giấy phép** | MIT |
| **Múi giờ lịch** | UTC+7 — Việt Nam |
| **Chạy** | Trình duyệt hiện đại, Android, iOS, máy tính |
| **Offline** | Có, thông qua Service Worker |
| **Backend** | Không yêu cầu |
| **Trang web** | https://khahdihdz.github.io |
| **Mã nguồn** | https://github.com/khahdihdz/LichVietNam |

### 🧭 Phạm vi dự án

Lịch Việt Nam tập trung vào trải nghiệm tra cứu lịch Việt Nam trên web: lịch Dương – Âm, Can Chi, tiết khí, giờ Hoàng đạo, ngày lễ và chuyển đổi ngày. Ứng dụng được thiết kế theo hướng **nhẹ, không phụ thuộc framework, ưu tiên riêng tư và có thể sử dụng offline**.

### 📲 PWA & chia sẻ

Ứng dụng có Web App Manifest, Service Worker, biểu tượng cài đặt và metadata Open Graph/Twitter Card để hiển thị tiêu đề, mô tả và hình ảnh khi chia sẻ liên kết trên các nền tảng hỗ trợ.

## ✨ Tính năng

- 📅 Xem lịch Dương – Âm theo ngày.
- 🔄 Chuyển đổi Dương lịch ↔ Âm lịch.
- 🌓 Hiển thị ngày âm, tháng nhuận và Can Chi.
- ☀️ Hiển thị tiết khí.
- 🕐 Hiển thị giờ Hoàng đạo theo bảng truyền thống.
- 🌙 Hiển thị pha Mặt Trăng ở mức ước tính theo ngày âm lịch.
- 🎉 Tra cứu ngày nghỉ lễ, Tết theo từng năm và phân biệt với ngày kỷ niệm/phong tục.
- 🇻🇳 Có dữ liệu lịch nghỉ cụ thể năm 2026, gồm Tết, Giỗ Tổ, 30/4, 1/5, Quốc khánh và Ngày Văn hóa Việt Nam.
- 🗓️ Xem lịch tháng và lịch năm.
- 🌓 Giao diện sáng/tối.
- 📱 Responsive cho điện thoại, máy tính bảng và máy tính.
- 📲 Hỗ trợ PWA, Service Worker và biểu tượng cài đặt.
- ⚡ Không cần framework hoặc backend; phần lịch chạy hoàn toàn phía trình duyệt.

## 🧮 Thuật toán lịch Âm

Phần tính toán lịch Âm – Dương trong `calendar-engine.js` sử dụng **thuật toán Hồ Ngọc Đức (Ho Ngoc Duc)**, được triển khai cho múi giờ UTC+7.

Các chức năng chính gồm:

- Julian Day.
- Tính sóc (New Moon).
- Tính kinh độ Mặt Trời.
- Xác định tháng 11 âm lịch.
- Xác định tháng nhuận.
- Chuyển đổi Dương lịch ↔ Âm lịch.
- Tính Can Chi năm/ngày.

Dự án không nên được xem là văn bản pháp lý hoặc nguồn dữ liệu chính thức của cơ quan nhà nước. Khi cần sử dụng cho mục đích pháp lý, hành chính hoặc xác định ngày nghỉ, hãy đối chiếu với văn bản/quy định chính thức áp dụng cho năm tương ứng.

## 🧪 Kiểm thử

Phần lõi có thể chạy độc lập bằng Node.js:

```bash
node --test calendar-engine.test.js
```

Bộ kiểm thử hiện bao gồm các trường hợp:

- 27/09/2026 → 17/08 âm lịch, năm Bính Ngọ.
- Chuyển đổi Dương → Âm → Dương.
- Tết Nguyên Đán 2026.
- Năm có tháng nhuận, ví dụ 2023.
- Kiểm tra các mốc liên tiếp để phát hiện lệch ngày.

> Với các năm có tháng nhuận, nên bổ sung thêm bộ dữ liệu tham chiếu độc lập cho nhiều năm trước khi dùng kết quả làm nguồn dữ liệu chính thức.

## 🚀 Chạy cục bộ

Dự án là web tĩnh nên có thể phục vụ trực tiếp bằng bất kỳ HTTP server nào.

Ví dụ với Python:

```bash
git clone https://github.com/khahdihdz/LichVietNam.git
cd LichVietNam
python3 -m http.server 8080
```

Sau đó mở:

```
http://localhost:8080
```

Không nên mở trực tiếp bằng `file://` nếu muốn kiểm tra đầy đủ PWA/Service Worker.

## 📁 Cấu trúc chính

```
LichVietNam/
├── .github/              # GitHub Actions / cấu hình dự án
├── calendar-engine.js    # Engine lịch Âm – Dương có thể tái sử dụng
├── calendar-engine.test.js
├── index.html             # Giao diện web/PWA
├── holiday-schedule.js    # Lịch nghỉ chính thức theo từng năm
├── manifest.json          # PWA manifest
├── sw.js                  # Service Worker
├── icon-192.png           # Icon PWA 192×192
├── icon-512.png           # Icon PWA 512×512
├── robots.txt
├── sitemap.xml
├── LICENSE               # MIT License
└── README.md
```

## 🔐 Quyền riêng tư

Ứng dụng không yêu cầu tài khoản và không cần máy chủ backend để thực hiện việc tính lịch. Việc chuyển đổi ngày được thực hiện trên thiết bị của người dùng.

Nếu triển khai phiên bản có thêm analytics, quảng cáo hoặc dịch vụ bên thứ ba, phần triển khai đó cần công bố rõ trong tài liệu và chính sách riêng.

## 🤝 Đóng góp

Pull request và issue được hoan nghênh.

Khi đóng góp vào phần tính lịch, vui lòng:

1. Không làm thay đổi sai lệch kết quả đã được kiểm thử.
2. Bổ sung test cho các năm/mốc mới.
3. Đặc biệt kiểm tra các năm có tháng nhuận.
4. Giữ múi giờ Việt Nam (UTC+7) khi xử lý lịch Việt Nam.
5. Ghi rõ nguồn tham khảo nếu bổ sung thuật toán hoặc dữ liệu từ dự án khác.

## 🇻🇳 Dữ liệu ngày lễ và lịch nghỉ theo năm

Dự án tách dữ liệu thành hai nhóm:

1. **Ngày nghỉ chính thức theo năm** trong `holiday-schedule.js`: chỉ ghi các ngày có lịch cụ thể đã được công bố.
2. **Ngày kỷ niệm, truyền thống và phong tục** trong `index.html`: dùng để tra cứu văn hóa, không mặc nhiên là ngày nghỉ hưởng nguyên lương.

Dữ liệu năm 2026 được đối chiếu với thông tin công bố trên Cổng Thông tin điện tử Chính phủ và các thông báo liên quan của Bộ Nội vụ. Năm chưa có lịch nghỉ cụ thể sẽ không được ứng dụng tự suy đoán.

> Ứng dụng là công cụ tra cứu tiện ích, không thay thế văn bản pháp luật hoặc thông báo nghỉ lễ chính thức. Khi cần dùng cho mục đích hành chính, lao động hoặc pháp lý, hãy đối chiếu văn bản áp dụng cho đúng năm và đối tượng.

## 📚 Nguồn tham khảo và ghi nhận

- Phần chuyển đổi lịch sử dụng thuật toán thường được biết đến với tên **Ho Ngoc Duc Vietnamese Lunar Calendar algorithm**.
- Các bảng ngày lễ, nội dung giao diện và phần mã riêng của dự án thuộc phạm vi bản quyền được ghi trong `LICENSE`.
- Nếu một tệp hoặc thành phần trong tương lai sử dụng giấy phép khác, giấy phép riêng của thành phần đó sẽ được ưu tiên áp dụng cho thành phần tương ứng.

## 📄 Giấy phép

Mã nguồn của dự án được phát hành theo **MIT License**. Xem đầy đủ tại [LICENSE](LICENSE).

MIT cho phép sử dụng, sao chép, sửa đổi, phân phối và sử dụng thương mại, với điều kiện giữ lại thông báo bản quyền và giấy phép. citeturn0search6turn0search10

---

**Lịch Việt Nam** · [khahdihdz.github.io](https://khahdihdz.github.io)
