import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import cn from 'classnames/bind';
import {
  Box,
  Checkbox,
  FormControlLabel,
  Link,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import InfoIcon from '@mui/icons-material/Info';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';

import datajson from './data.json';

const cx = cn.bind(styles);
const listContentMacro = [
  {
    id: 1,
    title:
      'A Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil corporis explicabo ipsam velit alias aliquam assumenda! Accusamus minima ab sed vitae veniam suscipit, quod voluptas nostrum tempore voluptates dolore.',
  },
  {
    id: 2,
    title: 'B Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 3,
    title:
      'C Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nihil corporis explicabo ipsam velit alias aliquam assumenda!',
  },
];

const ClinicalNotes = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const [listChekbox, setListCheckbox] = useState([]);
  const [showMore, setShowmore] = useState(false);
  const [narrative, setNarrative] = useState('');
  const [showCtMacro, setShowCtMacro] = useState(false);

  const matches = useMediaQuery('(max-width:1300px)');
  console.log(matches);

  useEffect(() => {
    setData(datajson);
  }, []);

  useEffect(() => {
    const curentListCheckBox = data.find((item) => item.id === active);
    if (curentListCheckBox) {
      setListCheckbox(curentListCheckBox.condition);
    }
  }, [active, data]);

  const hanldeChangeTab = (id) => {
    setActive(id);
    setShowmore(false);
  };
  const handleChangeValueNarrative = (value) => {
    setNarrative(value);
  };

  return (
    <Box className={cx('clinical-content')}>
      <Box className={cx('wrap-back-his')}>
        <Link to='#' className={cx('link-back')} component={NavLink}>
          <KeyboardBackspaceIcon />{' '}
          <Typography className={cx('title')}>
            Back to Clinical notes list
          </Typography>
        </Link>
        <Link to='#' className={cx('help')}>
          <InfoIcon />
        </Link>
      </Box>
      <Typography className={cx('title-ct')}>Review of Systems</Typography>
      <Typography className={cx('summary')}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
        similique nostrum exercitationem quae est doloribus repudiandae unde.
        Pariatur, perferendis alias explicabo eveniet veniam doloribus
        repudiandae at iusto architecto temporibus quas.{' '}
      </Typography>
      <Box className={cx('wrap-tab')}>
        {data.length > 0 &&
          data.map((item, index) => {
            if (index < 7 && !matches) {
              return (
                <Box
                  className={cx('tab', { active: item.id === active })}
                  onClick={() => hanldeChangeTab(item.id)}
                  key={item.id}
                >
                  <Typography className={cx('name-position')}>
                    {item.title}
                  </Typography>
                </Box>
              );
            } else if (index < 5 && matches) {
              return (
                <Box
                  className={cx('tab', { active: item.id === active })}
                  onClick={() => hanldeChangeTab(item.id)}
                  key={item.id}
                >
                  <Typography className={cx('name-position')}>
                    {item.title}
                  </Typography>
                </Box>
              );
            }
          })}
        {data.length >= 7 && !matches && (
          <Box className={cx('tab')}>
            <Typography
              className={cx('text')}
              onClick={() => setShowmore(!showMore)}
            >
              More <KeyboardArrowDownIcon />
            </Typography>
            <Box className={cx('wrap-position', { active: showMore })}>
              {data.map(
                (item, index) =>
                  index >= 7 && (
                    <Typography
                      className={cx('name-position-more', {
                        active: item.id === active,
                      })}
                      key={item.id}
                      onClick={() => hanldeChangeTab(item.id)}
                    >
                      {item.title}
                    </Typography>
                  )
              )}
            </Box>
          </Box>
        )}
        {data.length >= 5 && matches && (
          <Box className={cx('tab')}>
            <Typography
              className={cx('text')}
              onClick={() => setShowmore(!showMore)}
            >
              More <KeyboardArrowDownIcon />
            </Typography>
            <Box className={cx('wrap-position', { active: showMore })}>
              {data.map(
                (item, index) =>
                  index >= 5 && (
                    <Typography
                      className={cx('name-position-more', {
                        active: item.id === active,
                      })}
                      key={item.id}
                      onClick={() => hanldeChangeTab(item.id)}
                    >
                      {item.title}
                    </Typography>
                  )
              )}
            </Box>
          </Box>
        )}
      </Box>
      <Box className={cx('wrap-checkbox')}>
        {listChekbox.map((condition, index) => (
          <Box className={cx('check')} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    '&.MuiCheckbox-root': {
                      padding: '0px 10px 0 10px',
                    },
                  }}
                />
              }
              label={condition.name}
            />
          </Box>
        ))}
      </Box>
      <Box className={cx('wrap-other')}>
        <Typography className={cx('title')}>Other</Typography>
        <TextField
          placeholder='Text area'
          multiline
          rows={3}
          fullWidth={true}
          variant='outlined'
          sx={{
            background: '#fbfcfc',
            '& .MuiOutlinedInput-root': {
              padding: '6.5px 14px',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0000003b !important',
              borderWidth: '1px !important',
            },
          }}
        />
      </Box>
      <Box className={cx('narrative')}>
        <Box className={cx('wrap-head')}>
          <Typography className={cx('title')}>Narrative</Typography>
          <Box className={cx('btn-group')}>
            <Box className={cx('btn-macro-wrap')}>
              <Box
                onClick={() => setShowCtMacro(!showCtMacro)}
                className={cx('btn-macro')}
              >
                <Typography>insert Macro</Typography>
                <KeyboardArrowDownIcon />
              </Box>
              <Box className={cx('list-ct-macro', { active: showCtMacro })}>
                {listContentMacro.map((ct, index) => (
                  <Typography
                    onClick={() => {
                      setNarrative(ct.title);
                      setShowCtMacro(false);
                    }}
                    key={ct.id}
                    className={cx('ct-macro')}
                  >
                    {ct.title}
                  </Typography>
                ))}
              </Box>
            </Box>
            <Box className={cx('btn-generate')}>Generate</Box>
          </Box>
        </Box>
        <TextField
          placeholder=''
          multiline
          rows={6}
          fullWidth={true}
          variant='outlined'
          value={narrative}
          onChange={(event) => handleChangeValueNarrative(event.target.value)}
          sx={{
            background: '#fbfcfc',
            '& .MuiOutlinedInput-root': {
              padding: '6.5px 14px',
            },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#0000003b !important',
              borderWidth: '1px !important',
            },
          }}
        />
      </Box>
      <Box className={cx('wrap-btn-navigation')}>
        <Box className={cx('btn-nav')}>
          <WestIcon fontSize='small' />
          <Typography paddingLeft={'10px'}>Previous</Typography>
        </Box>
        <Box className={cx('btn-nav')}>
          <Typography paddingRight={'10px'}>Next</Typography>
          <EastIcon fontSize='small' />
        </Box>
      </Box>
    </Box>
  );
};

export default ClinicalNotes;
