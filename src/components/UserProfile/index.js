import './index.css'

const UserProfile = props => {
  const {userDetails, deleteUserDetails} = props
  const {imageUrl, name, role, uniqueNo} = userDetails

  const onDelete = () => {
    deleteUserDetails(uniqueNo)
  }
  return (
    <li className="user-card-container">
      <img src={imageUrl} className="profile-pic" alt="profile-pic" />
      <div className="user-details-container">
        <h1 className="user-name"> {name} </h1>
        <p className="user-designation"> {role} </p>
      </div>
      <button className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}
export default UserProfile
