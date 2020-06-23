import React, { useState } from "react";

import Tabs from "./Tabs";
import ManualPredictionView from "./ManualPredictionView";
import FilePredictionView from "./FilePredictionView";

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
