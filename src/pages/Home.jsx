import profile1 from "../assets/profile1.jpeg"
import profile2 from "../assets/profile2.jpeg"
import profile3 from "../assets/profile3.jpeg"

import ProfileCard from "../components/ProfileCard"


function Home() {
  return (
<div className="flex flex-wrap justify-center gap-6 mt-10">

    <ProfileCard 
      image={profile1}
      name="Joana"
      role="Software Developer"
      phone="+6543210"
      email="Joana@gmail.com"
      location="US"
    />

    <ProfileCard
      image={profile2}
      name="Luis"
      role="UI Designer"
      phone="+987610"
      email="luis@gmail.com"
      location="Australia"
    />

    <ProfileCard
      image={profile3}
      name="Serah"
      role="Backend Developer"
      phone="+321089"
      email="sera@gmail.com"
      location="UK"
     />

    </div>
  )
}

export default Home