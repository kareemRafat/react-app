import Header from './header.js';

/*
  types of components 
  1- variable component ===> let myHeader = (<nav></nav>) ;
    call it ===> {myHeader} ==> must be between {}
  2- function component ===> let myHeader = () => return (<nav></nav>)
    call it ===> <myHeader/>  without {}  ==> you created your own tag 
    * warning * don`t name the function component like tag names as header 
    * call it Header *
*/

let App = () => {

  return (
    <>
      {/* get the header jsx element and inject the App with it*/}
      <Header/>

      <div style={{
              color : 'dodgerblue',
              fontSize : '60px'
            }}  
           className='App fw-bold fst-italic'>

          <p>Welcome to my first react app</p>

      </div>
    </>

  );
}
export default App ;