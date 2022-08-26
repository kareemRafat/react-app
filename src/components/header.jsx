import {useState} from 'react'

let Header = (props) => {

	const [isHidden , toggleHidden] = useState(false);
	
	// console.log(isHidden); 


	// props is the parameter that receive every custom attributes in Header component call
	// console.log(props);
	return (
		<>
		<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
		  <div className="container-fluid">
		    <a className="navbar-brand" href=" ">
		      Navbar
		    </a>
		    <button
		      className="navbar-toggler"
		      type="button"
		      data-bs-toggle="collapse"
		      data-bs-target="#navbarSupportedContent"
		      aria-controls="navbarSupportedContent"
		      aria-expanded="false"
		      aria-label="Toggle navigation"
		    >
		      <span className="navbar-toggler-icon" />
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		          <a className="nav-link active" aria-current="page" href=" ">
		            Home
		          </a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href=" ">
		            Link
		          </a>
		        </li>
		        <li className="nav-item dropdown">
		          <a
		            className="nav-link dropdown-toggle"
		            href=" "
		            id="navbarDropdown"
		            role="button"
		            data-bs-toggle="dropdown"
		            aria-expanded="false"
		          >
		            Dropdown list
		          </a>
		          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								{/* loop in object passed to props */}
								{/* js code in two {} */}
								{props.dataObject.map((item,index) => {
									return (<li key={item.name}>
													<a className="dropdown-item"  href=" ">
														{item.name}
													</a>
												</li>)
								})}
		            
		            
		            <li>
		              <hr className="dropdown-divider" />
		            </li>
		            <li>
		              <a className="dropdown-item" href="#">
		                Something else here
		              </a>
		            </li>
		          </ul>
		        </li>
		        <li className="nav-item">
		          <a
		            className="nav-link disabled text-danger fw-bold"
		            href="#"
		            tabIndex={-1}
		            aria-disabled="true"
		          >
								{props.dataObject.username}
		          </a>
		        </li>
		      </ul>
					{/* call the function and event onClick={} camelcase */}
					<input className="btn btn-primary" type='button' value='activate' onClick={props.funRefAttr}/>
		    </div>
		  </div>
		</nav>
		
		<button onClick={()=> {
			toggleHidden(!isHidden)
			console.log(isHidden);
		}}>change</button>
		</>	
	);
}
export default Header ;