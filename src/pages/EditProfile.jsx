import { useState, useRef } from "react"
import profile1 from "../assets/profile1.jpeg"
import { useNavigate, useLocation } from "react-router-dom"
import toast from "react-hot-toast"

function EditProfile({ profiles, setProfiles }) { 

const [showSaveDialog, setShowSaveDialog] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()
  const user = location.state


const [name, setName] = useState(user?.name || "")
const [role, setRole] = useState(user?.role || "")
const [phone, setPhone] = useState(user?.phone || "")
const [email, setEmail] = useState(user?.email || "")
const [userLocation, setUserLocation] = useState(user?.location || "")
const [image, setImage] = useState(user?.image || profile1)

  const fileInputRef = useRef(null)

// save
  const handleSave = () => {

  const updatedProfile = {
    id: user.id,
    name,
    role,
    phone,
    email,
    location: userLocation,
    image
  }
  setProfiles(
    profiles.map((p) =>
      p.id === user.id ? updatedProfile : p
    )
  )
  navigate(`/profile/${user.id}`, {
    state: updatedProfile
  })
  toast.success("Profile saved successfully ✅"),{
    duration:3000
  }

}
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="bg-white w-96 p-8 rounded-2xl shadow-xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Edit Profile
        </h1>

        {/* profile */}
        <div className="flex flex-col items-center mb-5">

          <img
            src={image}
            alt="profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-500"
           />
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-4">
                Update Profile
          </button>
        </div>
        {/* file upload */}
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0]
            if (file) {
              const reader = new FileReader()
                reader.onloadend = () => {
                setImage(reader.result)
                }
                reader.readAsDataURL(file)
            }
          }}
        />

        {/* inputs */}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="w-full border p-2 rounded-lg mb-4"
        />

        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Role"
          className="w-full border p-2 rounded-lg mb-4"
        />

        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="w-full border p-2 rounded-lg mb-4"
        />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded-lg mb-4"
        />

        <input
          type="text"
          value={userLocation}
          onChange={(e) => setUserLocation(e.target.value)}
          placeholder="Location"
          className="w-full border p-2 rounded-lg mb-4"
        />

        {/* save button */}
        <button
          onClick={() => setShowSaveDialog(true)}
          className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-lg">
          Save Changes
        </button>

      </div>

{/* save dialog box */}
      {
      showSaveDialog && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl w-80 shadow-xl">

      <h2 className="text-xl font-bold mb-4">Confirm Save</h2>

      <p className="text-gray-600 mb-6">Are you sure you want to save these changes? </p>

      <div className="flex justify-end gap-3">
        <button
          onClick={() => setShowSaveDialog(false)}
          className="px-4 py-2 bg-gray-300 rounded-lg" >
          Cancel
        </button>

        <button
          onClick={() => {
            setShowSaveDialog(false)
            handleSave()
          }}
          className="px-4 py-2 bg-green-500 text-white rounded-lg" >
          Save
        </button>
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default EditProfile