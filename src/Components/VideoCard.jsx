import { Card, Typography, CardContent, CardMedia, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video}) => {

  function calculateTimeDuration(uploadedDateTime) {
    const uploadedDate = new Date(uploadedDateTime);
    const currentDate = new Date();
  
    const timeDifference = currentDate - uploadedDate;
  
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 0) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  }

  return (
    <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 2 }}>
      <Link to={`/`}>
        <CardMedia image={video.thumbnail} alt={video.title} sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, height: 180 }} />
      </Link>

      <CardContent sx={{ backgroundColor: "#1e1e1e", width: { xs: '100%', sm: '358px', md: "320px", }, height: 180 }}>
        <Typography variant="h6" sx={{ color: '#fff' }}>{video.title.slice(0, 60)}</Typography>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="body2" sx={{ color: '#7e7272', fontWeight: 'bold' }}>
              <CardMedia image={video.thumbnail} alt={video.title} sx={{ width: 50, height: 50, borderRadius: 50 }} /> {video.channelName}
            </Typography>
          </Grid>
          <Grid item sx={{ marginLeft: 'auto' }}>
            <Typography variant="body2" sx={{ backgroundColor: "#020000", color: '#7e7272', marginRight: 0,borderRadius: 1,p:0.5 }}>{video.duration}</Typography>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ color: '#7e7272' }}>{video.views} views <CheckCircle /> {calculateTimeDuration(video.uploadedDateTime)}</Typography>
      </CardContent>
    </Card>
  )
}

export default VideoCard;
