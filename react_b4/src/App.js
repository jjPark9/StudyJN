import './App.css';
import Header from './component/Header';
import Body from './component/Body';
import Footer from './component/Footer';

function ChildComp() {
  return <div>child component</div>;
}

function App() {
  const BodyProps = {
    name: 'jjPark',
    location: 'Jeju',
  };
  return (
    <div className="App">
      <Header />
      <Body {...BodyProps}>
        <ChildComp />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
