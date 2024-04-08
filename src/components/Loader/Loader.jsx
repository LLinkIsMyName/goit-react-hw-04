import { Puff } from 'react-loader-spinner';
import style from "./Loader.module.css";
const Loader = () => {
  return (
      
      <div className={style.loaderStyle}>
     <Puff
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
      </div>);
};

export default Loader;