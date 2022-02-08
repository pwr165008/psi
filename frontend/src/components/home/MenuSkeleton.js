import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Divider, Stack } from '@mui/material';

export const MenuSkeleton = () => {

    return <Stack
        divider={<Divider />}
        spacing={2}
    >
        <div>
            <Skeleton variant='text' width={150} height={50} />
            <Stack spacing={2} direction='row' gap={3}>
                <Skeleton variant='rectangular' width={256} height={128} />
                <Skeleton variant='rectangular' width={256} height={128} />
                <Skeleton variant='rectangular' width={256} height={128} />
            </Stack>
        </div>
        <div>
            <Skeleton variant='text' width={150} height={50} />
            <Stack spacing={2} direction='row' gap={3}>
                <Skeleton variant='rectangular' width={256} height={128} />
                <Skeleton variant='rectangular' width={256} height={128} />
            </Stack>
        </div>
    </Stack>;
}

export default MenuSkeleton;