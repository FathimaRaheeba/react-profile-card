import { useState, useEffect } from "react"

import profilesData from "../data/profilesData"

function useProfiles() {

  const [profiles, setProfiles] = useState(() => {

    const savedProfiles =
      localStorage.getItem("profiles")

    return savedProfiles
      ? JSON.parse(savedProfiles)
      : profilesData
  })

  useEffect(() => {
    localStorage.setItem(
      "profiles",
      JSON.stringify(profiles)
    )
  }, [profiles])

  return {
    profiles,
    setProfiles
  }

}

export default useProfiles