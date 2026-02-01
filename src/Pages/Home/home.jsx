import Header from '../../Components/Header/header'
import HomeImages from '../../Components/HomeImages/images'
import Hero from '../../Components/Hero/hero'
import Footer from '../../Components/Footer/footer'


function Home({user,setUser}) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <HomeImages />
      <Hero />
      <Footer />
    </>
  )
}

export default Home
