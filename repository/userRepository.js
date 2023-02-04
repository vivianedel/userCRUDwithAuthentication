

const userRepository = {

    BuscarTodas: async () => {
        try {
            const todosUsuarios = "Cliente encontrado";
            return todosUsuarios
        } catch (error) {
            return error
        }
    },

    Register: async data => {
        try {
            const userCreated = "Cliente criado";
            return userCreated;
        } catch (error) {

            return error.original.sqlMessage
        }
    },

    Atualizar: async (data, id) => {
     
        try {
            const atualizado = "Atualizado";
            return atualizado
        } catch (error) {
            return error
        }
    },

    SearchById: async (id) => {
        try {
            const userData = "Pesquisa de id";
            return userData
        } catch (error) {
            return error
        }
    },

    PesquisarEmail: async (email) => {
        try {
            let localizado = "Email pesquisado";
            return localizado
        } catch (error) {
            return error
        }
    },

    Deletar: async (where) => {
        try {
            const deletado = "Usuário deletado";
            return deletado
        } catch (error) {
            return error
        }
    }

}

module.exports = userRepository;