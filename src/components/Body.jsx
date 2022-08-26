import {Component} from "react";

class Body extends Component {

  i = 4 ;
  

  state = {
    post : [
      {id:1 , body : 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun'},
      {id:2 , body : 'lorem ipsum dolor sit amet, consectetur adipiscing elit,'},
      {id:3 , body : 'lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut'},
    ]


  }

  add(){
    let newobj = {id : ++this.i , body : 'lorem ipsum dolor sit amet, consectetur'};
    let newArray = [...this.state.post, newobj];
    this.setState({
      // to push $newobj to the state post object
      post : newArray
    })
    console.log(newArray);
  }

  render() {
    return (
      <>
        <button className="btn btn-primary" onClick={this.add.bind(this)}>click me</button>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="accordionExample">
              {this.state.post.map((item ,index)=> {
                return (
                  <div className="accordion-item" key={item.id} >
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by
                        default, until the collapse plugin adds the appropriate classes that we
                        use to style each element. These classes control the overall appearance,
                        as well as the showing and hiding via CSS transitions. You can modify
                        any of this with custom CSS or overriding our default variables. It's
                        also worth noting that just about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does limit overflow.
                      </div>
                    </div>
                  </div>
                )
              })}
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }



}

export default Body ;