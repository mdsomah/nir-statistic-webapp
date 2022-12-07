import React, { useState, useEffect, useContext } from 'react';
// import { useParams } from "react-router-dom";
import axios from "axios";
import AuthService from '../../Services/AuthService';
import { AuthContext } from '../../Context/AuthContext';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { BsCameraFill } from "react-icons/bs";

// React Tippy.JS
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import "./UserProfile.css";

const UserProfile = ({ socket }) => {
  // const { id } = useParams();
  // Destructuring AuthContext
  const { user, isAuthenticated } = useContext(AuthContext);
  const [password, setPassword] = useState({ password: "", confirmPassword: "" });
  const [profilePhoto, setProfilePhoto] = useState({ photo: "" });
  const [userProfile, showUserProfile] = useState([]);

  console.log(password);

  //  Fetching User Name
  useEffect(() => {
    axios.get("http://localhost:5000/users").then((allUsersProfile) => {
      showUserProfile(allUsersProfile.data)
    })
  }, [])


  // Clear Form input fields
  function clearFields(event) {
    Array.from(event.target).forEach((e) => (e.value = ""));
  }

  //Update User Profile Password
  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    AuthService.profilePassword(password).then((data) => {
      console.log(data);
      if (password.password === password.confirmPassword) {
        alert("User Profile Password Updated Successfully!");
        clearFields(e);
        setPassword("");
      } else {
        alert("User Profile Password Not Matched!");
        clearFields(e);
        setPassword("");
      }
    });
  };


  // Update User Profile Picture
  const handlePhotoSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('photo', profilePhoto.photo);

    AuthService.profilePhoto(formData).then((data) => {
      if (profilePhoto.photo) {
        console.log(data);
        alert("Profile Photo Update Successfully!");
      } else {
        alert("Please select a photo to upload")
      }
    });
  };

  // Update Photo Field
  const handlePhoto = (e) => {
    setProfilePhoto({ ...profilePhoto, photo: e.target.files[0] });
  }

  return (
    <React.Fragment>
      <Header socket={socket} />
      <div id="user-profile-wrapper">
        <h5>User Profile</h5>
        {
          isAuthenticated ?
            userProfile.filter(img => img.userName === user.userName && img.photo === "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
              <div className='user-img'>
                <Tippy content="Change Photo" placement="bottom">
                  <span className='camera' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <BsCameraFill size={"22px"} />
                  </span>
                </Tippy>
                <img src={img.photo} alt={img.firstName} width={"200px"} />
              </div>
            )) : null
        }
        {
          isAuthenticated ?
            userProfile.filter(img => img.userName === user.userName && img.photo !== "https://avatars.dicebear.com/api/adventurer/your-custom-seed.svg").map(img => (
              <div className='user-img'>
                <Tippy content="Change Photo" placement="bottom">
                  <span className='camera' data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <BsCameraFill size={"22px"} />
                  </span>
                </Tippy>
                <img src={`http://localhost:5000/images/${img.photo}`} alt={img.firstName} width={"200px"} />
              </div>
            )) : null
        }

        <form className="pure-form pure-form-stacked" onSubmit={handlePasswordUpdate}>
          {isAuthenticated ?
            userProfile.filter(value => value.userName === user.userName).map(value => (
              <div>
                <h3>{value.firstName} {value.middleName}. {value.lastName}</h3>
                <h5>{value.role}</h5>
              </div>
            )) : null}
          <fieldset>
            <div className="pure-g">
              <div className="pure-u-1-3">
                <label htmlFor="last-name">New Password:</label>
                <input
                  type="password"
                  id="password"
                  className="pure-u-23-24"
                  placeholder="Enter New Password"
                  value={password.password}
                  onChange={(e) => setPassword({ ...password, password: e.target.value })}
                />
              </div>
            </div>
            <div className="pure-g">
              <div className="pure-u-1-3">
                <label htmlFor="last-name">Confirm Password:</label>
                <input
                  type="password"
                  id="confirm-password"
                  className="pure-u-23-24"
                  placeholder="Confirm Password"
                  value={password.confirmPassword}
                  onChange={(e) => setPassword({ ...password, confirmPassword: e.target.value })}
                />
              </div>
            </div>
            <button
              type="submit"
              className="pure-button pure-button-primary pure-button-active"
            // onClick={handlePasswordUpdate}
            >
              Update
            </button>
          </fieldset>
        </form>
        {/* End of PureCSS Form */}
      </div>
      {/* Image Modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update Profile Photo</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form encType="multipart/form-data">
              <div class="modal-body">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Upload Photo</label>
                  <input
                    class="form-control"
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    name="photo"
                    onChange={handlePhoto}
                  />
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" onClick={handlePhotoSubmit} data-bs-dismiss="modal">Save changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End of Image Modal */}
      <Sidebar />
    </React.Fragment>
  )
}

export default UserProfile