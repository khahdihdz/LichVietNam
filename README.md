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
| **Trang web** | https://lichvn.pages.dev |
| **GitHub Pages** | https://khahdihdz.github.io/LichVietNam/ |
| **Mã nguồn** | https://github.com/khahdihdz/LichVietNam |
| **Triển khai** | Cloudflare Pages + GitHub Actions Pages |

### 🧭 Phạm vi dự án

Lịch Việt Nam tập trung vào trải nghiệm tra cứu lịch Việt Nam trên web: lịch Dương – Âm, Can Chi, tiết khí, giờ Hoàng đạo, ngày lễ và chuyển đổi ngày. Ứng dụng được thiết kế theo hướng **nhẹ, không phụ thuộc framework, ưu tiên riêng tư và có thể sử dụng offline**.

### 📲 PWA & chia sẻ

Ứng dụng có Web App Manifest, Service Worker, biểu tượng cài đặt và metadata Open Graph/Twitter Card để hiển thị tiêu đề, mô tả và ảnh thumbnail `og-image.png` (1200×630) khi chia sẻ liên kết trên các nền tảng hỗ trợ. Workflow GitHub Pages tự đóng dấu commit hiện tại vào `index.html` và tạo `version.json`, đồng thời thêm `?v=<commit>` vào URL ảnh chia sẻ để crawler lấy đúng bản mới.

## ✨ Tính năng

- 📅 Xem lịch Dương – Âm theo ngày.
- 🔎 Tra cứu **bất kỳ ngày nào** (1800–2199): chọn ngày bằng ô lịch, nút ngày trước/sau, phím ← →, hoặc nhấn vào một ngày trong lịch tháng/lịch năm.
- 🔗 Liên kết trực tiếp tới một ngày dạng `#ngay=YYYY-MM-DD` để chia sẻ hoặc mở lại đúng ngày.
- 🔄 Chuyển đổi Dương lịch ↔ Âm lịch.
- 🌓 Hiển thị ngày âm, tháng nhuận và Can Chi.
- ☀️ Hiển thị tiết khí.
- 🕐 Hiển thị giờ Hoàng đạo theo bảng truyền thống.
- 🌙 Hiển thị pha Mặt Trăng ở mức ước tính theo ngày âm lịch.
- 🎉 Tra cứu ngày nghỉ lễ, Tết theo từng năm và phân biệt với ngày kỷ niệm/phong tục.
- 🇻🇳 Có dữ liệu lịch nghỉ cụ thể năm 2026, gồm Tết, Giỗ Tổ, 30/4, 1/5, Quốc khánh và Ngày Văn hóa Việt Nam.
- 🗓️ Xem lịch tháng và lịch năm.
- ℹ️ Tab Giới thiệu: phiên bản, tính năng, lịch pháp, quyền riêng tư, hướng dẫn cài đặt và liên kết.
- 📝 Ghi chú theo từng ngày và sự kiện có giờ, hỗ trợ lặp hằng năm theo dương lịch hoặc âm lịch; đánh dấu trên lịch tháng.
- 🪟 Widget: giao diện gọn cho hôm nay trong cửa sổ nổi (Document Picture-in-Picture). Tính năng chỉ xuất hiện trên trình duyệt hỗ trợ; trình duyệt không hỗ trợ sẽ ẩn mục này.
- 🌓 Giao diện sáng/tối.
- 📱 Responsive cho điện thoại, máy tính bảng và máy tính.
- 📲 Hỗ trợ PWA, Service Worker và biểu tượng cài đặt.
- ⚡ Không cần framework hoặc backend; phần lịch chạy hoàn toàn phía trình duyệt.

## 🔎 Tra cứu ngày bất kỳ

Trang đầu mặc định hiển thị hôm nay. Để xem một ngày khác:

1. Mở ô chọn ngày ở đầu thẻ và chọn ngày mong muốn (hỗ trợ 1800–2199).
2. Hoặc dùng nút `‹` / `›`, phím mũi tên `←` / `→` trên bàn phím.
3. Hoặc nhấn vào một ngày trong **Lịch tháng** / **Lịch năm**; kết quả chuyển đổi ở tab **Chuyển đổi** cũng có nút “Xem chi tiết ngày này”.

Ngày đang xem được ghi lên URL dưới dạng `#ngay=YYYY-MM-DD`, ví dụ:

```
https://lichvn.pages.dev/#ngay=2026-10-05
```

Nhờ đó có thể lưu, chia sẻ hoặc mở lại đúng ngày; khi chuyển sang các mục khác, phần hash được xoá. Mọi thông tin (âm lịch, Can Chi, tiết khí, giờ Hoàng đạo, ngày lễ) đều được tính lại theo ngày đã chọn.

## 📝 Ghi chú, sự kiện và Widget

