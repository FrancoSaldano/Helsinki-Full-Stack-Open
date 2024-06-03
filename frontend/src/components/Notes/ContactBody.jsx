import { useState } from 'react'
import Filter from './Filter'
import Form from './Form'
import List from './List'
import useFilter from './Hooks/useFilter'
import useForm from './Hooks/useForm'
import Notification from './Notification'

const ContactBody = () => {

  const [showAll, setShowAll] = useState(true)
  const { handleEForm, actionRemove, contacts, MSJ } = useForm()
  const { setFilter, filter, contactFiltered } = useFilter()

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter setFilter={setFilter} show={showAll} setShow={setShowAll} />
      <h3>Add a new contact here</h3>
      <Form addDataPerson={handleEForm} />
      <Notification text={MSJ.text} type={MSJ.type} />
      <h3>Contacts</h3>
      <List list={contactFiltered(showAll, contacts, filter)} delDataPerson={actionRemove} />
    </div>
  )
}

export default ContactBody