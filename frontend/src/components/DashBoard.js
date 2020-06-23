import React, { useState } from "react";
import {
	Drawer,
	CssBaseline,
	AppBar,
	Toolbar,
	List,
	Typography,
	ListItem,
	ListItemText
} from "@material-ui/core";

import PredictionTab from "./PredictionTab";
import useStyles from "../styles/Dashboard.styles";

const Dashboard = () => {
	const [ state, setState ] = useState("predict");
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar
				position='fixed'
				color='transparent'
				className={classes.appBar}>
				<Toolbar>
					<Typography variant='h5' noWrap>
						Warehouse Manager
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}>
				<Toolbar />
				<div className={classes.drawerContainer}>
					<List>
						<ListItem
							button
							className={classes.listContainer}
							onClick={() => setState("predict")}>
							<ListItemText>
								<Typography variant='h6' noWrap align='inherit'>
									Predict
								</Typography>
							</ListItemText>
						</ListItem>
					</List>
				</div>
			</Drawer>
			<main className={classes.content}>
				{state === "predict" && <PredictionTab />}
			</main>
		</div>
	);
};

export default Dashboard;
