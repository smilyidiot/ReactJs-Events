// Write your code here
import './index.css'

// id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
// imageUrl:'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
// name: 'Canada Dance Festival',
// location: 'Canada, America',
// registrationStatus: 'YET_TO_REGISTER',

const ActiveEventRegistrationDetails = props => {
  const {showStatus} = props
  console.log('ActiveEventRegistrationDetails', showStatus)

  const registerFunction = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-reg-img"
      />
      <p className="status-head">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="reg-button">
        Register Here
      </button>
    </div>
  )

  const alreadyRegister = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="status-head">You have already registered for the event</h1>
    </div>
  )

  const closedRegister = () => (
    <div className="status-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="closed-head">Registrations Are Closed Now!</h1>
      <p className="status-para">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const initialFunction = () => (
    <p className="status-para">
      Click on an event, to view its registration details
    </p>
  )

  switch (showStatus) {
    case 'YET_TO_REGISTER':
      return registerFunction()
    case 'REGISTERED':
      return alreadyRegister()
    case 'REGISTRATIONS_CLOSED':
      return closedRegister()
    default:
      return initialFunction()
  }
}

export default ActiveEventRegistrationDetails
