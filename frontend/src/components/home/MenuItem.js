import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const MenuItem = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    fontSize: '20px',
    height: 128,
    lineHeight: '128px'
}));

export default MenuItem;