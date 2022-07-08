import React from "react";
import { Routes, Route } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";

//Routes comp from npm module looks through its child routes and find the match
//if url matches value of path attribute, the element of that <route> will be rendered
//* indicate default route
const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<VideoList />} />
                <Route path="videos">
                    <Route index element={<VideoList />} />
                    <Route path="add" element={<VideoForm />} />
                    <Route path=":id" element={<p>TODO: Make Video Details component</p>} />
                </Route>
            </Route>
            <Route path="*" element={<p>Whoops, nothing here...</p>} />

        </Routes>
    );
};

export default ApplicationViews;