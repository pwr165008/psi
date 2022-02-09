import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import { withAuthenticationRequired } from '@auth0/auth0-react';

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Course ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export function Preferences() {
  return (
    <><Box
          sx={{ marginTop: '10px', width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
          <div style={{ backgroundColor: 'lightgrey', fontWeight: 'bold', fontSize: '20px', textAlign: 'center', border: '3px solid #000000' }}>Course List</div>
          <FixedSizeList
              height={400}
              width={360}
              itemSize={46}
              itemCount={200}
              overscanCount={5}
          >
              {renderRow}
          </FixedSizeList>
      </Box><Box
          sx={{ marginTop: '-400px', marginLeft: '650px', width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      >
              <div style={{ backgroundColor: 'lightgrey', fontWeight: 'bold', fontSize: '20px', textAlign: 'center', border: '3px solid #000000' }}>Prefered Courses</div>
              <FixedSizeList
                  height={400}
                  width={360}
                  itemSize={46}
                  itemCount={200}
                  overscanCount={5}
              >
                  {renderRow}
              </FixedSizeList>
          </Box></>
  );
}

export default withAuthenticationRequired(Preferences);