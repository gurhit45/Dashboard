import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Typography } from '@mui/material';

import DashboardCard from './DashboardCard';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';
import {data} from "./data"
import Sidebar from './Sidebar';
function App() {
  const [userData, setData] = useState(data);
  
  // useEffect(() => {
    
  //   axios.get('https://api.example.com/data')  // Replace with your API
  //     .then(response => setData(response.data))
  //     .catch(error => console.error("Error fetching data:", error));
  // }, []);
  
  return (
    <>

    <Box sx={{ display: 'flex' }}>
      <Sidebar sx={{ width: '250px' }} />
      <Container maxWidth="lg" sx={{ marginLeft: 2 }}>
        <Grid container spacing={4} sx={{ padding: 3 }}>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Players" value={userData?.totalPlayers} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Todays User Addition" value={userData?.todaysUserAddition} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Last Seven Days User Addition" value={userData?.lastSevenDaysUserAddition} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Last Thirty Days User Addition" value={userData?.lastThirtyDaysUsersAddition} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Daily Active Users" value={userData?.dailyActiveUsers} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Weekly Active Users" value={userData?.weeklyActiveUsers} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Monthly Active Users" value={userData?.monthlyActiveUsers} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Games" value={userData?.totalGames} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Rake" value={userData?.totalRake} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Pot Amount" value={userData?.totalPotAmount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Deposit Count" value={userData?.totalDepositCount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Deposit Amount" value={userData?.totalDepositAmount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Admin Deposit Count" value={userData?.totalAdminDepositCount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Admin Deposit Amount" value={userData?.totalAdminDepositAmount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Admin Bonus Count" value={userData?.totalAdminBonusCount} />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <DashboardCard title="Total Admin Bonus Amount" value={userData?.totalAdminBonusAmount} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>New Users Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Today User Addition', value: userData?.todaysUserAddition },
                    { name: 'Last Seven Days User Addition', value: userData?.lastSevenDaysUserAddition },
                    { name: 'Last Thirty Days User Addition', value: userData?.lastThirtyDaysUsersAddition },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  <Cell fill="#8884d8" />
                  <Cell fill="#82ca9d" />
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>Active Users Distribution</Typography>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Daily Active Users', value: userData?.dailyActiveUsers },
                    { name: 'Weekly Active Users', value: userData?.weeklyActiveUsers },
                    { name: 'Montly Active Users', value: userData?.monthlyActiveUsers },
                  ]}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  <Cell fill="#8884d8" />
                  <Cell fill="#82ca9d" />
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </> );
}

export default App;
