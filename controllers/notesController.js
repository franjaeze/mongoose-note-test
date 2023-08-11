
import NotesRepository from '../repository/notesRepository.js';

  class NotesController {
    constructor() {
      this.header = { 'content-type': 'application/json' }
      this.body = {}
      this.repository = new NotesRepository();
    }
  
      
    listAll = async (req, res) => {
        try {
            const notesRepository = await this.repository.connect()
           const result = await this.repository.list()
          res.status(200).json(result);
        } catch (error) {
          console.log(error);
          res.status(500).json({ mensaje: 'Error al obtener los Notes' });
        }
      };
    

      search = async (req, res) => {
        try {
          const notesRepository = await this.repository.connect()
          const result = await this.repository.search( req.params.id)
          if (result) {
            res.json(result);
          } else {
            res.status(404).json({ mensaje: 'note not found' });
          }
        } catch (error) {
          res.status(500).json({ mensaje: 'Error getting the note' });
        }
      };
  
    create = async (req, res) => {
      try {
        const notesRepository = await this.repository.connect()
        const result = await this.repository.save(req.body)
        console.log(result)
        if (result) {
          res.status(200).json({ mensaje: 'note susscessfully created' });
        } else {
          res.status(500).json({ mensaje: 'Error creating note' });
        }
      } catch (error) {
        res.status(500).json({ mensaje: error.message });
      }
    };
  
  
    delete = async (req, res) => {
      try {
        const notesRepository = await this.repository.connect()
        const result = await this.repository.delete(req.params.id)
  
        if (result) {
          res.json({ mensaje: 'note deleted' });
        } else {
          res.status(404).json({ mensaje: 'note not found' });
        }
      } catch (error) {
        res.status(500).json({ mensaje: 'Error deleting note' });
      }
    };
   
  
    udpate = async (req, res) => {
      try {
        const notesRepository = await this.repository.connect()
        const result = await this.repository.update(req.params.id, req.body)
        if (result) {
          res.status(200).json({ mensaje: 'note updated' });
        } else {
          res.status(404).json({ mensaje: 'note not found' });
        }
      } catch (error) {
        res.status(500).json({ mensaje: 'Error getting note' });
      }
  
    }
  
  }

  export default NotesController;