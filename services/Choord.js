import webservice from './webservice'

export class Login {

    static async logar (email, password) {
        try {
          let response = await webservice().post('/logar', {email, password});
          return response
        } catch (ex) {
          throw ex
        }
    }

    static async allTarefas () {
      try {
        let response = await webservice().get('/cardapio');
        // a resposta é um json com bastante lixo, só interessa o campo tarefas.
        return response
      } catch (ex) {
        throw ex
      }
    }

    static async iniciarTimer (tarefaId) {
      try {
        let responseAtt = await webservice().patch(`/tarefas/${tarefaId}/timer/iniciar`)
        return responseAtt
      } catch (ex) {
        throw ex
      }
    }

    static async pausarTarefa (idTarefa, justificativa) {
      try {
        let responseAtt = await webservice().patch(`/tarefas/${idTarefa}/pausar`, justificativa)
        return responseAtt
      } catch (ex) {
        throw ex
      }
    }
  
    static async resumirTarefa (idTarefa) {
      try {
        let responseAtt = await webservice().patch(`/tarefas/${idTarefa}/resumir`)
        return responseAtt
      } catch (ex) {
        throw ex
      }
    }

    static async concluirTarefa (idTarefa, tempoRealizadoMinutos) {
      const parametroOpcional = tempoRealizadoMinutos ? `?tempoRealizadoMinutos=${tempoRealizadoMinutos}` : ''
      try {
        let responseConfirm = await webservice().patch(`/tarefas/${idTarefa}/concluir${parametroOpcional}`,
          {headers: {'Content-type': 'text/plain'}}
        )
        return responseConfirm
      } catch (ex) {
        throw ex
      }
    }

    static async desconcluirTarefa (idTarefa) {
      try {
        let responseCancel = await webservice().patch(`/tarefas/${idTarefa}/desconcluir`, {headers: {'Content-type': 'text/plain'}})
        return responseCancel
      } catch (ex) {
        throw ex
      }
    }
    
}
