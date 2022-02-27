export default class{
  constructor(options){
    this.container = document.createElement('div');
    this.container.class = 'flex-container';
    this.properties = {
      position: 'absolute',
      x : 0,
      y : 0,
      w : 100,
      h : 100,
      margin : 0,
      border : 'none',
      borderTopLeftRadius : 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0, 
      flexDirection : 'row', 
      flexWrap : 'wrap',
      justifyContent : 'space-around',
      alignItems: 'flexStart',
      bgClr : 'rgba(20,10,200,0.4)',
      outLine : 'none',
      boxShadow: 0,
    }
    this.setproperties(options);
  }
  /*********************************** Methods **************************/
  activeFlex(){
    this.container.id = 'div'
    this.container.style.display = 'flex';
    this.container.style.flexDirection = this.properties.flexDirection;
    this.container.style.justifyContent = this.properties.justifyContent;
    this.container.style.flexWrap = this.properties.flexWrap;
    this.container.style.alignItems = this.properties.alignItems;
    return this; 
  }

  setproperties(obj){
    for(var attrname in obj) {this.properties[attrname] = obj[attrname]};
    this.container.style.width = this.properties.w + 'px';
    this.container.style.height = this.properties.h + 'px';
    this.container.style.border = this.properties.border;
    this.container.style.backgroundColor = this.properties.bgClr;
    this.container.style.outline = this.properties.outLine;
    this.container.style.margin = this.properties.margin + 'px';
    this.container.style.borderBottomLeftRadius = this.properties.borderBottomLeftRadius + 'px';
    this.container.style.borderBottomRightRadius = this.properties.borderBottomRightRadius + 'px';
    this.container.style.borderTopLeftRadius = this.properties.borderTopLeftRadius + 'px';
    this.container.style.borderTopRightRadius = this.properties.borderTopRightRadius + 'px';
    this.container.style.boxShadow = this.properties.boxShadow 
    this.setposition();
    this.addTobody();
    this.activeFlex();
  }

  setposition(x = this.properties.x, y = this.properties.y){
    if (x !==0 || y !==0 ){
      this.container.style.position = 'absolute';
      this.container.style.left = x + 'px';
      this.container.style.top = y + 'px';
      return this;
    }
  }

  addToContainer(element){
    this.container.appendChild(element);
    return this;
  }

  changeFlexDirection(type){
    this.properties.flexDirection = type;
    this.activeFlex();
    return this;
  }

  addTobody(){
    document.body.appendChild(this.container);
    return this;
  }

}