import React, {Component} from "react";
import TOOLS from "../../assets/tools/tools";
import "./index.less"
class Menu extends Component {
  constructor(props) {
   super(props);
   this.state = {  
    firstList:"",
    secondList:"",
    thirdList: "",
    active: -1,
    active1: -1,
    active2: -1
  };
}
  componentWillMount () {
    //console.log("menu_array",this.props.menu_array)
  }
  changefirstList(Name, index){
    this.setState({ 
      firstList: Name,
      active: index
    });
    this.props.menu_array.map((item, index) => {
      if(Name === item.name) {
        this.setState({ 
          secondList: item.children[0].name,
        });
      }
      return true;
    })
  }
  changesecondList(Name, index){
    this.setState({ 
      secondList: Name,
      active1: index
    });
    this.props.menu_array.map((item, index) => {
      item.children.map((it,i)=>{
        if(Name === it.name) {
          this.setState({ 
            thirdList: item.children[0] ,
          });
        }
        return true;
      })
    })
  }
  changethirdList(Name, index){
    this.setState({ 
      thirdList: Name,
      active2: index
    });
  }
  Allfirst(){
    this.setState({ 
      active: -1,
      active2: -1
    });
  }
  Allsecond(){
    this.setState({ 
      active1: -1
    });
  }
  Allthird(){
    this.setState({ 
      active2: -1
    });
  }
render(){
  const {menu_array} = this.props
  const Allsecond = menu_array.map((item, index) => {
    return item.children.map((it,i)=>{
      return <li className={it.id === this.state.active1 ? 'active' : ''} key={it.id} onClick={e=>this.changesecondList(it.name,it.id)}>{it.name}</li>
    })
  })
  const Allthird = menu_array.map((item, index) => {
    return item.children.map((it,i)=>{
      return it.children.map((city, j) =>
          <li className={city.id === this.state.active2 ? 'active' : ''} key={city.id}  onClick={e=>this.changethirdList(city.name, city.id)}>{city.name}</li>
        ) 
    })
  });
  const second = menu_array.map((item, index) => {
    return item.children.map((it,i)=>{
      if(this.state.firstList == item.name) {
        return <li className={it.id === this.state.active1 ? 'active' : ''} key={it.id} value={it.name} onClick={e=>this.changesecondList(it.name,it.id)}>{it.name}</li>
      }
      return true;
    })
  })
  const third = menu_array.map((item, index) => {
    return item.children.map((it,i)=>{
      if(this.state.secondList == it.name) {
        return it.children.map((city, j) =>
          <li className={city.id === this.state.active2 ? 'active' : ''} key={city.id}  onClick={e=>this.changethirdList(city.name, city.id)}>{city.name}</li>
        )
      }
      return true;
      
    })
  });
 return (
    <div className="Category">
            <ul>
              <li className="clearfix">
                <span className="l_title">一级分类：</span>
                <ul>
                  <li className={this.state.active === -1 ? 'active' : ''} onClick={e=>this.Allfirst()}>全部</li>
                  {
                    menu_array.map((item,index)=>{
                      let style = item.id === this.state.active ? 'active' : ''
                      return  <li className={style} key={item.id} onClick={e=>this.changefirstList(item.name, item.id)}>{item.name}</li>
                    })
                  }
                </ul>
              </li>
              <li className="clearfix">
                <span className="l_title">二级分类：</span>
                <ul>
                  <li className={this.state.active1 === -1 ? 'active' : ''} onClick={e=>this.Allsecond()}>全部</li>
                  {this.state.active === -1 ? Allsecond : second}
                </ul>
              </li>
              <li className="clearfix">
                <span className="l_title">三级分类：</span>
                <ul>
                  <li className={this.state.active2 === -1 ? 'active' : ''} onClick={e=>this.Allthird()}>全部</li>
                  {this.state.active1 === -1 ? Allthird : third}
                </ul>
              </li>
            </ul>
      </div>
  ) 
}

}

export default Menu;