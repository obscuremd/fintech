import {PropsWithChildren} from "react";
import {Link} from "react-router-dom";

const Layout = (props: PropsWithChildren & {title: string}) => {
	return (
		<div className=''>
			<nav className='navbar navbar-expand-lg navbar-dark bg-dark p-3'>
				<Link to='/' className='navbar-brand'>
					<h1>Crypto</h1>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarNav'
					aria-controls='navbarNav'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div
					className='collapse navbar-collapse visible'
					id='navbarNav'
				>
					<ul className='navbar-nav'>
						<li className='nav-item active'>
							<Link to='/' className='nav-link active'>
								<h1>Home</h1>
							</Link>
						</li>
						{/* <li className='nav-item'>
							<Link to='/onramp' className='nav-link'>
								<h1>Crypto to Crypto</h1>
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/offramp' className='nav-link'>
								<h1>Crypto to Fiat</h1>
							</Link>
						</li> */}
					</ul>
				</div>
			</nav>
			{props.children}
		</div>
	);
};

export default Layout;
