export default class APIService {
    static UpdatePessoa(id, rg) {
        return fetch(`http://127.0.0.1:5000/update/${id}/`, {
           'method':'PUT',
            headers: {
              'Content-Type':'application/json'
            },
            rg: JSON.stringify(rg)
            
          })
          .then(resp => resp.json())
    }


    static InsertPessoa(rg) {
      return fetch(`http://127.0.0.1:5000/add`, {
         'method':'POST',
          headers: {
            'Content-Type':'application/json'
          },
          rg: JSON.stringify(rg)
          
        })
        .then(resp => resp.json())
  }

  static deletePessoa(id) {
    return fetch(`http://127.0.0.1:5000/delete/${id}/`, {
       'method':'DELETE',
        headers: {
          'Content-Type':'application/json'
        },
      
        
      })
      
}


    


}