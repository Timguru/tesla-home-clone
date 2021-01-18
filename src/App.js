import './App.css';
import Header from './components/Header'
import Item from './components/Item'
import Accessories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoofs from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="app">
       <Header/>
       <div className="app__itemsContainer">
         <Item
         id="solar-panel"
         title="Lowest cost solar panels in America"
         desc="Money back gurantee"
         descLink=''
         backgroundImg={SolarPanels}
         leftBtnText="order now"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}
         first = {true}/>

         <Item
         id="model-S"
         title="Model S"
         desc="$69, 420"
         descLink=''
         backgroundImg={ModelS}
         leftBtnText="custom order"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}/>

        <Item
         id="model-3"
         title="Model 3"
         desc="Money Back Gurantee"
         descLink=''
         backgroundImg={Model3}
         leftBtnText="custom order"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}/>

        <Item
         id="model-X"
         title="Model X"
         desc="Money Back Gurantee"
         descLink=''
         backgroundImg={ModelX}
         leftBtnText="custom order"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}/>

        <Item
         id="model-Y"
         title="Model Y"
         desc="Money Back Gurantee"
         descLink=''
         backgroundImg={ModelY}
         leftBtnText="custom order"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}/>

        <Item
         id="solar-roof"
         title="Solar for new roofs"
         desc="Money Back Gurantee"
         descLink=''
         backgroundImg={SolarRoofs}
         leftBtnText="order now"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         twoButtons={true}/>

        <Item
         id="accessories"
         title="Accessories"
         desc="Money Back Gurantee"
         descLink=''
         backgroundImg={Accessories}
         leftBtnText="shop now"
         leftBtnLink=''
         rightBtnText="learn more"
         rightBtnLink=''
         />
       </div>
    </div>
  );
}

export default App;
