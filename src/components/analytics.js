import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Apart from "./Analytics/apart";
import Revenue from "./Analytics/revenue";


class Analytics extends Component
{
   render()
   {
      return(
        <Tabs style={{marginLeft:-10+"px",marginTop:-20+"px",width:100+"vw"}}>
    <TabList style={{fontFamily:"Roboto",letterSpacing:1+"px",backgroundColor:"#393E46",padding:10+"px"}}>
      <Tab style={{fontFamily:"Roboto",letterSpacing:1+"px",color:"#FFFFFF",backgroundColor:"#393E46"}} >Revenue</Tab>
      <Tab style={{fontFamily:"Roboto",letterSpacing:1+"px",color:"#FFFFFF",backgroundColor:"#393E46"}}>Parts</Tab>
      <Tab style={{fontFamily:"Roboto",letterSpacing:1+"px",color:"#FFFFFF",backgroundColor:"#393E46"}}>Tools</Tab>
      <Tab style={{fontFamily:"Roboto",letterSpacing:1+"px",color:"#FFFFFF",backgroundColor:"#393E46"}}>Electronic</Tab>
    </TabList>

    <TabPanel>
      <Revenue></Revenue>
    </TabPanel>
    <TabPanel>
     <Apart></Apart>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
      )
   }
}

export default withRouter(Analytics);