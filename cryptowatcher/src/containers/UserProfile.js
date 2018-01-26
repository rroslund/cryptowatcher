import { connect } from 'react-redux'
import Profile from '../components/Profile'

const getCurrentUser = (user) => {
  return user?user.name:"Unknown";
}

const mapStateToProps = (state) => ({
  username: getCurrentUser(state.user)
})

const mapDispatchToProps = {
  onProfileClick: () =>{console.log("ProfileClick");}
}

const UserProfile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default UserProfile