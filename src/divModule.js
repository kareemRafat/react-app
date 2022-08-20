import header from './header.js';

/*
  types of components 
  1- variable component ===> let myHeader = (<nav></nav>) ;
    call it ===> {myHeader} ==> must be between {}
  2- function component ===> let myHeader = () => return (<nav></nav>)
    call it ===> <myHeader/>   ==> you created your own tag


*/

let divElement = (
  <div>
    {/* get the header jsx element and inject the divElement with it*/}
    { header }
    
    <div style={{
            color : 'dodgerblue',
            fontSize : '60px'
          }}  
         className='App fw-bold fst-italic'>

        <p>Lorem ipsum, dolor sit, amet consectetur adipisicing elit. Sapiente, a!</p>

    </div>
  </div>

);

export default divElement ;