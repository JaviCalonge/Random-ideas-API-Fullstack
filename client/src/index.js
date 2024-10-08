//import "@fortawesome/fontawesome-free/css/all.css";
import Modal from "./components/Modal";
import IdeaForm from "./components/IdeasForm";
import IdeaList from "./components/IdeaList";
import "./css/style.css";

new Modal();
const ideaForm = new IdeaForm();
ideaForm.render();
new IdeaList();
