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

/*  some test variables  */
let content = <span> from contnet variable in App.js</span>;
let funRef = () => {
  alert('good react');
}
let namesObject = [
  {id : 1 , name : 'Kareem'},
  {id : 2 , name : 'Alaa'},
  {id : 3 , name : 'Islam'},
];

let App = () => {

  return (
    // nameless tag <></> to make parent to two jsx either component or normal jsx
    <>
      {/* get the header jsx element and inject the App with it*/}
      {/* function component with paired tags*/}
      <Header 
        data={content} 
        dataArray={['ahmed','ali','ayman']}
        dataObject = {namesObject}
        // funRefAttr = {funRef}
        funRefAttr = { () => {alert('inline function')} }
      >
        {/* passed as children to header props params */}
        <p>this is child in Header component</p>
      </Header>

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