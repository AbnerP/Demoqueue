import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './CreateEvent.css';

function CreateEvent() {
  const navigate = useNavigate();

  useEffect(() => {
        const requestOptions = {
            method: 'GET',
            credentials: 'include',
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };
        fetch('http://localhost:5000/login', requestOptions).then(res => res.json()).then(data => {
            console.log(data);
            if(!data.authenticated || !data.spotifyAuthorized){
                navigate('/authenticate')
            }
        });
    }, []);

  return (
    <div className="container">
      <h1 className="title">SELECT A PLAYLIST.</h1>
    </div>
  );
}

export default CreateEvent;
