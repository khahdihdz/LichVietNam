/**
 * Lịch nghỉ lễ theo năm — dữ liệu được tách khỏi danh sách ngày truyền thống.
 * Chỉ đưa vào đây các ngày có lịch cụ thể đã được cơ quan có thẩm quyền công bố.
 * Nguồn tham khảo 2026: Cổng TTĐT Chính phủ / Bộ Nội vụ.
 */
window.VN_HOLIDAY_SCHEDULE = {
  2026: [
    {date:"2026-01-01", name:"Tết Dương lịch", type:"Nghỉ lễ chính thức", official:true, scope:"Theo Điều 112 Bộ luật Lao động"},
    {date:"2026-02-14", name:"Tết Nguyên Đán", type:"Nghỉ Tết chính thức", official:true, scope:"Ngày nghỉ thứ nhất trong 05 ngày nghỉ Tết 2026"},
    {date:"2026-02-15", name:"Tết Nguyên Đán", type:"Nghỉ Tết chính thức", official:true, scope:"Ngày nghỉ thứ hai trong 05 ngày nghỉ Tết 2026"},
    {date:"2026-02-16", name:"Tết Nguyên Đán", type:"Nghỉ Tết chính thức", official:true, scope:"Ngày nghỉ thứ ba trong 05 ngày nghỉ Tết 2026"},
    {date:"2026-02-17", name:"Tết Nguyên Đán", type:"Nghỉ Tết chính thức", official:true, scope:"Ngày nghỉ thứ tư trong 05 ngày nghỉ Tết 2026"},
    {date:"2026-02-18", name:"Tết Nguyên Đán", type:"Nghỉ Tết chính thức", official:true, scope:"Ngày nghỉ thứ năm trong 05 ngày nghỉ Tết 2026"},
    {date:"2026-04-26", name:"Giỗ Tổ Hùng Vương", type:"Nghỉ lễ chính thức", official:true, scope:"10/3 âm lịch; rơi vào Chủ Nhật"},
    {date:"2026-04-27", name:"Nghỉ bù Giỗ Tổ Hùng Vương", type:"Nghỉ bù", official:true, scope:"Do ngày lễ trùng ngày nghỉ hằng tuần"},
    {date:"2026-04-30", name:"Ngày Chiến thắng", type:"Nghỉ lễ chính thức", official:true, scope:"Theo Điều 112 Bộ luật Lao động"},
    {date:"2026-05-01", name:"Ngày Quốc tế Lao động", type:"Nghỉ lễ chính thức", official:true, scope:"Theo Điều 112 Bộ luật Lao động"},
    {date:"2026-09-01", name:"Quốc khánh", type:"Nghỉ lễ chính thức", official:true, scope:"Ngày liền kề trước 02/9; phương án công chức, viên chức 2026"},
    {date:"2026-09-02", name:"Quốc khánh", type:"Nghỉ lễ chính thức", official:true, scope:"Ngày Quốc khánh theo Điều 112 Bộ luật Lao động"},
    {date:"2026-11-24", name:"Ngày Văn hóa Việt Nam", type:"Ngày nghỉ chính thức", official:true, scope:"Theo Nghị quyết 28/2026/QH16; người lao động nghỉ và hưởng nguyên lương"}
  ]
};

window.getAnnualHoliday = function(d,m,y){
  const iso = y + "-" + String(m).padStart(2,"0") + "-" + String(d).padStart(2,"0");
  const list = window.VN_HOLIDAY_SCHEDULE[y] || [];
  return list.find(h => h.date === iso) || null;
};

window.getAnnualHolidaysForYear = function(y){
  return window.VN_HOLIDAY_SCHEDULE[y] || [];
};
