import profile1 from "../assets/profile1.jpeg"
import profile2 from "../assets/profile2.jpeg"
import profile3 from "../assets/profile3.jpeg"

import ProfileCard from "../components/ProfileCard"

function Home({ profiles }) {

  const images = {
  profile1,
  profile2,
  profile3
}

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center">

      <div className="flex flex-wrap justify-center gap-6 mt-10">

        {profiles.map((profile) => (

          <ProfileCard
            key={profile.id}
            image={images[profile.image] || profile.image}
            name={profile.name}
            role={profile.role}
            phone={profile.phone}
            email={profile.email}
            location={profile.location}
            id={profile.id}
          />

        ))}

      </div>

    </div>
  )
}

export default Home