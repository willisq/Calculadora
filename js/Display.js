export default class{
  constructor(options){
    this.display = document.createElement('input');
    this.display.type = 'text';
    this.display.value = 0;
    this.properties = {
      id : 'display',
      w : 150,
      h : 30,
      border: 'none', 
      borderRadius: 0,
      borderStyle: 'none',
      bgClr : 'rgba(255,255,250,1)',
      color : 'rgba(0,0,0,1)',
      outline : 'none',
      font: 'monospace',
      fontSize: 25,
      padding : 5,
      marginTop : 6,
      marginBottom : 6,
      marginLeft : 2,
      marginRight : 3,
      textAlign : 'right',
      readOnly : true,
      maxLength : 12,
      cursor: 'default',
      bgAlert: 'rgba(200,0,0,0.5)',
      colorAlert: 'white'
     }; 
     this.setproperties(options);

  }
/********************************* Methods ***********************************/
  setproperties(obj){
    for(var attrname in obj) {this.properties[attrname] = obj[attrname]};
    this.display.id = this.properties.id;
    this.display.style.width = this.properties.w + 'px';
    this.display.style.height = this.properties.h + 'px';
    this.display.style.border = this.properties.border;
    this.display.style.borderRadius = this.properties.borderRadius + 'px';
    this.display.style.backgroundColor = this.properties.bgClr;
    this.display.style.outline = this.properties.outLine;
    this.display.style.fontFamily = this.properties.font;
    this.display.style.fontSize = this.properties.fontSize + 'px';
    this.display.style.padding = this.properties.padding + 'px';
    this.display.style.marginTop = this.properties.marginTop + 'px';
    this.display.style.marginBottom = this.properties.marginBottom + 'px';
    this.display.style.marginLeft = this.properties.marginLeft + 'px';
    this.display.style.marginRight = this.properties.marginRight + 'px';
    this.display.style.textAlign = this.properties.textAlign;
    this.display.style.outline = this.properties.outline;
    this.display.style.cursor = 'default',
    this.display.style.borderStyle = this.properties.borderStyle;
    this.display.readOnly = this.properties.readOnly;
    this.addTobody();
  }

  addTobody(){
    document.body.appendChild(this.display);
    return this;
  }

  setAlert(){
    this.display.style.backgroundColor = this.properties.bgAlert;
    this.display.style.color = this.properties.colorAlert;
    return this;
  }

  setNormal(){
    this.display.style.backgroundColor = this.properties.bgClr;
    this.display.style.color = this.properties.color;
    return this;
  }

}