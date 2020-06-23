import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: 8
	},
	paper: {
		minWidth: "inherit",
		padding: 8
	},
	form: {
		display: "flex",
		justifyContent: "space-evenly",
		alignItems: "center"
	}
}));

export default useStyles;
