import React ,{Component}from 'react';


class Contenedor extends Component {

constructor(){
            super()
            this.state ={
            resultado :'',
            base:'',
            alv:''

            }}
            clickAumentar=()=>{
                
            }
            clickuno=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'1'})
            }
            clickdos=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'2'})
            }
            clicktres=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'3'})
            }
            clickcuatro=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'4'})
            }
            clickcinco=()=>{
                const {resultado} =this.state;
               
               this.setState({resultado:resultado+'5'})
            }
            clickseis=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'6'})
            }
            clicksiete=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'7'})
            }
            clickocho=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'8'})
            }
            clicknueve=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'9'})
            }
            clickcero=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:resultado +'0'})
            }
           clickpordos=()=>{
                const {resultado} =this.state;
              const nwresultado =(parseInt(resultado)*2)+"";
                this.setState({resultado:nwresultado })
            }
           
            clickigual=()=>{
                const {resultado} =this.state;
                const {base} =this.state;
                const {alv} =this.state;
                
                if (alv==='suma') {
                     const suma = (parseInt(base) +parseInt(resultado)+"")
               this.setState({resultado:suma})
                } else if (alv==='resta') {
                    const suma = (parseInt(base) -parseInt(resultado)+"")
              this.setState({resultado:suma})
               } else if (alv==='division') {
                const suma = (parseInt(base) /parseInt(resultado)+"")
                    this.setState({resultado:suma})
                 } else if (alv==='multiplicar') {
                const suma = (parseInt(base) *parseInt(resultado)+"")
                  this.setState({resultado:suma})
       } 
            }
            clickmas=()=>{
                const {resultado} =this.state;
              
                this.setState({resultado:''})
                this.setState({base:resultado})
                this.setState({alv:'suma'})

                
            }
            clickresta=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:''})
                this.setState({base:resultado})
                this.setState({alv:'resta'})
            }
            clickdivision=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:''})
                this.setState({base:resultado})
                this.setState({alv:'division'})
                
            }
            clickmultiplo=()=>{
                const {resultado} =this.state;
               
                this.setState({resultado:''})
                this.setState({base:resultado})
                this.setState({alv:'multiplicar'})
            }
            clicklimpiar=()=>{
                
               
                this.setState({resultado:''})
                
                
            }
    render(){

        const {resultado} =this.state;

        return(
            <div className="calculadora">
            <div className="numeros">
            <div >
           <button style={{ width:50,height:50 }} onClick={this.clicksiete}  >7</button>
            <button style={{ width:50,height:50 }} onClick={this.clickocho}  >8</button>
            <button style={{ width:50,height:50 }} onClick={this.clicknueve}  >9</button>
            <button style={{ width:50,height:50 }} onClick={this.clickdivision}  >/</button>
       
             </div>
            <div >
           <button style={{ width:50,height:50 }}  onClick={this.clickcuatro}>4 </button>
            <button style={{ width:50,height:50 }} onClick={this.clickcinco}  >5 </button>
            <button style={{ width:50,height:50 }} onClick={this.clickseis}  >6 </button>
            <button style={{ width:50,height:50 }} onClick={this.clickmultiplo}  >*</button>
       
             </div>
            <div >
            <button style={{ width:50,height:50 }} onClick={this.clickuno}  >1 </button>
            <button style={{ width:50,height:50 }} onClick={this.clickdos}  >2 </button>
            <button style={{ width:50,height:50 }} onClick={this.clicktres}  >3 </button>
            <button style={{ width:50,height:50 }} onClick={this.clickresta}  >-</button>
       
             </div>
            <button style={{ width:50,height:50 }} onClick={this.clickcero}  >0</button>
            <button style={{ width:50,height:50 }} onClick={this.clickigual}  >= </button>
            <button style={{ width:50,height:50 }} onClick={this.clickmas}  >+</button>
            <button style={{ width:50,height:50 }} onClick={this.clicklimpiar}  >.</button>
            </div>
            <div >
        
           Resultado :{resultado}
            </div>
            </div>
        )
        }
}
export default Contenedor;