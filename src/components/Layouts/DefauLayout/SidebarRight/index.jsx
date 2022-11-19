import { Box, Link, Typography } from '@mui/material';
import cn from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './index.module.scss';

const cx = cn.bind(styles);

const dataPatient = {
  avatar: '/img/a_user.jpg',
  name: 'Leslie Alexander',
  patientInformation: {},
};

const SidebarRight = () => {
  return (
    <Box className={cx('wrapper')}>
      <Box className={cx('docter')}>
        <Box className={cx('avatar')}>
          <img src='/img/a_user.jpg' alt='avatar' />
        </Box>
        <Typography fontWeight={'bold'}>Leslie Alexander</Typography>
        <Link className={cx('link-provider')} to='#' component={NavLink}>
          Provider
        </Link>
      </Box>
      <Box className={cx('patientInformation')}>
        <Typography className={cx('title')}>Patient Information</Typography>
        <Box className={cx('listInfor')}>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>Patient</Typography>
            <Typography className={cx('text-right')}>Thiennguyen</Typography>
          </Box>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>DOB</Typography>
            <Typography className={cx('text-right')}>10 Oct 1994</Typography>
          </Box>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>
              Appointment Data
            </Typography>
            <Typography className={cx('text-right')}>5 Fed 2022</Typography>
          </Box>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>
              Appointment Duration
            </Typography>
            <Typography className={cx('text-right')}>20 minutes</Typography>
          </Box>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>Start Time</Typography>
            <Typography className={cx('text-right')}>8:00 AM</Typography>
          </Box>
          <Box className={cx('item')}>
            <Typography className={cx('text-left')}>End Time</Typography>
            <Typography className={cx('text-right')}>8:20 AM</Typography>
          </Box>
        </Box>
        <Link className={cx('history')} to='#' component={NavLink}>
          History
        </Link>
      </Box>
    </Box>
  );
};

export default SidebarRight;
