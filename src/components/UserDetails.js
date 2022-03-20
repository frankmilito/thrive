import {Oval} from "react-loader-spinner"
import {useSelector} from "react-redux"

const UserDetails = () => {
  const repos = useSelector(state => state?.repos)
  const {profile, reposList, loading, error} = repos
  return (
    <>
      {loading ? (
        <Oval color="#818cf8" height={80} width={"100%"} />
      ) : error ? (
        <h2 className="text-red-300 text-3xl text-center">
          {error?.data?.message}
        </h2>
      ) : profile && Object.keys(profile).length > 0 ? (
        <div class="max-w-4xl mx-auto">
          <div class="flex flex-wrap -mx-4 mb-20">
            <div class="w-full lg:w-1/2 px-4 mb-4 lg:mb-0">
              <div class="bg-gray-600 rounded-b-lg">
                <div class="flex justify-center">
                  <img
                    class="w-56 h-56 rounded-full"
                    src={profile?.avatar_url}
                    alt="profile image"
                  />
                </div>
                <div class="px-14 py-8">
                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Name:{" "}
                    <span>
                      {profile?.name} {profile?.login}
                    </span>
                  </h4>
                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Bio <span>{profile?.bio}</span>
                  </h4>
                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Company <span>{profile?.company}</span>
                  </h4>
                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Location <span>{profile?.location}</span>
                  </h4>

                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Followers <span>{profile?.followers}</span>
                  </h4>

                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Following <span>{profile?.following}</span>
                  </h4>

                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Repositories:{" "}
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                      {profile?.public_repos ? profile?.public_repos : "N/A"}
                    </span>
                  </h4>

                  <div class="mb-6 py-px bg-gray-500"></div>
                  <h4 class="mb-8 lg:mb-4  text-white font-bold">
                    Gists:{" "}
                    <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-lg text-xs font-medium bg-green-500 text-green-800">
                      {profile?.public_gists ? profile?.public_gists : "N/A"}
                    </span>
                  </h4>
                  <div class="mb-6 py-px bg-gray-500"></div>
                  <div class="md:text-right">
                    <a
                      href={profile?.html_url}
                      target="_blank"
                      class="inline-block px-12 py-4 border border-gray-300 hover:border-gray-200 rounded-full font-bold text-white"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-4">
              <h1 class="mb-8 lg:mb-4  text-white font-bold">Repositories</h1>
              {reposList && reposList.length > 0
                ? reposList.map(repo => (
                    <>
                      <div class="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                        <div class="flex items-center">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            class="text-lg  text-indigo-400"
                          >
                            {repo.name}
                          </a>
                        </div>
                      </div>
                    </>
                  ))
                : ""}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default UserDetails
