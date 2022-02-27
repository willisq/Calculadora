export default class{
  constructor(options){
    var that = this;
    this.boton = document.createElement('input');
    this.boton.type = 'button'; 
    this.properties = {
      id: '',
      h : 60,
      w : 60,
      value : '',
      border : 'none',
      outLine: 'none',
      bgClr : 'rgba(255,255,250,1)',
      bgClrOver : 'rgba(200,200,250,0.8)',
      color : 'rgba(0,0,0,1)',
      colorOver : 'rgba(250,250,250,1)', 
      font: 'monospace',
      fontWeigth: 'normal',
      fontSize: 40,
      padding : 3,
      marginTop : 10,
      marginBottom : 'auto',
      marginLeft : 'auto',
      marginRight : 'auto', 
      overCursor : 'pointer',
      defaultCursor : 'default',
      onClick : ()=>{},
      onMouseOver : ()=>{},
      onMouseOut : ()=>{},
      onFocus : ()=>{},
      onBlur : ()=>{}
    }; 
    this.boton.onclick = (e)=> {
      that.properties.onClick();
    }
    
    this.boton.onmouseover = (e)=> {
      that.setSelectedButton();
      that.properties.onMouseOver(); 
    } 

    this.boton.onfocus = (e)=> {
      that.setSelectedButton()
      that.properties.onFocus();
    }

    this.boton.onmouseout = (e)=> {
      that.setNormalButton();
      that.properties.onMouseOut();
    }
    this.boton.onblur = (e)=> {
      that.setNormalButton();
      that.properties.onBlur();
    }

    this.setproperties(options);
  }
  /********************Methods ******************************/

  onClick(extFunct){this.properties.onClick = extFunct}

  setSelectedButton(){
    this.boton.style.backgroundColor = this.properties.bgClrOver;  
    this.boton.style.color = this.properties.colorOver;
    this.boton.style.cursor = this.properties.overCursor;
    return this;
  }

  setNormalButton(){
    this.boton.style.backgroundColor = this.properties.bgClr;
    this.boton.style.color = this.properties.color;
    this.properties.cursor = this.properties.defaultCursor;
    return this;
  }

  setproperties(obj){
    for(var attrname in obj) {this.properties[attrname] = obj[attrname]};
    this.boton.id = this.properties.id;
    this.boton.style.width = this.properties.w + 'px';
    this.boton.style.height = this.properties.h + 'px';
    this.boton.value = this.properties.value;
    this.boton.style.border = this.properties.border;
    this.boton.style.backgroundColor = this.properties.bgClr;
    this.boton.style.color = this.properties.color;
    this.boton.style.outline = this.properties.outLine;
    this.boton.style.fontFamily = this.properties.font;
    this.boton.style.fontSize = this.properties.fontSize + 'px';
    this.boton.style.padding = this.properties.padding + 'px';
    this.boton.style.marginTop = this.properties.marginTop + 'px';
    this.boton.style.marginBottom = this.properties.marginBottom + 'px';
    this.boton.style.marginLeft = this.properties.marginLeft + 'px';
    this.boton.style.marginRight = this.properties.marginRight + 'px';
    this.boton.style.fontWeight = this.properties.fontWeigth;
    document.body.appendChild(this.boton);
  }

}