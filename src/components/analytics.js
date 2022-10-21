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
    </TabList>

    <TabPanel>
      <Revenue></Revenue>
    </TabPanel>
    <TabPanel>
     <Apart prodtype="part"></Apart>
    </TabPanel>
    <TabPanel>
    <Apart prodtype="tool"></Apart>
    </TabPanel>
  </Tabs>
      )
   }
}

export default withRouter(Analytics);