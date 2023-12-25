import Container from "./UI/Container";
import Header from "./components/Header";
import StoreItems from "./components/StoreItems";
import TestStand from "./components/TestStand/TestStand";
import ShoppingCartProvider from "./store/ShoppingCartProvider";

function App() {
  return (
    // <ShoppingCartProvider>
    //   <Header />
    //   <Container>
    //     <StoreItems />
    //   </Container>
    // </ShoppingCartProvider>

    <TestStand />
  );
}

export default App;
