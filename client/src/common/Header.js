import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Article, ExpandLess, ExpandMore, Home, Info, LocalMall, Phone, Storefront } from '@mui/icons-material';
import { Typography } from '@mui/material';
import Card from 'react-bootstrap/Card';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    color: "#000"
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        borderBottom: '1px solid black'

    },
}));


export default function Header() {

    // detect scrolling 
    const [y, setY] = React.useState(window.scrollY);
    const [scrollingDown, setScrollingDown] = React.useState(false)
    const [showProducts, setShowProducts] = React.useState(false)



    const handleNavigation = React.useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                // console.log("scrolling up");
            } else if (y < window.scrollY) {
                // console.log("scrolling down");
                setScrollingDown(true)
            } else if (y = window.scrollY) {
                // console.log("ZERO")
            }
            if (window.scrollY == 0) {
                setScrollingDown(false)
            }
            setY(window.scrollY);
        }, [y]
    );

    React.useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);





    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const [InputBar, setInputBar] = React.useState(false);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const slideInput = () => {
        setInputBar(!InputBar)
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem disableRipple onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem disableRipple onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (

        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <Search style={{ margin: '15px' }}>
                <SearchIconWrapper >
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    style={{ width: '75%', margin: 'auto' }}
                />
            </Search>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Home />
                </IconButton>
                <p style={{ marginTop: '15px' }}>Home</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Storefront />
                </IconButton>
                <p style={{ marginTop: '15px' }}>Products</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Article />
                </IconButton>
                <p style={{ marginTop: '15px' }}>Articles</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <LocalMall />
                    </Badge>
                </IconButton>
                <p style={{ marginTop: '15px' }}>Cart</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p style={{ marginTop: '15px' }}>Notifications</p>
            </MenuItem>
            <MenuItem disableRipple onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p style={{ marginTop: '15px' }}>Profile</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Info />
                </IconButton>
                <p style={{ marginTop: '15px' }}>About Us</p>
            </MenuItem>
            <MenuItem disableRipple>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Phone />
                </IconButton>
                <p style={{ marginTop: '15px' }}>Contact Us</p>
            </MenuItem>
        </Menu>

    );

    return (
        <Box sx={{}} className={scrollingDown ? "header-scrolling" : "header-static"}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton disableRipple
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <img width={114} height={25} src={require("../assets/images/logo.png")} alt="" />
                    </IconButton>

                    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }} >
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <MenuItem disableRipple >
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                            <MenuItem disableRipple onClick={() => { setShowProducts(!showProducts); setScrollingDown(true) }}>
                                <Typography textAlign="center">Products</Typography>
                                {
                                    showProducts ?
                                        <ExpandLess />
                                        :
                                        <ExpandMore />

                                }
                            </MenuItem>
                            <MenuItem disableRipple >
                                <Typography textAlign="center">Articles</Typography>
                            </MenuItem>
                            <MenuItem disableRipple >
                                <Typography textAlign="center">About Us</Typography>
                            </MenuItem>
                            <MenuItem disableRipple >
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                        </Box>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Search>
                            <IconButton style={{ width: 50 }} onClick={() => slideInput()}>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                            </IconButton>
                            {
                                InputBar &&
                                <StyledInputBase
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            }
                        </Search>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="error">
                                <LocalMall />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="show 17 new notifications"
                            color="inherit"
                        >
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
                {
                    showProducts &&
                    <Card className='header-card' >
                        <Card.Title className='text-center header-card-title'>Categories</Card.Title>
                        <Card.Body className='row'>
                            <div className="col-md-4 header-card-body">
                                <div className='header-card-body-text'>
                                    Electronics
                                </div>
                                <div className='header-card-body-text'>
                                    Shoes
                                </div>
                                <div className='header-card-body-text'>
                                    Clothes
                                </div>
                                <div className='header-card-body-text'>
                                    Bags
                                </div>
                                <div className='header-card-body-text'>
                                    Appliances
                                </div>
                            </div>
                            <div className="col-md-4 header-card-body">
                                <div className='header-card-body-text'>
                                    Electronics
                                </div>
                                <div className='header-card-body-text'>
                                    Shoes
                                </div>
                                <div className='header-card-body-text'>
                                    Clothes
                                </div>
                                <div className='header-card-body-text'>
                                    Bags
                                </div>
                                <div className='header-card-body-text'>
                                    Appliances
                                </div>

                            </div>
                            <div className="col-md-4 header-card-body">
                                <img width="75%" height="100%" className='header-card-body-img' src={require('../assets/images/product2.jpg')} alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                }
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}