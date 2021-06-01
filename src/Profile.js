import React from 'react'

const Profile = ({userType}) => {
    const handleSubmitAttach = (event) => {
        alert('A file was uploaded');
        event.preventDefault();
    }

    const handleSubmitGender = (event) => {
        alert('A gender selection was made! ');
        event.preventDefault();
    }

    const getUserType = () => {
        switch (userType) {
            case 'admin':                
                return 'Admin';
            case 'standard':
                return 'Standard';
            default:
                return 'Guest';
        }
    }

    return (
        <>
            <h4> { `${getUserType()} profile`} </h4>
            {userType === 'admin' && 
                <form onSubmit={handleSubmitAttach}>
                    <input type="file" />
                    <br />
                    <br />

                    <input type="submit" value="Send attachments" id='submitFileBtn' />
                </form>}

            {userType === 'standard' && 
                <form onSubmit={handleSubmitGender}>
                    <input type="radio" id="male" name="gender" value="male" />
                    <label for="male">Male</label><br />
                    
                    <input type="radio" id="female" name="gender" value="female" />
                    <label for="female">Female</label><br />

                    <input type="radio" id="other" name="gender" value="other" />
                    <label for="other">Other</label>
                    <input type="submit" value="Send gender" id='submitGenderBtn' />

                </form>}

            {(userType === 'guest' || userType === '') && <h5> Welcome to our site, you are an observer </h5>}
        </>
    )
  }

  export default Profile
