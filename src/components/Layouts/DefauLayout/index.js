import React from 'react';
import { Box, Container } from '@mui/material';
import Header from '../Header';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import styles from './index.module.scss';
import cn from 'classnames/bind';
const cx = cn.bind(styles);

const DefauLayout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Box className={cx('container')}>
        <Box className={cx('left')}>
          <SidebarLeft />
        </Box>
        <Box className={cx('center')}>
          <Box className='content'>{children}</Box>
        </Box>
        <Box className={cx('right')}>
          <SidebarRight />
        </Box>
      </Box>
    </Container>
  );
};

export { DefauLayout };
