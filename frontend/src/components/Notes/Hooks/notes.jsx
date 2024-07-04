import axios from 'axios'
const BASEURL = '/api/persons'
const BASEJSONPLACE = 'https://jsonplaceholder.typicode.com' 

const notes = () => {

  const bring = async () => {
    let req = axios.get(BASEURL)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.error('bring',error);
    }
  }

  const create = async (newObject) => {
    let req = axios.post(BASEURL, newObject)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.error('create', error)
    }
  }

  const eliminate = async (id) => {
    let direct = BASEURL.concat(`/${id}`)
    let req = axios.delete(direct)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.error('eliminate',error) 
    }
  }

  const update = async (id, newObject) => {
    let direct = BASEURL.concat(`/${id}`)
    let req = axios.put(direct, newObject)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.error('update', error)
    }
  }

  // const putt = async () => {
  //   let postObj = {
  //     id: 1,
  //     title: 'foo',
  //     body: 'bar',
  //     userId: 1,
  //   }
  //   let request = axios.put(`${BASEJSONPLACE}/posts/1`, postObj)
  //   try {
  //     const response = await request
  //     console.log(response.data) 
  //     return response.data

  //   } catch (error) {
  //     console.log('error en put axios',error)
  //   }
  // }

  return {
    bring,
    create,
    eliminate,
    update
  }
}

export default notes