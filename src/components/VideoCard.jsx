import { Link } from 'react-router-dom';
import { Typography, Card, CardContent , CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

import { demoThumbnailUrl , demoVideoUrl , demoVideoTitle ,demoChannelTitle , demoChannelUrl } from '../utils/constants';

const VideoCard = ({video: {id: {videoId}, snippet}}) => {
  return (
    <Card>
     <Link to={videoId ? `/videoId/${videoId}` : demoVideoUrl}>
      <CardMedia
        image={snippet?.thumbnails?.high?.url}
        alt={snippet?.tittle}
        sx={{width:358 , height:180}}
      />
     </Link>
    </Card>
  )
}

export default VideoCard