import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import "../../../assets/styles/Profile.css"
import { Add, Dashboard } from '@mui/icons-material';
import { TextField } from '@mui/material';
import DataTable from '../../../components/DataTable';
import { Card } from 'react-bootstrap';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}
const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>

      <div className="container d-flex justify-content-center align-items-center">
        <div className='my-account-heading'>
          My Account
        </div>
      </div>

      <div className='container row account-tabs'>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          // sx={{ borderRight: 1, borderColor: 'divider' }}
          style={{ maxHeight: '50vh' }}
          className="col-md-3"
          TabIndicatorProps={{
            style: {
              backgroundColor: '#000000'
            }
          }}
        >
          <Tab label="Dashboard" {...a11yProps(0)} />
          <Tab label="Orders" {...a11yProps(1)} />
          <Tab label="Address" {...a11yProps(2)} />
          <Tab label="Account details" {...a11yProps(3)} />
          <Tab label="Wishlist" {...a11yProps(4)} />
          <Tab label="Logout" {...a11yProps(5)} onClick={() => alert('yes')} />
          {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
        </Tabs>
        <div className="col-md-9 ">
          <TabPanel value={value} index={0} >
            <div className='d-flex justify-content-center align-items-center'>
              <img width='150' height="150" style={{ borderRadius: '50%' }} src={require('../../../assets/images/avatar.jpg')} alt="" />
            </div>
            <TextField className='text-field'
              id="standard-read-only-input"
              label="Name"
              defaultValue="Vinayaka OB"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField className='text-field'
              id="standard-read-only-input"
              label="UserName"
              defaultValue="Vicky"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField className='text-field'
              id="standard-read-only-input"
              label="Email"
              defaultValue="Vinayaka.ob@gmail.com"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField className='text-field'
              id="standard-read-only-input"
              label="Password"
              defaultValue="*******"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <div className='row'>
              <button className="btn btn-primary col-md-12">
                Edit
              </button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <DataTable />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="row">
              <Card className="col-md-3 m-2">
                <Card.Body>
                  <Card.Title>Address 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Vinayaka OB</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
              <Card className="col-md-3 m-2">
                <Card.Body>
                  <Card.Title>Address 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Vinayaka OB</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
              <Card className="col-md-3 m-2">
                <Card.Body>
                  <Card.Title>Address 1</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Vinayaka OB</Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Edit</Card.Link>
                  <Card.Link href="#">Delete</Card.Link>
                </Card.Body>
              </Card>
              <Card className="col-md-3 m-2">
                <Card.Body>
                  <Card.Title className='text-center d-flex justify-content-center align-items-center'><Add /> Add Address</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <TextField className='text-field' id="standard-basic" label="Name" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"

            }} />
            <TextField className='text-field' id="standard-basic" label="Username" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />
            <TextField className='text-field' id="standard-basic" label="Email" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />

            <div className='sign-in'>Change Password</div>

            <TextField className='text-field' id="standard-basic" label="Old Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />
            <TextField className='text-field' id="standard-basic" label="New Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />
            <TextField className='text-field' id="standard-basic" label="Confirm Password" variant="standard" InputProps={{ disableUnderline: true }} sx={{
              input: { color: '#000' }, "& .MuiInputLabel-root": { color: '#000' }, "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: "orange" },
              },
              borderBottom: "1px solid #000",
              color: "#000"
            }} />
            <div className='row justify-content-between my-3'>
              <button className="btn btn-primary col-md-4">
                Cancel
              </button>
              <button className="btn btn-primary col-md-4">
                Save Changes
              </button>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <DataTable />
          </TabPanel>
          <TabPanel value={value} index={5}>

          </TabPanel>
        </div>
      </div>
    </>

  )
}

export default Profile