import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import { movieSer } from '../../service/movieSer';
import { NavLink } from 'react-router-dom';


const DetailPageSchedule = ({ idMovie }) => {
  const [dataHeThongRap, setDataHeThongRap] = useState([]);
  const fetchDataSchedule = async () => {
    try {
      let data = await movieSer.getScheduleMovie(idMovie);
      console.log('data schedule: ', data);
      let dataSchedule = data.data.content.heThongRapChieu;
      setDataHeThongRap(dataSchedule);
    } catch (error) {
      console.log('error: ', error);
    }
  };
  useEffect(() => {
    fetchDataSchedule()
  }, []);
  const renderLichChieuPhim = (dataLichChieuPhim) => {
    return dataLichChieuPhim.map((dataLcp, i) => {
      return (
        <NavLink
          to={`/screen/${dataLcp.maLichChieu}`}
          key={i}
          className="border p-2 rounded text-white priority-class"
          
        >
          {dataLcp.ngayChieuGioChieu}
        </NavLink>
      );
    });
  };

  const renderCumRapChieu = (dataCumRapChieu) => {
    console.log('dataCumRapChieu: ', dataCumRapChieu);
    return dataCumRapChieu?.map((dataCumRap, i) => {
      return (
        <div key={i} className="p-3 border text-white ">
          <p className="text-xl my-4 text-amber-500">{dataCumRap.tenCumRap}</p>
          <div >{renderLichChieuPhim(dataCumRap.lichChieuPhim)}</div>
        </div>
      );
    });
  };

  const renderHeThongRap = () => {
    return dataHeThongRap.map((dataHtr, i) => {
      return {
        key: i,
        label: dataHtr.tenHeThongRap,
        children: renderCumRapChieu(dataHtr.cumRapChieu),
      };
    });
  };

  return (
    <div  className='bg-cover bg-center relative' style={{ backgroundImage: "url('/img/krists-luhaers-AtPWnYNDJnM-unsplash.jpg')" }}>
      <div className="absolute inset-0 bg-gray-900 opacity-90 backdrop-filter backdrop-blur-md"></div>
    <div className="container mx-auto py-8 " >
      <Tabs
      className='text-white'
        tabPosition="left"
        defaultActiveKey="1"
        items={renderHeThongRap()}
        tabBarStyle={{ color: 'white', fontWeight: 'bold' }}
      />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
    </div>
  );
};

export default DetailPageSchedule;
