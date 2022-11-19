import styles from './index.module.scss';
import cn from 'classnames/bind';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { useEffect, useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import data from './data.json';

const cx = cn.bind(styles);

const SidebarLeft = () => {
  const [active, setActive] = useState('all');
  const [completed, setCompleted] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [allData, setAllData] = useState([]);
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const dataCondition = data.all;
    setAllData(dataCondition);
  }, []);

  useEffect(() => {
    setCompleted(allData.filter((item) => item.completed === true));
    setIncomplete(allData.filter((item) => item.completed === false));
  }, [allData]);

  useEffect(() => {
    switch (active) {
      case 'all':
        setShowData(allData);
        break;
      case 'completed':
        setShowData(completed);
        break;
      case 'incomplete':
        setShowData(incomplete);
        break;
      default:
        break;
    }
  }, [active, allData, completed, incomplete]);

  const hanleChangeCheck = (id) => {
    const data = [...allData];
    const index = data.findIndex((item) => item.id === id);
    data[index].completed = !data[index].completed;
    setAllData(data);
  };
  return (
    <Box className={cx('sidebar-left')}>
      <Box className={cx('intake-note')}>
        <Typography className={cx('title')}>Intake note</Typography>
        <Box className={cx('icons')}>
          <Box className={cx('icon')}>
            <SearchIcon fontSize='small' />
          </Box>
          <Box className={cx('icon')}>
            <SettingsIcon fontSize='small' />
          </Box>
        </Box>
      </Box>
      <Box className={cx('preview')}>
        <RemoveRedEyeOutlinedIcon fontSize='small' />
        <Typography className={cx('text')}>Preview note</Typography>
      </Box>
      <Box className={cx('health-condition')}>
        <Box className={cx('tabs')}>
          <Typography
            onClick={() => setActive('all')}
            className={cx('tab', { active: active === 'all' })}
          >
            All({allData.length})
          </Typography>
          <Typography
            onClick={() => setActive('completed')}
            className={cx('tab', { active: active === 'completed' })}
          >
            Completed({completed.length})
          </Typography>
          <Typography
            onClick={() => setActive('incomplete')}
            className={cx('tab', {
              active: active === 'incomplete',
              activeIncomplete: incomplete.length > 0,
            })}
          >
            Incomplete({incomplete.length})
          </Typography>
        </Box>
        <Box className={cx('wrap-list-condition')}>
          <Box className={cx('list-condition')}>
            {showData.length > 0 &&
              showData.map((item, index) => (
                <Box className={cx('condition')} key={index}>
                  <FormControlLabel
                    value={item.title}
                    onChange={() => hanleChangeCheck(item.id)}
                    control={
                      <Checkbox
                        size='small'
                        checked={item.completed}
                        icon={
                          <RadioButtonUncheckedIcon
                            fontSize='small'
                            color='#f0f0f0'
                          />
                        }
                        checkedIcon={
                          <CheckCircleIcon fontSize='small' color='success' />
                        }
                        sx={{
                          '&.MuiCheckbox-root': {
                            padding: '0px 5px 0 10px',
                          },
                        }}
                      />
                    }
                    label={item.title}
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarLeft;
