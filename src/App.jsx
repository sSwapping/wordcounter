import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-neutral-950 to-neutral-900'>
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
