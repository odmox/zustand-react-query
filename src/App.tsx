import { useFetchRepositories } from "./hooks/useRepos" 
import { Card } from './components/Card'
import { useFavoriteReposStore } from "./store/favoriteRepos"


function App() {
  const { data, isLoading, isError } = useFetchRepositories('odmox')
  const { favoriteReposIds } = useFavoriteReposStore()


  if (isLoading) {
    return <div>Loading...</div>
  }


  if (isError) {
    return <div>Error</div>
  }

  return (
    <div>
      {data?.map(repository => <Card 
        key={repository.id}
        repository={repository}
        isFavorite={favoriteReposIds.includes(repository.id)}
      />)}
    </div>
  )
}

export default App
