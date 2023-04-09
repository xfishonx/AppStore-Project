// Write your code here
import './index.css'

const AppItem = props => {
  const {eachAppDetails} = props
  const {appName, imageUrl} = eachAppDetails

  return (
    <li className="container-image-details">
      <img src={imageUrl} alt={appName} className="image-app" />
      <p className="app-name">{appName}</p>
    </li>
  )
}
export default AppItem
