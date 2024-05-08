import Layout from "./Layout";

const FiatConverter = () => {
	return (
		<Layout title='FiatConverter'>
			<div className='container'>
				<div className='row my-5'>
					<div className='col-lg-6 mx-auto'>
						<div className='card'>
							<div className='card-body p-3'>
								<form>
									<div className='form-group'>
										<label htmlFor='from'>Crypto:</label>
										<select className='form-control'>
											<option value='BTC'>BTC</option>
											<option value='ETH'>ETH</option>
											<option value='DOGE'>DOGE</option>
											<option value='ABC'>ABC</option>
										</select>
									</div>
									<div className='form-group mt-4'>
										<label htmlFor='amount'>Amount:</label>
										<input
											type='number'
											placeholder='1'
											id='amount'
											className='form-control'
										/>
									</div>
									<div className='form-group mt-4'>
										<label htmlFor='to'>Fiat:</label>
										<select className='form-control'>
											<option value='USD'>USD</option>
											<option value='AED'>AED</option>
											<option value='GMD'>GMD</option>
											<option value='ANG'>ANG</option>
											<option value='NGN'>NGN</option>
											<option value='EUR'>EUR</option>
											<option value='INR'>INR</option>
										</select>
									</div>
									<div className='form-group mt-4'>
										<input
											className='btn btn-success'
											type='submit'
											value='Convert'
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default FiatConverter;
