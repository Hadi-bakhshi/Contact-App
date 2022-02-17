import { Switch, Route } from "react-router-dom";
import "./App.css";
import AddContanctForm from "./Components/AddContactForm/AddContanctForm";
import ContactList from "./Components/ContactList/ContactList";
import ContactDetail from "./Components/ContactDetail/ContactDetail";
import EditContact from "./Components/EditContact/EditContact";

function App() {
  return (
    <main className="h-screen w-screen text-center">
      <h1 className="border-b-2 border-indigo-300 text-lg font-bold py-4">
        Contact App
      </h1>
      <Switch>
        <Route path="/edit/:id" component={EditContact} />
        <Route path="/user/:id" component={ContactDetail} />
        <Route path="/add" component={AddContanctForm} />
        <Route path="/" exact component={ContactList} />
      </Switch>
    </main>
  );
}

export default App;
