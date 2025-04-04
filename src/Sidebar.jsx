import React from 'react';
import { Box, List, ListItem, ListItemText, Drawer } from '@mui/material';

export default function Sidebar() {
    <Drawer
    sx={{
      width: 240,
      flexShrink: 0,
      zIndex: 2,
      '& .MuiDrawer-paper': {
        width: 240,
        boxSizing: 'border-box',
      },
    }}
    variant="permanent"
    anchor="left"
  >
    <Box sx={{ padding: 2 }}>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
        {/* Add more navigation items here */}
      </List>
    </Box>
  </Drawer>
}
