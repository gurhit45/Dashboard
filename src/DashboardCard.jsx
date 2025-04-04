import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function DashboardCard({ title, value }) {
  return (
    <Card sx={{bgcolor: "#1976d2"}}>
      <CardContent>
        <Typography variant="body" sx={{color: "#fff"}}>{title}</Typography>
        <Typography variant="h6" sx={{color: "#fff"}}>{value}</Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
