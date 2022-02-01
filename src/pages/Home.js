import Table from '../container/Table';
import Btn from '../components/Btn';
import Write from '../components/Write';
import Pager from '../components/Pager';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App">
      <section>
        <h1>공지사항</h1>
        <Table />
        <Link to="/board"><Btn name="목록보기" /></Link>
        <Write />     
        <Pager />
      </section>      
    </div>
  );
}

export default Home;