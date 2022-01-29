import { Link } from 'react-router-dom';
import Btn from './Btn';

function Write() {
    return (
      <>
        <Link to="/form"><Btn name="글쓰기"/></Link>        
      </>
    );
}

export default Write;



