import React, { useState } from "react";
import logo from "./../assests/logo.png";
import GenreList from "../Components/GenreList"; 
import { useNavigate } from 'react-router-dom';
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/clerk-react';

const Header = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);

  const handleNavigate = () => {
    navigate(`/`);
  };
  const handleNavigateBookmark = () => {
    navigate(`/bookmark`);
  };

  return (
    <div>
      {/* Header Section */}
      <div className="d-flex align-items-center justify-content-between bg-primary-subtle px-3 py-1 z-9">
        <img src={logo} width={40} height={40} alt="Logo" onClick={()=>handleNavigate()} />
        <div className="d-flex p-2 w-50 rounded-pill bg-light align-items-center">
          <i className="bi bi-search "></i>
          <input
            placeholder="Search Games"
            type="text"
            className="w-100 text-start px-2 bg-transparent border-0 btn focus-ring-0"
          />
        </div>
        <div>
          <i className="bi bi-bookmark-dash-fill fs-4 cursor-pointer text-dark bg-light p-2 rounded-circle me-1" onClick={()=>handleNavigateBookmark()}></i>
          <i
            className={`bi ${toggle === true? "bi-x" : "bi-list"} cursor-pointer d-md-none fs-1 rounded-circle h-10 w-10 bg-light text-dark p-1  pointer`}
            onClick={() => setToggle((prev) => !prev)}
          ></i>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        

      </div>

      
      {
        toggle === true ?(
          <GenreList/>
        ):(
          ""
        )
      }
    </div>
  );
};

export default Header;
