
import {  useSelector } from 'react-redux';
import InfoGheItem from './InfoGheItem';



const InfoGhe = ({maLichChieu}) => {
  
    const { listGheDangDat, infoGhe } = useSelector(state => state.movieSlice);
    
   
    console.log(listGheDangDat);
    console.log(infoGhe)
   
    return (
        <div className="p-4">
          
            <div  className="mb-4">
                <h3 className="text-xl font-bold mb-2">Thông tin ghế</h3>
                <div className="space-y-2">
                
                        <InfoGheItem thongTinGhe = {infoGhe}  danhSachGhe={listGheDangDat} />
                    
                </div>
            </div>
            
        </div>
    );
}

export default InfoGhe;