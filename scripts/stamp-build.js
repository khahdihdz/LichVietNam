#!/usr/bin/env node
/* Đóng dấu thông tin commit vào index.html và tạo version.json cho GitHub Pages.
   Chạy trong GitHub Actions trước khi upload artifact. */
"use strict";
const fs = require("node:fs");
const cp = require("node:child_process");

const sha = process.env.GITHUB_SHA || "";
const ref = process.env.GITHUB_REF_NAME || "main";
if (!sha) {
  console.error("Thiếu GITHUB_SHA — script chỉ dùng trong GitHub Actions.");
  process.exit(1);
}
const short = sha.slice(0, 7);
let message = "";
let commitDate = "";
try {
  message = cp.execSync("git log -1 --pretty=%s", { encoding: "utf8" }).trim();
  commitDate = cp.execSync("git log -1 --pretty=%cI", { encoding: "utf8" }).trim();
} catch (err) {
  console.warn("Không đọc được git log:", err.message);
}
if (!commitDate) commitDate = new Date().toISOString();

const esc = value => String(value)
  .replace(/&/g, "&amp;")
  .replace(/"/g, "&quot;")
  .replace(/</g, "&lt;")
  .replace(/>/g, "&gt;");

let html = fs.readFileSync("index.html", "utf8");

function setMeta(name, value) {
  const re = new RegExp('(<meta name="' + name + '" content=")[^"]*(")');
  if (!re.test(html)) throw new Error("Không tìm thấy meta " + name);
  html = html.replace(re, (_, open, close) => open + esc(value) + close);
}
setMeta("app-build-commit", sha);
setMeta("app-build-short", short);
setMeta("app-build-date", commitDate);
setMeta("app-build-message", message);
setMeta("app-build-ref", ref);

// Cache-bust ảnh chia sẻ theo commit để crawler lấy đúng bản mới.
for (const key of ["og:image", "og:image:secure_url"]) {
  const re = new RegExp('(<meta property="' + key + '" content="https://lichvn\\.pages\\.dev/og-image\\.png)(?:\\?v=[^"]*)?(")');
  if (!re.test(html)) throw new Error("Không tìm thấy meta " + key);
  html = html.replace(re, (_, open, close) => open + "?v=" + short + close);
}
const twRe = /(<meta name="twitter:image" content="https:\/\/lichvn\.pages\.dev\/og-image\.png)(?:\?v=[^"]*)?(")/;
if (!twRe.test(html)) throw new Error("Không tìm thấy meta twitter:image");
html = html.replace(twRe, (_, open, close) => open + "?v=" + short + close);

fs.writeFileSync("index.html", html);

const version = (html.match(/const APP_VERSION="([^"]+)"/) || [])[1] || "unknown";
const info = {
  name: "Lịch Việt Nam",
  version,
  commit: sha,
  short,
  ref,
  date: commitDate,
  message,
  source: "pages"
};
fs.writeFileSync("version.json", JSON.stringify(info, null, 2) + "\n");
console.log(`Đã đóng dấu ${short} (${version}) — ${message}`);
