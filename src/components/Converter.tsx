// import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
// import Layout from "./Layout";
// import {testKey, testURL} from "../tokens/moonpay";
// import axios from "axios";

// const Converter = () => {
// 	const [amountInUSDT, setAmountInUSDT] = useState(0);
// 	const [amountInFiat, setAmountInFiat] = useState(100);
// 	const [amountInNewFiat, setAmountInNewFiat] = useState(0);
// 	const [fiat, setFiat] = useState("USD");
// 	const [newfiat, setNewFiat] = useState("GBP");

// 	const calculateUSDT = async (
// 		e?: FormEvent | ChangeEvent<HTMLInputElement>,
// 	) => {
// 		try {
// 			let {data} = await axios.get(
// 				`${testURL}buy_quote?baseCurrencyAmount=${amountInFiat}&baseCurrencyCode=${fiat.toLowerCase()}&apiKey=${testKey}`,
// 			);
// 			setAmountInUSDT(data.quoteCurrencyAmount);
// 			calculateNewFiat(e);
// 		} catch (err: any) {
// 			console.error(err.message);
// 		}
// 	};

// 	const calculateNewFiat = async (
// 		e?: FormEvent | ChangeEvent<HTMLInputElement>,
// 	) => {
// 		try {
// 			let {data} = await axios.get(
// 				`${testURL}sell_quote?baseCurrencyAmount=${amountInUSDT}&quoteCurrencyCode=${newfiat.toLowerCase()}&apiKey=${testKey}`,
// 			);
// 			setAmountInNewFiat(Number(data.quoteCurrencyAmount).toFixed(2));
// 		} catch (err: any) {
// 			console.error(err.message);
// 		}
// 	};

// 	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
// 		const target = e.target as HTMLSelectElement;
// 		setFiat(target.value);
// 		calculateUSDT(e);
// 	};

// 	useEffect(() => {
// 		calculateUSDT();
// 	});

// 	return (
// 		<Layout title='Converter'>
// 			<div className='container'>
// 				<div className='row my-5'>
// 					<div className='col-lg-6 mx-auto'>
// 						<div className='card'>
// 							<div className='card-body p-3'>
// 								<form>
// 									<p>
// 										Disclaimer: Your fiat value will be
// 										converted to USDT and then to the final
// 										fiat currency.
// 									</p>
// 									<div className='form-group mt-4'>
// 										<label htmlFor='sendFiat'>
// 											From Fiat
// 										</label>
// 										<div className='flex'>
// 											<select
// 												id='sendFiat'
// 												className='form-control w-[20%]'
// 												value={fiat}
// 												onChange={handleChange}
// 											>
// 												<option value='USD'>USD</option>
// 												<option value='GBP'>GBP</option>
// 												<option value='EUR'>EUR</option>
// 											</select>
// 											<input
// 												type='number'
// 												placeholder='1'
// 												id='USDT'
// 												className='form-control'
// 												value={amountInFiat}
// 												onChange={(
// 													e: ChangeEvent<HTMLInputElement>,
// 												) => {
// 													const target =
// 														e.target as HTMLInputElement;
// 													setAmountInFiat(
// 														Number(target.value),
// 													);
// 												}}
// 											/>
// 										</div>
// 									</div>
// 									<div className='form-group mt-4'>
// 										<label htmlFor='amount'>
// 											Amount in USDT:
// 										</label>
// 										<input
// 											type='number'
// 											placeholder='10000'
// 											id='amount'
// 											className='form-control'
// 											value={amountInUSDT}
// 											readOnly
// 										/>
// 									</div>
// 									<div className='form-group mt-4'>
// 										<label htmlFor='tofiat'>To Fiat</label>
// 										<div className='flex'>
// 											<select
// 												id='tofiat'
// 												className='form-control w-[20%]'
// 												value={newfiat}
// 												onChange={(
// 													e: ChangeEvent<HTMLSelectElement>,
// 												) => {
// 													const target =
// 														e.target as HTMLSelectElement;
// 													setNewFiat(target.value);
// 													calculateUSDT(e);
// 												}}
// 											>
// 												<option value='USD'>USD</option>
// 												<option value='GBP'>GBP</option>
// 												<option value='EUR'>EUR</option>
// 											</select>
// 											<input
// 												type='number'
// 												placeholder='10000'
// 												id='newamount'
// 												className='form-control'
// 												value={amountInNewFiat}
// 												readOnly
// 											/>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</Layout>
// 	);
// };

// export default Converter;