- **Ghi chú**: mở một ngày bất kỳ, nhập vào ô “Ghi chú ngày…” và bấm Lưu (hoặc để tự lưu sau khi ngừng gõ). Ghi chú được đánh dấu bằng chấm đỏ nhỏ trên lịch tháng và liệt kê trong tab **Ghi chú & sự kiện**.
- **Sự kiện**: thêm ngay trong trang ngày hoặc trong tab **Ghi chú & sự kiện**, có thể kèm giờ và chọn lặp:
  - Không lặp,
  - Hằng năm theo dương lịch,
  - Hằng năm theo âm lịch (dùng ngày/tháng âm của ngày tạo).
- **Widget** (`?view=widget` hoặc tab 🪟 Widget): hiển thị gọn ngày hôm nay, Can Chi, tiết khí, ghi chú, sự kiện trong ngày và lịch sắp tới.
  - Chỉ hiển thị khi trình duyệt hỗ trợ **Document Picture-in-Picture** (Chrome/Edge máy tính). Trên trình duyệt không hỗ trợ, mục Widget và lối tắt tương ứng bị ẩn/loại bỏ.
  - Nút **Cửa sổ nổi** mở widget luôn hiển thị trên màn hình, có nút cập nhật nội dung.
- Dữ liệu ghi chú/sự kiện chỉ lưu trong `localStorage` của trình duyệt trên thiết bị, không gửi lên máy chủ và không đồng bộ giữa các thiết bị.

> Widget gốc trên màn hình chính Android/iOS cần ứng dụng native hoặc lớp đóng gói; PWA thuần web không đăng ký được widget hệ điều hành. Vì vậy dự án chỉ cung cấp widget cửa sổ nổi khi trình duyệt hỗ trợ, thay vì hiển thị một mục không dùng được.

## 🚀 Triển khai & thông tin bản dựng

Dự án được triển khai ở hai nơi:

- **Cloudflare Pages**: https://lichvn.pages.dev — bản chính.
- **GitHub Pages**: https://khahdihdz.github.io/LichVietNam/ — workflow `.github/workflows/pages.yml`.

Workflow GitHub Pages chạy khi push lên `main`:

1. Chạy `node --test calendar-engine.test.js`.
2. Chạy `scripts/stamp-build.js` để điền commit, thời điểm và nội dung commit vào các thẻ `<meta name="app-build-*">`, thêm `?v=<commit>` vào ảnh chia sẻ và tạo `version.json`.
3. Upload artifact tĩnh và deploy bằng `actions/deploy-pages`.

Tab **Giới thiệu** đọc thông tin bản dựng từ các thẻ meta ở trên. Nếu `version.json` không có (ví dụ bản Cloudflare), ứng dụng gọi GitHub API công khai một lần và lưu cache 10 phút để hiển thị commit gần nhất; khi offline hoặc API lỗi, thông tin bản dựng chỉ hiển thị “đang cập nhật…”.

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
├── .github/workflows/    # CI và Deploy GitHub Pages
├── scripts/
│   └── stamp-build.js    # Đóng dấu commit + tạo version.json khi deploy
├── calendar-engine.js    # Engine lịch Âm – Dương có thể tái sử dụng
├── calendar-engine.test.js
├── index.html             # Giao diện web/PWA
├── holiday-schedule.js    # Lịch nghỉ chính thức theo từng năm
├── manifest.json          # PWA manifest
├── sw.js                  # Service Worker
├── icon-192.png           # Icon PWA 192×192
├── icon-512.png           # Icon PWA 512×512
├── og-image.png           # Ảnh chia sẻ 1200×630
├── robots.txt
├── sitemap.xml
├── LICENSE               # MIT License
└── README.md
```

## 🔐 Quyền riêng tư

Ứng dụng không yêu cầu tài khoản và không cần máy chủ backend để thực hiện việc tính lịch. Việc chuyển đổi ngày được thực hiện trên thiết bị của người dùng. Ghi chú và sự kiện do người dùng tạo chỉ lưu trong `localStorage` trên thiết bị/trình duyệt hiện tại; xoá dữ liệu trình duyệt hoặc gỡ ứng dụng có thể xoá các dữ liệu này.

Tab Giới thiệu có thể gọi GitHub API công khai (`api.github.com`) để lấy commit gần nhất khi `version.json` không tồn tại; request này không gửi nội dung ghi chú, sự kiện hay dữ liệu cá nhân. Nếu triển khai phiên bản có thêm analytics, quảng cáo hoặc dịch vụ bên thứ ba khác, phần triển khai đó cần công bố rõ trong tài liệu và chính sách riêng.

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

**Lịch Việt Nam** · [lichvn.pages.dev](https://lichvn.pages.dev) · [GitHub Pages](https://khahdihdz.github.io/LichVietNam/)
