import "./App.css";
import Dialog from "../Dialog/Dialog";
import SubmitForm from "../SubmitForm/SubmitForm";
function App() {
  return (
    <div className="page">
      <section className="card-list" />
      <Dialog />
      <section className="form-section" />
      <SubmitForm />
    </div>
  );
}

export default App;
