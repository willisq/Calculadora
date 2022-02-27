import Boton from './Boton.js';
import Container from './Container.js';
import Display from './Display.js';
export default class{
    constructor(){
        var that = this;
        this.num1 = 0;
        this.display = new Display({
            w: 270,
            borderRadius: 4
        });
        this.preview = new Display({
            bgClr : 'rgba(0,10,180,0.1)',
            h: 25,
            w: 270,
            marginBottom: 0,
            borderRadius: 4
        });
        this.operaciones = [
            
            new Boton({
                id : '+', //0
                value : '+',
                bgClr : 'rgba(10,25,0,0.5)',
                bgClrOver: 'rgba(100,0,200,0.5)',
                color : 'white',
                onClick : ()=>this.getNumbers('+')
            }),
    
            new Boton({
                id : '-', //1
                value : '-',
                bgClr : 'rgba(10,25,0,0.5)',
                bgClrOver: 'rgba(100,0,200,0.5)',
                color : 'white',
                onClick : ()=>this.getNumbers('-')
            }),

            new Boton({
                id : '*', //2
                value : 'x',
                bgClr : 'rgba(10,25,0,0.5)',
                bgClrOver: 'rgba(100,0,200,0.5)',
                color : 'white',
                onClick : ()=>this.getNumbers('*')
            }),
    
            new Boton({
                id : '/', //3
                value : '/',
                marginTop: 6,
                bgClr : 'rgba(10,25,0,0.5)',
                bgClrOver: 'rgba(100,0,200,0.5)',
                color : 'white',
                onClick : ()=>this.getNumbers('/')
            }),
    
            new Boton({
                id : 'igual', //4
                value: '=',
                bgClr: 'rgba(250,250,250,0.8)',
                bgClrOver: 'white',
                colorOver: 'gray',
                h: 137,
                marginBottom : 3,
                onClick : ()=>this.equal()
            }),
    
            new Boton({
                id : 'clear', //5
                value : 'C',
                bgClr: 'rgba(200,0,0,1)',
                color: 'white',
                bgClrOver : 'rgba(250,25,0,1)',
                onClick: ()=> this.getC()
            }),

            new Boton({
                id : 'del', //6
                fontWeigth: 'bold',
                value: '<',
                bgClr: 'rgba(150,0,0,0.8)',
                color: 'white',
                bgClrOver: 'rgba(180,0,0,1)',
                onClick : ()=>this.del()
            }),
    
            /*new Boton({
                id : 'pow', //7
                value : '^',
                bgClr : 'rgba(10,25,0,0.5)',
                color : 'white',
                onClick: ()=> this.operate(5)
            }),*/
        ];
        this.conNumeros = new Container({
            w: 210,
            h: 380,
            flexDirection : 'row',
            borderBottomLeftRadius : 5,
            borderTopLeftRadius: 5
        });
        this.contOperaciones = new Container({
            flexDirection : 'column',
            w : 70, 
            h : 380,
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            alignItems : 'center'
        });
        
        this.contDisplay = new Container({
            h : 80,
            w : 480,
            bgClr: 'transparent',
        }); 

        this.contenedorPrincipal = new Container({
            justifyContent: 'center',
            x: 10,
            y: 10,
            w : 300,
            h : 500,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            boxShadow: '10px 5px 5px rgba(0,0,0,0.09)'
        });

        this.botones = [];
        // Crear botones 0 a 9
        for (let i = 0; i<10; i++){
            if (i == 0){ this.botones.push(new Boton({
                w : 133,
                id : i,
                value : i,
                onClick: ()=> {this.getNumbers(`${i}`)}
            }))}
            else {this.botones.push(new Boton({
                id : i,
                value : i,
                onClick: ()=> {this.getNumbers(`${i}`)}
            }))};
        };
        // Crea boton '.'
        this.botones[10] = new Boton({
            id : '.', //0
            value : '.', 
            onClick : ()=> this.getNumbers('.')
        });
        
        onkeyup = e => {
            for (let i = 0; i < this.botones.length; i++){
                if (e.key == that.botones[i].properties.id) this.getNumbers(e.key);
            }
            switch(e.key){
                case '+':
                case '-':
                case '*':
                case '/':
                this.getNumbers(e.key);
                break;
                case 'Enter':
                this.equal();
                break;
                case 'Backspace':
                this.del();
                break;
            }
        }
        
        // agrear elementos creados en sus contenedores
        this.contOperaciones.addToContainer(this.operaciones[3].boton); // cociente
        this.contOperaciones.addToContainer(this.operaciones[1].boton); // resta
        this.contOperaciones.addToContainer(this.operaciones[0].boton); // suma
        this.contOperaciones.addToContainer(this.operaciones[4].boton); // igual
        this.conNumeros.addToContainer(this.operaciones[5].boton); // clear
        this.conNumeros.addToContainer(this.operaciones[6].boton); // borrar
        this.conNumeros.addToContainer(this.operaciones[2].boton); // producto
        this.conNumeros.addToContainer(this.botones[7].boton);
        this.conNumeros.addToContainer(this.botones[8].boton);
        this.conNumeros.addToContainer(this.botones[9].boton);
        this.conNumeros.addToContainer(this.botones[4].boton);
        this.conNumeros.addToContainer(this.botones[5].boton);
        this.conNumeros.addToContainer(this.botones[6].boton);
        this.conNumeros.addToContainer(this.botones[1].boton);
        this.conNumeros.addToContainer(this.botones[2].boton);
        this.conNumeros.addToContainer(this.botones[3].boton);
        this.conNumeros.addToContainer(this.botones[0].boton);
        this.conNumeros.addToContainer(this.botones[10].boton); //punto
        this.contDisplay.addToContainer(this.preview.display);
        this.contDisplay.addToContainer(this.display.display);
        this.contenedorPrincipal.addToContainer(this.contDisplay.container);
        this.contenedorPrincipal.addToContainer(this.conNumeros.container);        
        this.contenedorPrincipal.addToContainer(this.contOperaciones.container);
    }
    /************************************* Methods **************************************/
    
    getNumbers(number){
        if (number == '.'){
            if (this.num1 == 0) this.num1 = '0.';
            else this.num1+= number;
        }
        else if (this.num1 == 0 && this.num1 !=='0.') {
            this.num1 = number;
        }
        else this.num1 += number;
        this.refresh();
        return this;
    }

    getPoint(){
        var that = this;
        if (this.num1 == 0) this.num1 = '0.';
        this.refresh();
        return this;
    }

    refresh(){
        this.display.display.value = this.num1;
        this.preview.display.value = this.evaluate(this.num1);
        return this;
    }

    del(){
        if(this.display.display.value.length == 1 || this.display.display.value.length == 0 )this.num1 = 0;
        else this.num1 = this.display.display.value.slice(0,calculadora.display.display.value.length-1);
        this.refresh();
        return this;
    }

    getC(){
        this.num1 = 0;
        this.refresh();
        return this;
    }
    
    equal(){
        this.num1 = eval(this.display.display.value);
        this.refresh();
        return this;
    }

    verifyOrder(number, maxLength){
        if( number.length >= maxLength){
            
        }
    }

    evaluate(quantie){
        var that = this;
        if(quantie[quantie.length-1] == '+' || quantie[quantie.length-1] == '-' || 
        quantie[quantie.length-1] == '*' || quantie[quantie.length-1] == '/' || quantie[quantie.length-1] == '.' ){
            this.preview.setAlert();    
            return 'Error';
        }
        else {
          this.preview.setNormal();
          return eval(quantie);  
        } 

    }
}