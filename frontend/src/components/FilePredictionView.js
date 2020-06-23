import React, { useState } from "react";
import { Paper, Button, InputLabel } from "@material-ui/core";
import useStyles from "../styles/FilePredictionView.styles";

import Cookies from "js-cookie";
import axios from "axios";

const FilePredictionView = () => {
	const [ selectedFile, setSelectedFile ] = useState(null);
	const onChangeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleFileFormClick = async () => {
		const data = new FormData();
		data.append("file", selectedFile);
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
				"http://localhost:8000/upload/",
				data,
				config
			);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<form className={classes.form}>
					<div className='form-group files'>
						<InputLabel>Upload Your File </InputLabel>
						<input
							type='file'
							className='form-control'
							multiple=''
							onChange={onChangeHandler}
						/>
					</div>
					<Button
						variant='contained'
						color='primary'
						fullWidth
						onClick={handleFileFormClick}>
						Predict
					</Button>
				</form>
			</Paper>
		</div>
	);
};

export default FilePredictionView;
