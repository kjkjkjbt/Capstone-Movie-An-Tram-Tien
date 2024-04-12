import ListGhe from './ListGhe/ListGhe';
import {useParams} from 'react-router-dom'
import Tiket from './Tiket/Tiket';
const ScreenPage = () => {
  const { maLichChieu } = useParams ();

  return (
    <div className="flex pt-12">
      <ListGhe maLichChieu={maLichChieu} />
      <Tiket />
    </div>
  );
};

export default ScreenPage;
