import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./css/adinventory.css";

class AddInventory extends Component
{
     constructor(props)
     {
        super(props)
        this.state={
            brand :[],
            val :[],
            elect :[],
            doc :[],
            price:'',
            discount:'',
            stock:'',
            waranty:''
        }
        this.onpricechange = this.onpricechange.bind(this);
        this.ondiscountchange = this.ondiscountchange.bind(this);
        this.onwarantychange = this.onwarantychange.bind(this);
        this.onstockchange = this.onstockchange.bind(this);
        this.ins_brand = this.ins_brand.bind(this);
        this.ins_elec = this.ins_elec.bind(this);
        this.ins_part = this.ins_part.bind(this);
        this.ins_tool = this.ins_tool.bind(this);
     }

     componentDidMount()
     {
   
        axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:"Brand"}}).then(res=>{
          this.setState({brand:res.data})
      })

      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:"Electronics"}}).then(res=>{
          this.setState({elect:res.data})
      })
      axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:"Doc"}}).then(res=>{
          this.setState({doc:res.data})
      })  
      
        if(this.props.location.state.inventory.isupdate===true)
        {
         axios.get("http://localhost:80/sem8project/ecom-app/ecom-app/api/getinventory.php",{params:{cat:this.props.location.state.inventory.category,id:this.props.location.state.inventory.id}}).then(
          res=>{
            this.setState({val:res.data})
            if(this.props.location.state.inventory.category=="Parts" || this.props.location.state.inventory.category=="Tools")
            {
              this.state.price = res.data['price'];
              this.state.discount = res.data['discount'];
              this.state.stock = res.data['stock'];
              this.state.waranty = res.data['waranty'];
            }
          }
         )
        }
      
          
     }

     onpricechange(e)
     {
        if(e.target.value>0)
        {
            this.setState({price:e.target.value});
        }
     }
     ondiscountchange(e)
     {
        if(e.target.value>-2)
        {
            this.setState({discount:e.target.value});
        }
     }
     onwarantychange(e)
     {
        if(e.target.value>0)
        {
            this.setState({waranty:e.target.value});
        }
     }
     onstockchange(e)
     {
       if(e.target.value>-2)
       {
        this.setState({stock:e.target.value});
       }
       
     }

     ins_brand(e)
     {
      e.preventDefault();
      const fd = new FormData();
      fd.append("bname",e.target.bname.value);
      if(this.props.location.state.inventory.isupdate===false)
      {
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
        })
      }
      else
      {
        fd.append("bid",this.props.location.state.inventory.id);
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
        })
      }
      
     }

     ins_elec(e)
     {
      e.preventDefault();
      const fd = new FormData();
      fd.append("ename",e.target.ename.value);
      fd.append("brandid",e.target.brandselc.value);
      fd.append("typeselc",e.target.typeselc.value);
      fd.append("eimg",e.target.eimg.files[0]);
      if(this.props.location.state.inventory.isupdate===false)
      {
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
          console.log(res.data);
        })
      }
      else
      {
        fd.append("eid",this.props.location.state.inventory.id);
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
        })
      }
     

      
     }

     ins_part(e)
      {
        e.preventDefault();
        const fd = new FormData();
        fd.append("pname",e.target.pname.value);
        fd.append("brandid",e.target.brandselc.value);
        fd.append("price",e.target.price.value);
        fd.append("discount",e.target.discount.value);
        fd.append("stock",e.target.stock.value);
        fd.append("waranty",e.target.waranty.value);
        fd.append("condition",e.target.condselc.value);
        fd.append("pdesc",e.target.pdesc.value);
        fd.append("partof",e.target.elecselc.value);
        fd.append("pimg",e.target.pimg.files[0]);
        fd.append("ptype",e.target.ptype.value);
        fd.append("doc",e.target.docselc.value);
        if(this.props.location.state.inventory.isupdate===false)
        {
          axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
            if(res.data===0)
            {
              this.props.history.push("/admin");
            }
            console.log(res.data);
          })
        }
        else
        {
          fd.append("pid",this.props.location.state.inventory.id)
          axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
            if(res.data===0)
            {
              this.props.history.push("/admin");
            }
            console.log(res.data);
          })

        }   
      }

     ins_tool(e)
     {
      e.preventDefault();
      const fd = new FormData();
      fd.append("pname",e.target.pname.value);
      fd.append("brandid",e.target.brandselc.value);
      fd.append("price",e.target.price.value);
      fd.append("discount",e.target.discount.value);
      fd.append("stock",e.target.stock.value);
      fd.append("waranty",e.target.waranty.value);
      fd.append("condition",e.target.condselc.value);
      fd.append("pdesc",e.target.pdesc.value);
      fd.append("pimg",e.target.pimg.files[0]);
      fd.append("ttype",e.target.ptype.value);
      if(this.props.location.state.inventory.isupdate===false)
      {
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
          console.log(res.data);
        })
      }
      else
      {
        fd.append("pid",this.props.location.state.inventory.id)
        axios.post("http://localhost:80/sem8project/ecom-app/ecom-app/api/adinventory.php",fd).then(res=>{
          if(res.data===0)
          {
            this.props.history.push("/admin");
          }
          console.log(res.data);
        })

      }   
     }


    insgen()
    {
        switch(this.props.location.state.inventory.category)
        {
            case "Brand": 
                  return(
              
                <div className="Table-div">
                <form onSubmit={this.ins_brand}>
                  <table width={1000 + "px"}>
                    <tbody>
                      <tr>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Brand name
                          </h6>
                          {this.props.location.state.inventory.isupdate &&
                             <input
                             type="text"
                             className="textbox"
                             name="bname"
                             defaultValue={this.state.val['bname']}
                             style={{ marginTop: 20 + "px" }}
                             required
                           ></input>
                          }
                          {!this.props.location.state.inventory.isupdate &&
                            <input
                            type="text"
                            className="textbox"
                            name="bname"
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>
                          }
                          
                        </td>
                      </tr>
                      <tr>
                      <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>

                        {!this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>INSERT</button>
                        }
                         {this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>UPDATE</button>
                        }
                         
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
                
            )
            case "Electronics": 
            return(
                <div className="Table-div">
                <form  onSubmit={this.ins_elec}>
                  <table width={1000 + "px"}>
                    <tbody>
                      <tr>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Electronics Name
                          </h6>
                          {
                            this.props.location.state.inventory.isupdate &&
                            <input
                            type="text"
                            className="textbox"
                            name="ename"
                            defaultValue={this.state.val['ename']}
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>

                          }
                          {
                            !this.props.location.state.inventory.isupdate &&
                             <input
                            type="text"
                            className="textbox"
                            name="ename"
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>
                          }
                         
                        </td>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Brand name
                          </h6>
                          <select className="textbox" name="brandselc"  style={{ marginTop: 20 + "px" }}>
                            {this.state.brand.map((res=> <option key={res.brandid} value={res.brandid}>{res.bname}</option>))}
                          </select>
                        </td>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Electronic type
                          </h6>
                          <select className="textbox" name="typeselc"  style={{ marginTop: 20 + "px" }}>
                            <option value="mobile">Mobile</option>
                            <option value="laptop" >Laptop</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Electronic Image
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                           <input type="file" name="eimg"  accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }} required></input>
                          }
                           {this.props.location.state.inventory.isupdate &&
                           <input type="file" name="eimg"  accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }}></input>
                          }
                          
                        </td>
                      </tr>
                      <tr>
                      <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                      {!this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>INSERT</button>
                        }
                         {this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>UPDATE</button>
                        }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            )

            case "Parts":
           
            return(
                <div className="Table-div">
                <form onSubmit={this.ins_part}  ref={(el) => this.myFormRef = el}>
                  <table width={1000 + "px"}>
                    <tbody>
                      <tr>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                           Product Name
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                             <input
                             type="text"
                             pattern="[a-z A-Z 0-9]*"
                             className="textbox"
                             name="pname"
                             style={{ marginTop: 20 + "px" }}
                             required
                           ></input>
                          }
                          {
                            this.props.location.state.inventory.isupdate &&
                            <input
                            type="text"
                            pattern="[a-z A-Z 0-9]*"
                            className="textbox"
                            name="pname"
                            defaultValue={this.state.val['pname']}
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>
                          }
                         
                        </td>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Brand name
                          </h6>
                          <select className="textbox" name="brandselc"  style={{ marginTop: 20 + "px" }}>
                            {this.state.brand.map((res=> <option key={res.brandid} value={res.brandid}>{res.bname}</option>))}
                          </select>
                        </td>

                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Price
                          </h6>
                            <input
                            type="number"
                            className="textbox"
                            name="price"
                            value={this.state.price}
                             onChange={this.onpricechange}
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input> 
                        </td>

                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Discount 
                          </h6>
                          <input
                            type="number"
                            className="textbox"
                            placeholder="set as -1 if no discount"
                            value={this.state.discount}
                            onChange={this.ondiscountchange}
                            name="discount"
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input> 
                        </td>
                        
                      </tr>
                      <tr>
                      <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Stock 
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                           <input
                           type="number"
                           className="textbox"
                           onChange={this.onstockchange}
                           value={this.state.stock}
                           placeholder="-1 to disable the product "
                           name="stock"
                           style={{ marginTop: 20 + "px" }}
                           required
                         ></input>
                          }

                          {this.props.location.state.inventory.isupdate &&
                           <input
                           type="number"
                           className="textbox"
                           defaultValue={this.state.val['stock']}
                           onChange={this.onstockchange}
                           value={this.state.stock}
                           placeholder="-1 to disable the product "
                         
                           name="stock"
                           style={{ marginTop: 20 + "px" }}
                           required
                         ></input>
                          }

                          
                          
                        </td>
                        <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Waranty
                          </h6>
                             <input
                             type="number"
                             className="textbox"
                             placeholder="in months"
                             value={this.state.waranty}
                             onChange={this.onwarantychange}
                             name="waranty"
                             style={{ marginTop: 20 + "px" }}
                             required
                           ></input>
                        
                        </td>
                     
                        <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Product Condition
                          </h6>
                          <select name="condselc" className="textbox" style={{ marginTop: 20 + "px"}}>
                            <option value="0">Brand New</option>
                            <option value="1">Refurbished</option>
                          </select>
                        </td>

                        <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Product Image
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                            <input type="file" name="pimg" accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }} required></input>
                          }
                          {this.props.location.state.inventory.isupdate &&
                             <input type="file" name="pimg" accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }}></input>
                          }
                        
                        </td>
                       
                      </tr>
                      <tr>
                      <td>
                          <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                            Product description
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                            <textarea name="pdesc" className="textbox" rows={5} required></textarea>
                          }
                           {this.props.location.state.inventory.isupdate &&
                            <textarea name="pdesc" defaultValue={this.state.val['pdesc']} className="textbox" rows={5} required></textarea>
                          }
                           
                        </td>
                      </tr>
                      <tr>
                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                           Part of
                          </h6>
                          <select name="elecselc" className="textbox" style={{ marginTop: 20 + "px"}}>
                            {this.state.elect.map((res=> <option key={res.eid} value={res.eid}>{res.ename}</option>))}
                          </select>
                        </td>

                        <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                           Part Type
                          </h6>
                          {!this.props.location.state.inventory.isupdate &&
                            <input
                            type="text"
                            pattern="[a-z A-Z]*"
                            className="textbox"
                            name="ptype"
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>
                          }
                          {this.props.location.state.inventory.isupdate &&
                            <input
                            type="text"
                            pattern="[a-z A-Z]*"
                            className="textbox"
                            defaultValue={this.state.val['parttype']}
                            name="ptype"
                            style={{ marginTop: 20 + "px" }}
                            required
                          ></input>
                          }
                         
                        </td>

                        <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                           Documentation
                          </h6>
                          <select name="docselc" className="textbox" style={{ marginTop: 20 + "px"}}>
                           {this.state.doc.map((res=> <option key={res.did} value={res.did}>{res.dname}</option>))}
                          </select>
                        </td>

                      </tr>
                      <tr>
                      <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                      {!this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>INSERT</button>
                        }
                         {this.props.location.state.inventory.isupdate &&
                          <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>UPDATE</button>
                        }
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            )

           case "Tools":
            return(

              <div className="Table-div">
              <form onSubmit={this.ins_tool}  ref={(el) => this.myFormRef = el}>
                <table width={1000 + "px"}>
                  <tbody>
                    <tr>
                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                         Product Name
                        </h6>
                        {!this.props.location.state.inventory.isupdate &&
                           <input
                           type="text"
                           pattern="[a-z A-Z 0-9]*"
                           className="textbox"
                           name="pname"
                           style={{ marginTop: 20 + "px" }}
                           required
                         ></input>
                        }
                        {
                          this.props.location.state.inventory.isupdate &&
                          <input
                          type="text"
                          pattern="[a-z A-Z 0-9]*"
                          className="textbox"
                          name="pname"
                          defaultValue={this.state.val['pname']}
                          style={{ marginTop: 20 + "px" }}
                          required
                        ></input>
                        }
                       
                      </td>
                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Brand name
                        </h6>
                        <select className="textbox" name="brandselc"  style={{ marginTop: 20 + "px" }}>
                          {this.state.brand.map((res=> <option key={res.brandid} value={res.brandid}>{res.bname}</option>))}
                        </select>
                      </td>

                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Price
                        </h6>
                          <input
                          type="number"
                          className="textbox"
                          name="price"
                          value={this.state.price}
                           onChange={this.onpricechange}
                          style={{ marginTop: 20 + "px" }}
                          required
                        ></input> 
                      </td>

                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Discount 
                        </h6>
                        <input
                          type="number"
                          className="textbox"
                          placeholder="set as -1 if no discount"
                          value={this.state.discount}
                          onChange={this.ondiscountchange}
                          name="discount"
                          style={{ marginTop: 20 + "px" }}
                          required
                        ></input> 
                      </td>
                      
                    </tr>
                    <tr>
                    <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Stock 
                        </h6>
                        {!this.props.location.state.inventory.isupdate &&
                         <input
                         type="number"
                         className="textbox"
                         placeholder="-1 to disable the product "
                         name="stock"
                         style={{ marginTop: 20 + "px" }}
                         required
                       ></input>
                        }

                        {this.props.location.state.inventory.isupdate &&
                         <input
                         type="number"
                         className="textbox"
                         defaultValue={this.state.val['stock']}
                         name="stock"
                         style={{ marginTop: 20 + "px" }}
                         required
                       ></input>
                        }

                        
                        
                      </td>
                      <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Waranty
                        </h6>
                           <input
                           type="number"
                           className="textbox"
                           placeholder="in months"
                           value={this.state.waranty}
                           onChange={this.onwarantychange}
                           name="waranty"
                           style={{ marginTop: 20 + "px" }}
                           required
                         ></input>
                      
                      </td>
                   
                      <td>
                      <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Product Condition
                        </h6>
                        <select name="condselc" className="textbox" style={{ marginTop: 20 + "px"}}>
                          <option value="0">Brand New</option>
                          <option value="1">Refurbished</option>
                        </select>
                      </td>

                      <td>
                      <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Product Image
                        </h6>
                        {!this.props.location.state.inventory.isupdate &&
                          <input type="file" name="pimg" accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }} required></input>
                        }
                        {this.props.location.state.inventory.isupdate &&
                           <input type="file" name="pimg" accept=".jpg,.jpeg,.png"  style={{ marginTop: 20 + "px",marginLeft:20+"px" }}></input>
                        }
                      
                      </td>
                     
                    </tr>
                    <tr>
                    <td>
                        <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                          Product description
                        </h6>
                        {!this.props.location.state.inventory.isupdate &&
                          <textarea name="pdesc" className="textbox" rows={5} required></textarea>
                        }
                         {this.props.location.state.inventory.isupdate &&
                          <textarea name="pdesc" defaultValue={this.state.val['pdesc']} className="textbox" rows={5} required></textarea>
                        }
                         
                      </td>
                    </tr>
                    <tr>
                      <td>
                      <h6 style={{ marginLeft: 20 + "px", marginTop: 20 + "px" }}>
                         Tool Type
                        </h6>
                        {!this.props.location.state.inventory.isupdate &&
                          <input
                          type="text"
                          pattern="[a-z A-Z]*"
                          className="textbox"
                          name="ptype"
                          style={{ marginTop: 20 + "px" }}
                          required
                        ></input>
                        }
                        {this.props.location.state.inventory.isupdate &&
                          <input
                          type="text"
                          pattern="[a-z A-Z]*"
                          className="textbox"
                          defaultValue={this.state.val['tooltype']}
                          name="ptype"
                          style={{ marginTop: 20 + "px" }}
                          required
                        ></input>
                        }
                       
                      </td>


                    </tr>
                    <tr>
                    <td style={{verticalAlign:"bottom",marginTop:20+"px"}}>
                    {!this.props.location.state.inventory.isupdate &&
                        <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>INSERT</button>
                      }
                       {this.props.location.state.inventory.isupdate &&
                        <button type="submit" style={{marginTop:20+"px",marginLeft:22+"px"}}>UPDATE</button>
                      }
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </div>

            ) 
        }
    }
   render()
   {
     return(
         <div className="adinventory-div">
          {this.props.location.state.inventory.isupdate &&
             <h1> UPDATE <span>{this.props.location.state.inventory.category}</span></h1>
          }
          {!this.props.location.state.inventory.isupdate &&
             <h1> ADD <span>{this.props.location.state.inventory.category}</span></h1>
          }
          
          
           {this.insgen()}
         </div>
     )
   }

}

export default withRouter(AddInventory);