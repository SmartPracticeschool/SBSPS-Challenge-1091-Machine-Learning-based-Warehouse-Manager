import React, { useState, Fragment } from "react";
import axios from "axios";
import Cookies from "js-cookie";

import PredictionForm from "./PredictionForm";
import PredictionUploadFileForm from "./PredictionUploadFileForm";

const PredictionTab = () => {
	const [ state, setState ] = useState("buttons");
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
	const handleFileFormClick = async (selectedFile) => {
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
	const view = () => {
		if (state === "buttons") {
			return (
				<div>
					<button onClick={() => setState("manual")}>Manual Data</button>
					<button onClick={() => setState("file")}>Upload File</button>
				</div>
			);
		} else if (state === "manual") {
			return (
				<Fragment>
					<PredictionForm data={data} setData={setData} />
					<button onClick={handleManualFormClick}>Predict</button>
				</Fragment>
			);
		} else if (state === "file") {
			return (
				<PredictionUploadFileForm
					handleFileFormClick={handleFileFormClick}
				/>
			);
		}
	};
	return (
		<div>
			{view()}
			{state !== "buttons" && (
				<button onClick={() => setState("buttons")}>back</button>
			)}
		</div>
	);
};

export default PredictionTab;
