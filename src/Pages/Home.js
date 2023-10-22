import Search from '../Components/Search'
import Title from '../Components/Title'
import NewsContainer from '../Components/NewsContainer'

const Home = () => {

  return (
    <div className='flex flex-col items-center w-11/12 max-w-4xl min-h-screen gap-10 py-20 mx-auto'>
      <Title />
      <Search />
      <NewsContainer />
    </div>
  )
}

export default Home