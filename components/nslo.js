import React from 'react'
import styled from 'styled-components';

const Nslo = () => {

const posicao = ['norte', 'nordeste', 'leste', 'sudeste', 'sul', 'sudoeste', 'oeste', 'noroeste', 'centro']
let n = 8

  return (
    <Encapsule className={`bordme-red  espaco-igual-envolto`}   >
   <HB >   
     Oi
</HB> 
<div className='centro filho bordme-blue'> Filho 1 - {posicao[n]} </div>
      <div className='hvr-bounce-to-bottom centro filho2 bordme-red'>Filho 2 {posicao[n]} </div>
      
      <div>
      <div className='centro filho3 bordme-red'>Filho 3 {posicao[n]} </div>
      <div className='centro filho3 bordme-red'>Filho 3 {posicao[n]} </div>
      
      </div>

    </Encapsule>
  )
}
Nslo.layout = "L0"
export default Nslo

const Encapsule = styled.div`
height: 100vh;
width: 100vw;


.filho{
height: 200px;
width: 200px; 
background-color: grey;
}

.filho2{
height: 200px;
width: 200px; 
background-color: blue ;
}


.filho3{
height: 200px;
width: 200px; 
background-color: red ;
border-radius: 50%;
}

.norte{    display: flex;    justify-content:center;      align-items:flex-start;  }
.nordeste{ display: flex;    justify-content:flex-end;    align-items:flex-start;  }
.leste{    display: flex;    justify-content:flex-end;    align-items:center;    }
.sudeste{  display: flex;    justify-content: flex-end;   align-items:flex-end ;  }
.sul{      display: flex;    justify-content: center;     align-items:flex-end ;  }
.sudoeste{ display: flex;    justify-content: flex-start; align-items:flex-end ;  }
.oeste{    display: flex;    justify-content:flex-start;  align-items:center;  }
.noroeste{ display: flex;    justify-content:flex-start;  align-items:flex-start;  }
.centro{   display: flex;    justify-content:center;      align-items:center;  }
.espaco-igual-envolto{  display: flex;   justify-content: space-around;   }
.espaco-maximo-entre{  display: flex;   justify-content: space-between;   }


`


const HB = styled.div`
.hvr-bounce-to-bottom {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.hvr-bounce-to-bottom:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(10deg, #FFA061 27.6%, rgba(255, 160, 97, 0) 100%);
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: 50% 0;
  transform-origin: 50% 0;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.hvr-bounce-to-bottom:hover, .hvr-bounce-to-bottom:focus, .hvr-bounce-to-bottom:active {
  color: white;
}
.hvr-bounce-to-bottom:hover:before, .hvr-bounce-to-bottom:focus:before, .hvr-bounce-to-bottom:active:before {
  -webkit-transform: scaleY(1);
  transform: scaleY(1);
  -webkit-transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
  transition-timing-function: cubic-bezier(0.52, 1.64, 0.37, 0.66);
}



`