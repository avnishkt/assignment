import logo from './logo.svg';
import './App.css';
import useFetch from './hooks/useFetch';
import Published from './componnets/Published';
import Unpublished from './componnets/unpublised';
import P from './componnets/All';
import "./style.scss";

function App() {
  const { data, loading } = useFetch('dishes');

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
    <P></P>

      <Published></Published>
      <Unpublished></Unpublished>
    </div>
  );
}

export default App;
