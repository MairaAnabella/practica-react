import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function ComponenteDos() {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Hola componente dos </Typography>
    </Box>
  );
}

ComponenteDos.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default ComponenteDos;
