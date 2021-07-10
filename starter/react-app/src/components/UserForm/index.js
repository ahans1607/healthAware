import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Allergies from "../Allergies"
import './index.css'

function UserForm({onSubmit, 
children,
setters: 
{errors, 
username, 
name, 
email, 
password, 
repeatPassword, 
profilePic, 
vaccinationCard, 
additionalDetails, 
currentSymptoms, 
geolocation,
allergies,
setErrors,
updateUsername,
updateName,
updateEmail,
updatePassword,
updateRepeatPassword,
updateProfilePic,
updateVaccinationCard,
updateAdditionalDetails,
updateCurrentSymptoms,
getLocation,
updateAllergy,
updateSeverity}}) {
  // const [edit, setEdit] = useState(false);

  const [buttonA, setButtonA] = useState(false)

  const onLocationClick = () => {
    getLocation()
    setButtonA(true)
  }



  return (
    <div className="masterUserFormDiv">
      <form onSubmit={onSubmit}>
        <div>
            {errors.map((error, ind) => (
              <div key="error">{error}</div>
            ))}
          </div>
          <div>
            <label className="labell">Name</label>
            <input
              className='inputss'
              type='text'
              name='name'
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <label className="labell">User Name</label>
            <input
              className='inputss'
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <label className="labell">Email</label>
            <input
              type='text'
              name='email'
              onChange={updateEmail}
              value={email}
              className='inputss'
            ></input>
          </div>
        <div>
          <label className="labell">Password</label>
          <input
            type='password'
            name='password'
            onChange={updatePassword}
            value={password}
            className='inputss'
            ></input>
        </div>
        <div>
          <label className="labell">Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            className='inputss'
            ></input>
        </div>
        <div>
          <label className="labell">Current Symptom</label>
          <select
            name='currentSymptoms'
            onChange={updateCurrentSymptoms}
            value={currentSymptoms}>
              <option value="None">None</option>
              <option value="Cough">Cough</option>
              <option value="Fever">Fever</option>
              <option value="Chills">Chills</option>
              <option value="Skin_Rash">Skin Rash</option>
              <option value="Shortness_of_Breath">Shortness of Breath</option>
              <option value="Nauseated">Nauseated</option>
              <option value="Chronic_Pain">Chronic Pain</option>
            </select>
        </div>
        <div>
          <label className="labell">Additonal Details</label>
          <input
            type='text'
            name='additionalDetails'
            onChange={updateAdditionalDetails}
            value={additionalDetails}
            className='inputss'
          ></input>
          </div>
          <div>
            <label className="labell">Geolocation</label>
            <button onClick={onLocationClick} type="button" disabled={buttonA}>
              Get My Location
            </button>
          </div>
          <div>
            <label className="labell">Profile Picture</label>
            <input
              type='file'
              name='profilePic'
              // accept="image/*"
              onChange={updateProfilePic}
              // value={profilePic}
            ></input>
          </div>
          <div>
            <label className="labell">Vaccination Card</label>
            <input
              type='file'
              name='vaxCard'
              // accept='pdf/*'
              onChange={updateVaccinationCard}
              // value={vaccinationCard}
            ></input>
          </div>
          <br/>
          <div> 
            <label className="labell">Allergies:</label>
            {["Peanuts", 
            "Animal Dander", 
            "Gluten",
            "Shellfish", 
            "Dairy", 
            "Pollen/Dust/Mold" 
            ].map(each => (
              <Allergies 
              allergen={each} 
              onCheck={updateAllergy(each)}
              checked={!!allergies[each]}
              updateSeverity={updateSeverity(each)}
              severity={allergies[each] && allergies[each].severity}
              />
            ))}
          </div>
          <br/>
          {children}
      </form>

    </div>

  )
}
export default UserForm;