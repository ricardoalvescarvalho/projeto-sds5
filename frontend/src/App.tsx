import BarChart from "assets/components/BarChart";
import DonutChart from "assets/components/DonutChart";
import DataTable from "assets/components/DataTable";
import Footer from "assets/components/Footer";
import NavBar from "assets/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">DashBoard Vendas</h1>

        <div className="row px-3" >
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso</h5>
            <BarChart />
          </div>

          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Vendas Totais</h5>
            <DonutChart />
          </div>
        </div>

        <div className="py-3">
          <h2 className="text-primary">Vendas Totais</h2>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
