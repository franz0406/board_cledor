import Table from '../container/Table';
import Btn from '../components/Btn';
import Write from '../components/Write';
import Pager from '../components/Pager';

function Home() {
  return (
    <div className="App">
      <section>
        <h1>공지사항</h1>
        <Table />
        <Btn name="목록보기" />
        <Write />     
        <Pager />
      </section>      
    </div>
  );
}

export default Home;