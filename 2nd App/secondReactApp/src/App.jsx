import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
import './App.css'


function App(){
    return (
        <>
            <Navbar/>
            <div className="cards">
                <Card title='Card 1' description="This is Card 1's description"/>
                <Card title='Card 2' description="This is Card 2's description"/>
                <Card title='Card 3' description="This is Card 3's description"/>
                <Card title='Card 4' description="This is Card 4's description"/>
            </div>
            <Footer/>
        </>
    )
}

export default App