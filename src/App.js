import UserDetails from "./components/UserDetails"
import HeaderInput from "./components/HeaderInput"

const App = () => {
  return (
    <>
      <section class="relative 2xl bg-gray-700 min-h-screen">
        <div class="relative container px-4 mx-auto">
          <HeaderInput />
          <UserDetails />
        </div>
      </section>
    </>
  )
}

export default App
