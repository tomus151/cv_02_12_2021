import { default as data } from '../data/expirience.json';
import '../styles/WorkExpirience.css';
import RtbWork from './RtbWork';
import Redingo from './Redingo';
const WorkExpirience = () => {
    return (
        <>
            <RtbWork data={data.expirience.rtbhouse} />
            <Redingo data={data.expirience.redingo} />
            {/* {works()} */}
        </>
    );
}
export default WorkExpirience;