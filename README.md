# Back End for Call and Complain



Form: { // That the user posts 

    formID: ID autoincrements

    DisplayName: autofilled from firebase.currentuser.displayname,
    Email: autofilled from firebase.currentuser.email,
    UID: so we can grab forms based on user who posted (and display in complain history)

    storeName: autofilled from google places, - addressObject.name
    storeLocation: autofilled from google places, - addressObject.formatted_address
    storePhoneNumber: autofilled from google places, - addressObject.formatted_phone_number
    storeGoogleRating:  autofilled from google places, - addressObject.rating
    storeWebsite:  autofilled from google places, - addressObject.website

    text: autofilled from deepgram, we grab this same info later to make a tweet
    audioFile:  default will be null, we may use for tweets
}



COMPONENTS
__________


SPLASH {
    type = presentational (no state)

    children = HOME
}

--------------

HOME {
    type = presentational (no state)

    children = 
        1. COMPLAINT FEED, 
        2. EDIT PROFILE, 
        3. VIEW COMPLAINT HISTORY,
        4. ALL FORMS
}

--------------

COMPLAINT FEED {
    type = presentational (no state)

    calls = axios GET (get req to backend, grabs FORM object and displays to screen)
    
    EndPoint - /api/routes/posts
}

EDIT PROFILE {
    type = class

    state =   (COMPLETED) allow user to edit firebase.currentuser info

}

VIEW COMPLAINT HISTORY {
    type = presentational (no state)

    calls = axios get:UID (gets all forms posted with the users uid and displays them)

    EndPoint - /api/routes/posts:UID
}

--------------

FORM 1 (SEARCH) {
    type = class

    state = {
        storeName: addressObject.name,
        storeLocation:  addressObject.formatted_address,
        storePhoneNumber: addressObject.formatted_phone_number,
        storeGoogleRating: addressObject.rating,
        storeWebsite: addressObject.website,
    }
}


FORM 2 (RECORD) {
    type = class

    state = {
        audioFile: recorded from button push
    }
}


FORM 3 (TRANSCRIBE) {
    type = class

    state = {
        text: transcribed from audio to text and stored here
    }
}


FORM 4 (CONFIRMATION) {
    type = class

    state = {
        name: currentuser.name,
        email: currentuser.email,
        UID: currentuser.uid
    }

    call = axios POST to DB, (will then automatically show up on the users recent posts)

    call 2 = axios POST to Twitter (autopopulate from text on form obj)

---------------------------------

    EndPoint - /api/routes/makepost

    Body: {FORM object}

    Endpoint 2 - /api/routes/makeatweet

    Body: {status: "Content of tweet goes here!"}


})

FORM 5 (THANK YOU) {
    type = presentational

    (This component thanks users for their submition and send them back to home)
}