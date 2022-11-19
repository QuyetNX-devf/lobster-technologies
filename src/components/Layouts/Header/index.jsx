import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Typography } from '@mui/material';
import cn from 'classnames/bind';
import styles from './index.module.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const cx = cn.bind(styles);

const Header = () => {
  return (
    <Box className={cx('header')}>
      <Box className={cx('wrap-header')}>
        <Box className={cx('left')}>
          <Box className={cx('menu')}>
            <MenuIcon fontSize='small' />
          </Box>
          <Typography className={cx('title')}>Clinical Notes</Typography>
        </Box>
        <Box className={cx('right')}>
          <Box className={cx('icon')}>
            <SearchIcon fontSize='small' />
          </Box>
          <Box className={cx('icon', 'notifica')}>
            <NotificationsNoneIcon fontSize='small' />
          </Box>
          <Box className={cx('wrap-avatar')}>
            <Typography>Hello,</Typography>
            <Typography fontWeight={'bold'}> Stuart Seigel M.D</Typography>
            <Box className={cx('avatar')}>
              <img src='/img/a_user.jpg' alt='' />
            </Box>
            <Box component={'span'}>
              <ExpandMoreIcon fontSize='small' />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
