import ListGhe from './ListGhe/ListGhe';
import {useParams} from 'react-router-dom'
import Ticket from './Ticket/Ticket';
const ScreenPage = () => {
  const { maLichChieu } = useParams ();

  return (
    <div className="flex pt-12">
      <ListGhe maLichChieu={maLichChieu} />
      <Ticket />
    </div>
  );
};

export default ScreenPage;
