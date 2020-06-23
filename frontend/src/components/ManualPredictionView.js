import React, { useState } from "react";
import PredictionForm from "./PredictionForm";
import { Button, Paper } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

import Cookies from "js-cookie";
import axios from "axios";

const ManualPredictionView = () => {
	const ColorButton = withStyles((theme) => ({
		root: {
			color: "white",
			backgroundColor: green[500],
			"&:hover": {
				backgroundColor: green[700]
			}
		}
	}))(Button);

	const [ data, setData ] = useState([]);

	const handleManualFormClick = async () => {
		console.log(data);
		try {
			const config = {
				headers: {
					Content_type: "application/json",
					HTTP_X_REQUESTED_WITH: "XMLHttprequest",
					"X-Requested-With": "XMLHttpRequest",
					"X-CSRFTOKEN": Cookies.get("csrftoken")
				}
			};
			const res = await axios.post(
				"http://localhost:8000/test/",
				data,
				config
			);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<PredictionForm data={data} setData={setData} />
			<Paper
				style={{
					marginTop: 8,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					minHeight: "10vh"
				}}>
				<ColorButton
					variant='contained'
					color='primary'
					onClick={handleManualFormClick}>
					Predict
				</ColorButton>
			</Paper>
		</div>
	);
};

export default ManualPredictionView;
