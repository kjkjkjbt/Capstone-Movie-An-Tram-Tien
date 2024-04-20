import React from 'react';


// Component riêng để hiển thị thông tin của một ghế
const InfoGheItem = ({ danhSachGhe, thongTinGhe }) => {
    // Tính tổng giá vé của tất cả các ghế đã chọn
    const tongGiaVe = danhSachGhe.reduce((total, ghe) => total + ghe.giaVe, 0);
    // Cộng chuỗi các ghế đã chọn
    const chuoiGheDaChon = danhSachGhe.map(ghe => ghe.tenGhe).join(', ');
    
    return (
        <div>

            <h3><span className="font-bold">Gia Ve:</span> {tongGiaVe}</h3>
            <div>
                <p><span className="font-bold">Tên Cum rap:</span> {thongTinGhe.tenCumRap}</p>
                <p><span className="font-bold">Địa chỉ:</span> {thongTinGhe.diaChi}</p>
                <p><span className="font-bold">Tên Rap:</span> {thongTinGhe.tenRap}</p>
                <p><span className="font-bold">Ngày và giờ chiếu:</span> {thongTinGhe.ngayChieu}</p>
                <p><span className="font-bold">Tên Phim:</span> {thongTinGhe.tenPhim}</p>
                <p><span className="font-bold">Chon:</span> {chuoiGheDaChon}</p>
                
           
            </div>
        
        </div>)
}

export default InfoGheItem;