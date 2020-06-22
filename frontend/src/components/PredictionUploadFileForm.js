import React, { useState } from "react";

const PredictionUploadFileForm = ({ handleFileFormClick }) => {
	const [ selectedFile, setSelectedFile ] = useState(null);
	const onChangeHandler = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const onClickHandler = () => {
		handleFileFormClick(selectedFile);
	};

	return (
		<div className='row'>
			<div className='col-6 mx-auto'>
				<form method='post' action='#' id='#'>
					<div className='form-group files'>
						<label>Upload Your File </label>
						<input
							type='file'
							className='form-control'
							multiple=''
							onChange={onChangeHandler}
						/>
					</div>
					<button
						type='button'
						className='btn btn-success btn-block'
						onClick={onClickHandler}>
						Upload
					</button>
				</form>
			</div>
		</div>
	);
};

export default PredictionUploadFileForm;
