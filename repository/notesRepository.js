import Mongoose_dao from './mongoose_DAO.js';
import Note from "../models/notes.js"

 class NotesRepository {
  constructor() {
    this.notes = new Mongoose_dao();
    this.schema = Note;
  }

  async connect() {
    await this.notes.connect(this.schema);
  }

  async desconnect() {
    console.log("Desconexión a BD!!!!");
    await this.notes.desconnect('notes');
  }
  list() {
    return this.notes.list();
  }
  search(id = null) {
    return this.notes.search(id);
  }
  save(item) {
    return this.notes.save(item);
  }

  delete(id) {
    return this.notes.delete(id);
  }

  update(id, itemUpdate = {}) {
    return this.notes.update(id, itemUpdate);
  }





};

export default NotesRepository;
