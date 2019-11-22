import axios from 'axios';

export default axios.create({
  baseURL:'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 3feColVGKVPXW--jh-1HPRzttHxts8DduI9XJ54s3x2HAgrt8NvHYPqo63Y5JMXCf3PMdD8shj_JxuP3OieDi6F9bYmzqQaP2DkJ0c_s0BmapXHfNirBSrXLZ77WXXYx'
  }
})
