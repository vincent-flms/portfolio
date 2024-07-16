import Footer from "../components/footer";
import Mainpage from "../components/mainpage";

const Home = () => {
    return(
        <div style={{
            width: '100%', 
            height: '100vh'
        }}>
            <Mainpage />
            <Footer />
        </div>
    )
}

export default Home;