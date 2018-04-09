import _chunk from 'lodash/chunk'
import _shuffle from 'lodash/shuffle'
import _filter from 'lodash/filter';
import _uniqBy from 'lodash/uniqBy'


export const parseUrlVals = (url) =>  _uniqBy(url.split(",")).filter(x => x)


export const changeLimitForScreen = (maxLimit, width = null, gridData = {}) =>
{
  if(!width){
    return maxLimit
  }
  const defaultGgridData = {xs : 6, sm : 6, md : 4, lg : 3, xl : 3}
  const grid = {...defaultGgridData, ...gridData}
  if(!width in grid){
    return maxLimit
  }
  const current = 12/grid[width]
  return maxLimit % current === 0 ? maxLimit : Math.floor( maxLimit / current ) * current
}







export const validateToken = token => {
  return /^[a-z0-9]{32,40}$/.test(token);
};

export const lsGet = key => JSON.parse(localStorage.getItem(key))

export const lsSet = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const addToken = (token) => {

  const tokens = lsGet("tokens") || []

  if(tokens.indexOf(token) === -1)
  {
    tokens.push(token)
    lsSet("tokens", tokens)
  }
}


export const isBigScreen = (width) => {
  return width === "xl" || width === "lg"
}


export const processArrayData = (data = [], {filter = null, limit = null, random = null}) => {

  if(!Array.isArray(data) || !data.length)
  {
      return [];
  }

  if(filter)
  {
    data = data.filter(row => filter(row));
  }

  if(random)
  {
    data = _shuffle(data);
  }



  if(limit && data.length > limit)
  {
    data = data.slice(0, limit);
  }



  return data;
}

export const chunkArrayData = (data = [], width = "md", params) => {

  data = processArrayData(data, params);

  let chunks;

  switch(width)
  {
      case "xs":
        chunks = 1
      break

      case "sm":
        chunks = 2
      break

      case "md":
        chunks = 3
      break

      case "lg":
        chunks = 4
      break

      case "xl":
        chunks = 4
      break

      default:
        chunks = 2
  }

  const chunkSize = Math.round(data.length / chunks );

  data  = chunkSize ? _chunk(data, chunkSize) : data;

  return data;

}