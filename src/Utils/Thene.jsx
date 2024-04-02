import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Grid } from '@mui/material';

function Theme() {
 const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid
      container
      spacing={2}
      direction={
        isLargeScreen
          ? 'row' // Three columns for large screens
          : isMediumScreen
          ? 'row' // Three columns for medium screens
          : 'column' // One column for small screens
      }
    >
      {/* Your content here */}
    </Grid>
  );
}

export default Theme;
