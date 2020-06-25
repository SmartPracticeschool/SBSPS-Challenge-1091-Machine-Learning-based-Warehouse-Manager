import React, { useState } from "react";

import Tabs from "./Tabs";
import FilePredictionView from "./FilePredictionView";
import ManualPredictionView from "./ManualPredictionView";

const PredictionTab = () => {
	const [ state, setState ] = useState("manual");

	const view =
		state === "manual" ? <ManualPredictionView /> : <FilePredictionView />;
	return (
		<div style={{ width: "85%" }}>
			<Tabs setState={setState} />
			{view}
		</div>
	);
};

export default PredictionTab;
