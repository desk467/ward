import webservice from './webservice'

export class Login {

    static async logar(email, password) {
        return await webservice().post('/logar', { email, password });
    }

    static async allTarefas() {
        // a resposta é um json com bastante lixo, só interessa o campo tarefas.
        return await webservice().get('/cardapio');
    }

    static async iniciarTimer(tarefaId) {
        return webservice().patch(`/tarefas/${tarefaId}/timer/iniciar`)
    }

    static async pausarTarefa(idTarefa, justificativa) {
        return await webservice().patch(`/tarefas/${idTarefa}/pausar`, justificativa)
    }

    static async resumirTarefa(idTarefa) {
        return await webservice().patch(`/tarefas/${idTarefa}/resumir`)
    }

    static async concluirTarefa(idTarefa, tempoRealizadoMinutos) {
        const parametroOpcional = tempoRealizadoMinutos ? `?tempoRealizadoMinutos=${tempoRealizadoMinutos}` : ''

        return await webservice().patch(`/tarefas/${idTarefa}/concluir${parametroOpcional}`,
            { headers: { 'Content-type': 'text/plain' } }
        )
    }

    static async desconcluirTarefa(idTarefa) {
        return await webservice().patch(`/tarefas/${idTarefa}/desconcluir`, { headers: { 'Content-type': 'text/plain' } })
    }

}
