export const Chord = {
    logar({ email, senha }) {
        return {
            url: '/logar',
            metodo: 'post',
            data: { email, senha }
        }
    },

    allTarefas() {
        // a resposta é um json com bastante lixo,
        // só interessa o campo tarefas.
        return {
            url: '/cardapio',
            metodo: 'get'
        }
    },


    iniciarTimer(tarefaId) {
        return {
            url: `/tarefas/${tarefaId}/timer/iniciar`,
            metodo: 'patch'
        }
    },

    pausarTarefa(tarefaId, justificativa) {
        return {
            url: `/tarefas/${idTarefa}/pausar`,
            metodo: 'patch',
            data: justificativa,
        }
    },

    resumirTarefa(tarefaId) {
        return {
            url: `/tarefas/${idTarefa}/resumir`,
            metodo: 'patch',
        }
    },

    concluirTarefa(tarefaId, tempoRealizadoMinutos) {
        const parametroOpcional = tempoRealizadoMinutos ? `?tempoRealizadoMinutos=${tempoRealizadoMinutos}` : ''

        return {
            url: `/tarefas/${idTarefa}/concluir${parametroOpcional}`,
            metodo: 'patch',
            headers: { 'Content-type': 'text/plain' }
        }
    },

    desconcluirTarefa(tarefaId) {
        return {
            url: `/tarefas/${idTarefa}/desconcluir`,
            metodo: 'patch',
            headers: { 'Content-type': 'text/plain' }
        }
    },
}