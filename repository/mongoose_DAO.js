import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()




class Mongoose_dao {
    constructor() {
        this.schema = null;
        this.client = null;
    }



    async connect(schema) {
        try {

            this.cliente = await mongoose.connect(process.env.MONGO_URL)
            this.schema = schema;
            console.log('conectado a la base de datos')

        } catch (error) {
            console.log(error);
            throw new Error('Error al conectar a la base de datos');
        }
    }

    async desconnect() {
        try {
            await this.cliente.close()

        } catch (error) {
            console.log("Error desconectando");
        }
    }

    //////////////////////////////////////////////////////////////////
    async list() {
        try {
            console.log(this.schema)
            const documentos = await this.schema.find();
            return documentos;
        } catch (error) {
            console.log(error);
            throw new Error('Error al obtener la lista de elementos de la colección');
        }
    }

    async search(id = null) {
        /*   if (!id) {
              return this.coleccion;
          } */
        try {
            /*  const objectId = new ObjectId(id); */
            const result = await this.schema.findOne({ _id: id });
            console.log('el resultado de la busqueda ' + result)
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error al buscar el elemento en el turno');
        }
    }

    async save(item) {
        try {
            const newItem = new this.schema(item);
            const result = await newItem.save()
            console.log('el resultado del result es ' + result)
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error al guardar el elemento en la colección');
        }
    }

    async delete(id = null) {
        try {
            const result = await this.schema.findByIdAndRemove(id)
            console.log(result)
            if (result) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            throw new Error('Error al eliminar el elemento de la colección');
        }
    }


    async update(id, itemUpdated) {
        try {
            const result = await this.schema.findByIdAndUpdate(id, itemUpdated, { new: true });
            return result;
        } catch (error) {
            console.log(error);
            throw new Error('Error al actualizar el elemento de la colección');
        }
    }



};

export default Mongoose_dao;