// Write your code here
import './index.css'

// id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
// imageUrl:'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
// name: 'Canada Dance Festival',
// location: 'Canada, America',
// registrationStatus: 'YET_TO_REGISTER',

const EventItem = props => {
  const {content, eventId, clickId} = props
  const {id, imageUrl, name, location, registrationStatus} = content

  const activeId = clickId === id ? 'add-border' : ''

  const onClickButton = () => {
    eventId(id, registrationStatus)
  }

  return (
    <li className="listedItem">
      <button type="button" onClick={onClickButton} className="add-border">
        <img src={imageUrl} alt="event" className={`image ${activeId}`} />
      </button>
      <p className="card-head">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
