import qr from "../assets/qr.png"

function ProfileCard({ image, name, role, phone, email, location }) {
  return (

<div className="bg-white w-80 rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-24">
      </div>

      <div className="flex justify-center -mt-12">
        <img
          src={image}
          alt="profile"
          className="w-24 h-24 rounded-full border-4 border-white object-cover"
        />
      </div>

      <div className="text-center p-5">

        <h1 className="text-2xl font-bold">
          {name}
        </h1>

        <p className="text-gray-500 mt-1">
          {role}
        </p>

        <div className="mt-5 space-y-2 text-gray-700">

          <p>
            📞 {phone}
          </p>

          <p>
            📧 {email}
          </p>

          <p>
            📍 {location}
          </p>

        </div>

        <div className="flex justify-center mt-5">
          <img
            src={qr}
            alt="qr"
            className="w-24 h-24"
          />
        </div>

<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg mt-5 transition duration-300">          Follow
        </button>

      </div>

    </div>

  )
}

export default ProfileCard