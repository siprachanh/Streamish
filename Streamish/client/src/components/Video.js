import React from "react";
import { Card, CardBody } from "reactstrap";

//display the video
const Video = ({ video }) => {
    return (
        <Card >
            <p className="text-left px-2">Posted by: {video.userProfile.name}</p>
            <CardBody>
                <iframe className="video"
                    src={video.url}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                <p>
                    <strong>{video.title}</strong>
                </p>
                <p>{video.description}</p>
                <div>
                    {video.comments && video.comments.map((comment) => (
                        <p key={comment.id}>Comment Message: {comment.message} </p>
                    ))}
                </div>
            </CardBody>
        </Card>
    );
};

export default Video;