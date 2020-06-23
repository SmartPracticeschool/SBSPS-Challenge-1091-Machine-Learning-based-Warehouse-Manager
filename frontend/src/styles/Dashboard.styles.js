import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		marginLeft: drawerWidth
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerContainer: {
		overflow: "auto",
		width: drawerWidth
	},
	listContainer: {
		paddingLeft: "110px"
	},
	content: {
		width: "100%",
		marginTop: "4rem",
		padding: theme.spacing(3),
		fontSize: "1rem",
		overflow: "0"
	}
}));

export default useStyles;
