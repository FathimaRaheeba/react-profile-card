import { Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"


import Home from "./pages/Home"
import ProfileDetails from "./pages/ProfileDetails"
import EditProfile from "./pages/EditProfile"

import useProfiles from "./hooks/useProfiles"

function App() {

  const {
    profiles,
    setProfiles
  } = useProfiles()

  return (
<>
    <Toaster position="bottom-center" />
  
    <Routes>

      <Route
        path="/"
        element={
          <Home profiles={profiles} />
        }
      />

      <Route
        path="/profile/:id"
        element={
          <ProfileDetails
            profiles={profiles}
          />
        }
      />

      <Route
        path="/edit-profile"
        element={
          <EditProfile
            profiles={profiles}
            setProfiles={setProfiles}
          />
        }
      />

    </Routes>
    
 </>
  )
}

export default App