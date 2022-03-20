import {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {getUserRepositories, getUserProfile} from "./redux/slices/githubSlices"
import UserDetails from "./components/UserDetails"
import HeaderInput from "./components/HeaderInput"

const App = () => {
  const dispatch = useDispatch()

  const [userInput, setUserInput] = useState("frankmilito")
  useEffect(() => {
    // dispatch(getUserProfile(userInput))
    // dispatch(getUserRepositories(userInput))
  }, [dispatch, userInput])

  const repos = useSelector(state => state?.repos)
  const {profile, reposList, loading, error} = repos

  console.log(repos)
  return (
    <>
      <section class="relative 2xl bg-gray-700 min-h-screen">
        <div class="relative container px-4 mx-auto">
          <HeaderInput userInput={userInput} setUserInput={setUserInput} />
          <UserDetails
            loading={loading}
            error={error}
            profile={profile}
            reposList={reposList}
          />
        </div>
      </section>
    </>
  )
}

export default App
