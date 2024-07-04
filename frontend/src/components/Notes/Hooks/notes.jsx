import axios from 'axios'
const BASEURL = '/api/persons'

const notes = () => {

  const bring = async () => {
    let req = axios.get(BASEURL)
    try {
      const res = await req
      return res.data
    } catch (error) {

    }
  }

  const create = async (newObject) => {
    let req = axios.post(BASEURL, newObject)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.error('createAccion', error)
    }
  }

  const eliminate = async (id) => {
    let direct = BASEURL.concat(`/${id}`)
    let req = axios.delete(direct)
    try {
      const res = await req
      return res.data
    } catch (error) {
      return error
    }
  }

  const update = async (id, newObject) => {
    let req = axios.put(`${BASEURL}/${id}`, newObject)
    try {
      const res = await req
      return res.data
    } catch (error) {
      console.log('fail update', error)
    }
  }

  const putt = async () =>{
    let req = axios.put('https://jsonplaceholder.typicode.com/posts/1', {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    })
    try{
      const res = await req
      return res.data
    }catch(error){
console.log(error);
    }
  }

  return {
    bring,
    create,
    eliminate,
    update,
    putt
  }
}

export default notes