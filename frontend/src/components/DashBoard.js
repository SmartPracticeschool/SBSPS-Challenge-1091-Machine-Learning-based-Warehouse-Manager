import React, { useState } from "react";
import {
	Drawer,
	CssBaseline,
	AppBar,
	Toolbar,
	List,
	Typography,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Avatar,
	IconButton,
	Menu,
	MenuItem,
	Divider
} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EqualizerIcon from "@material-ui/icons/Equalizer";

import PredictionTab from "./PredictionTab";
import useStyles from "../styles/Dashboard.styles";

import { logout } from "../actions/auth";
import { useDispatch } from "react-redux";

const Dashboard = () => {
	const [ state, setState ] = useState("predict");
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const open = Boolean(anchorEl);

	const dispatch = useDispatch();
	const classes = useStyles();

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const tab = state === "predict" ? "DEMAND FORECASTER" : "";
	return (
		<div className={classes.root}>
			<CssBaseline />
			<AppBar position='fixed' color='inherit' className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant='h6' noWrap>
						{tab}
					</Typography>
					<div>
						<IconButton
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleMenu}
							color='inherit'>
							<AccountCircle style={{ fontSize: "1.8rem" }} />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right"
							}}
							open={open}
							onClose={handleClose}>
							<MenuItem>Digvijay</MenuItem>
							<Divider />
							<MenuItem onClick={() => dispatch(logout())}>
								Logout
							</MenuItem>
						</Menu>
					</div>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant='permanent'
				classes={{
					paper: classes.drawerPaper
				}}>
				<Toolbar>
					<Typography variant='h5' noWrap>
						Warehouse Manager
					</Typography>
				</Toolbar>
				<div className={classes.drawerContainer}>
					<List>
						<ListItem
							button
							className={classes.listContainer}
							onClick={() => setState("predict")}>
							<ListItemAvatar>
								<Avatar className={classes.avatar}>
									<EqualizerIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								<p>{tab}</p>
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
