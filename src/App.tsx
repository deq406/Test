import "./App.scss";
import { Card } from "./components/Card/Card";
import { Table } from "./components/Table/Table";

const App: React.FC = () => {
  return (
    <div className="App">
      <Card></Card>
      <Table></Table>
    </div>
  );
};

export default App;
