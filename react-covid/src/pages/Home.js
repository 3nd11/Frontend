import Covid from "../components/Main/Covid";
import Covid_Provinsi from "../components/Main/Covid_Provinsi";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AddForm from "../components/Main/AddForm";
import Navbar from "../components/Navbar";


function Main() {
  return (
    <main>
      <Hero />
      <Covid />
      <Covid_Provinsi />
      <AddForm />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
