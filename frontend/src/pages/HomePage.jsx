import { React } from 'react';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import { FormControl, InputLabel, Select, MenuItem, Box, Grid, } from '@mui/material';
import BasicDatePicker from '../components/BasicDatePicker';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { Line } from "react-chartjs-2";
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import styles from "../styles";
import { 
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement
} from 'chart.js'


const HomePage = () => {
  return (
    <div className='page-layout'>
      <NavBar />
      <div style={{width: '100%'}}>
        <Banner header="Dashboard"/>
        <div style={{padding: '17px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '80%'}}>
          <Grid item xs={8}>
            <div className='wrapper' style={{display: 'flex', gap: '20px'}}>
              <p style={{fontSize: '30px'}}>Welcome to the</p>
              <p style={{fontSize: '30px', fontWeight: 'bold', color: 'rgb(1, 1, 151)'}}>External Fund Analysis Platform</p>
            </div>
        </Grid>
        </div>
      </div>
    </div>
  )
}

export default HomePage
