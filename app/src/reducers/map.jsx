import {SELECTED_AREA, MODE, ZOOM, LATLNG, YEAR, ACTION, LOADING, ERROR, DATA, SEARCH, HISTORY, SHARE, SPLASH} from '../constants';

const initialState = {
  selectedArea: null,
  mode: null,
  zoom: 11,
  latLng: [39.271,-119.791],
  basemap: 'terrain',
  year: null,
  action: null,
  loading: false,
  error: null,
  data: {
    yearlyPercentage: null,
    geometries: null
  },
  search: {
    active: false,
    boundingBox: null,
    error: null
  },
  share: {
    active: false
  },
  splash: {
    active: !localStorage.getItem('recurrentUser')
  },
  /* Whether the previous page belongs was part of the app */
  history: false
};

export default function(state = initialState, action) {
    /* TODO: polyfill the Object.assign */
    switch (action.type) {
        case MODE:
          return Object.assign({}, state, { mode: action.payload });
        case ACTION:
          return Object.assign({}, state, { action: action.payload });
        case LOADING:
          return Object.assign({}, state, { loading: action.payload });
        case ERROR:
          return Object.assign({}, state, { error: action.payload });
        case DATA:
          const data = Object.assign({}, state.data);
          for(let k in action.payload) {
            data[k] = action.payload[k];
          }
          return Object.assign({}, state, { data });
        case SEARCH:
          const search = Object.assign({}, state.search);
          for(let k in action.payload) {
            search[k] = action.payload[k];
          }
          return Object.assign({}, state, { search });
        case SHARE:
          const share = Object.assign({}, state.share);
          for(let k in action.payload) {
            share[k] = action.payload[k];
          }
          return Object.assign({}, state, { share });
        case SPLASH:
          const splash = Object.assign({}, state.splash);
          for(let k in action.payload) {
            splash[k] = action.payload[k];
          }
          return Object.assign({}, state, { splash });
        case HISTORY:
          return Object.assign({}, state, { history: true })
        default:
            return state;
    }
};
