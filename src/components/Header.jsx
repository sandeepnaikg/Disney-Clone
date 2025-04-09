
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";
import { useEffect } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log("Firebase User:", user);
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName, navigate, dispatch]);

  const handleAuth = () => {
    if (!userName) {
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log("Google User Data:", result.user);
          setUser(result.user);
        })
        .catch((error) => {
          console.error("Error during sign-in:", error.message);
        });
    } else {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => {
          alert(err.message);
        });
    }
  };

  const setUser = (user) => {
    console.log("User Object from Firebase:", user);
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/images/logo (3).svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/images/home-icon.svg" alt="" />
              <span>HOME</span>
            </a>

            <a href="/search">
              <img src="/images/search-icon (1).svg" alt="" />
              <span>SEARCH</span>
            </a>

            <a href="/watchlist">
              <img src="/images/watchlist-icon (1).svg" alt="" />
              <span>WATCHLIST</span>
            </a>

            <a href="/originals">
              <img src="/images/original-icon (1).svg" alt="" />
              <span>ORIGINALS</span>
            </a>

            <a href="/movies">
              <img src="/images/movie-icon (1).svg" alt="" />
              <span>MOVIES</span>
            </a>

            <a href="/series">
              <img src="/images/series-icon (1).svg" alt="" />
              <span>SERIES</span>
            </a>
          </NavMenu>

          <SignOut>
            <UserImg
              src={userPhoto || "/images/me.jpeg"}
              alt={userName}
              onError={(e) => (e.target.src = "/images/me.jpeg")}
            />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  background-color: #090b13;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 1.6px;
  z-index: 3;
`;

const Logo = styled.a`
  width: 100px;
  max-height: 70px;
  display: inline-block;
  cursor: pointer;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: #f9f9f9;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.button`
  background-color: rgba(0, 0, 0, 0.6);
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

const UserImg = styled.img`
  height: 100%;
  border-radius: 50%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  background: rgba(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;

export default Header;
