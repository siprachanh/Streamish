import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VideoList from "./VideoList";
import VideoForm from "./VideoForm";
import Login from "./Login";
import Register from "./Register";

//Routes comp from npm module looks through its child routes and find the match
//if url matches value of path attribute, the element of that <route> will be rendered
//* indicate default route
export default function ApplicationViews({ isLoggedIn }) {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={isLoggedIn ? <VideoList /> : <Navigate to="/login" />}
                />
                <Route path="videos"
                    element={isLoggedIn ? <VideoForm /> : <Navigate to="/login" />}
                />
                <Route path=":id" element={<p>TODO: Make Video Details component</p>} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="*" element={<p>Whoops, nothing here...</p>} />
            </Route>
        </Routes>
    );
}
