import { useState, useEffect } from 'react'
import useFilter from './useFilter'
import notes from './notes'


const useForm = () => {
  const errorBlock = [{
    "id": "IMYVV5G",
    "name": "",
    "number": " "
  }]
  const [MSJ, setMSJ] = useState({})
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [contacts, setContacts] = useState([])
  const { findIn, findId } = useFilter()
  const { bring, create, eliminate, update } = notes()

  useEffect(() => {
    bring()
      .then(initialNotes => {
        setContacts(initialNotes)
        console.log(initialNotes)
        let oldContacts = [...(initialNotes)]
        if (newName) {
          if (findIn(newName, oldContacts) || findIn(newNum, oldContacts)) {
            actionReplace(oldContacts, newName, newNum)
          }
          else {
            actionCreate({ name: newName, number: newNum })
            setMSJ({ text: `${newName} ${newNum} añadido`, type: 'success' })
          }
        }
      })
      .catch((error) => {
        setContacts(errorBlock)
        setMSJ({ text: 'No se pudo cargar la lista de contactos', type: 'error' })
      })
  }, [newName, newNum])

  const actionCreate = (newContact) => {
    create(newContact)
      .then(res => { setContacts(contacts.concat(res)) })
      .catch(error => alert(error))
  }
  const actionRemove = async (contactId, contactName) => {
    if (confirm(`¿Estás seguro de que quieres eliminar a ${contactName}?`)) {
      eliminate(contactId)
        .then((res) => res == {} ?
          setMSJ({ text: 'Este mensaje ya fue eliminado anteriormente', type: 'error' }) :
          setMSJ({ text: 'Mensaje eliminado correctamente', type: 'error' })
        )
        .catch(

      )
      bring()
        .then(newList => { setContacts(newList) })
        .catch(error => console.log(error))
    }
  }
  const actionReplace = (oldContacts, newAltName, newAltNumber) => {
    if (confirm(`${newName} ya se encuentra en tu lista de contactos ¿Quieres reemplazar el número anterior por el siguiente?`)) {
      update(findId(newAltName, oldContacts), { name: newAltName, number: newAltNumber })
        .then(res => console.log(res))
        .catch(error => console.log(error))
      bring()
        .then(newList => { setContacts(newList) })
        .catch(error => console.log(error))
      setMSJ({ text: 'Datos actualizados de contacto', type: 'success' })
    }
  }

  const handleEForm = (event) => {
    event.preventDefault()
    setNewName(event.target[0].value)
    setNewNum(event.target[1].value)
  }

  return {
    handleEForm,
    actionRemove,
    contacts,
    setMSJ,
    MSJ
  }
}


export default useForm