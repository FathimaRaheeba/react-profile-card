import qr from "../assets/qr.png"
import { useLocation, Link ,useParams,useNavigate} from "react-router-dom"
import { useState } from "react"

function ProfileDetails({profiles}) {

  const [showDialog, setShowDialog] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { id } = useParams()

  const profile =
     location.state ||
    profiles.find((p) => p.id === Number(id))

    if (!profile) {
       return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>No profile found</h1>
    </div>
  )
}
    

  return (

<div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">

    <Link to="/">
  <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg mb-5">
    ← Back To Home
  </button>
  </Link>
      <div className="bg-white w-96 rounded-2xl shadow-xl p-8">

        <div className="flex justify-center">
          <img
            src={profile.image}
            alt="profile"
           className="w-full h-72 object-cover"/>                                     
        </div>

        <div className="text-center mt-5">
          <h1 className="text-3xl font-bold"> {profile.name}</h1>
          <p className="text-gray-500 mt-2">{profile.role}</p>
        </div>

        <div className="mt-6 space-y-3 text-gray-700">
          <p>📞 {profile.phone}</p>
          <p>📧 {profile.email}</p>
          <p>📍 {profile.location}</p>
        </div>

        <div className="flex justify-center mt-6">
          <img
            src={qr}
            alt="qr"
            className="w-28 h-28"/>
        </div>

        <div className="flex justify-center mt-8">
          <button
             onClick={() => setShowDialog(true)}
             className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg">
                 Edit Profile
          </button>
        </div>

      </div>


      {
  showDialog && (

    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">

      <div className="bg-white p-6 rounded-xl w-80 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Confirm Edit</h2>

        <p className="text-gray-600 mb-6">Are you sure you want to edit this profile?</p>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setShowDialog(false)}
            className="px-4 py-2 bg-gray-300 rounded-lg" >
               Cancel
          </button>

          <button
            onClick={() => {
              navigate("/edit-profile", {
                state: profile
              })
            }}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg">
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}

    </div>

  )
}

export default ProfileDetails