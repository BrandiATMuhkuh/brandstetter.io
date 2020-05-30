import React from "react";
import firebase from "firebase/app";
import { useDocumentData } from "react-firebase-hooks/firestore";
import "typeface-roboto";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { Container, Box } from "@material-ui/core";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Jürgen Brandstetter</Typography>
      </Toolbar>
    </AppBar>
  );
}

function App() {

  // const [value, loading] = useDocumentData<{ title: string; content: string;  }>(
  //   firebase.firestore().collection("pages").doc("contact")
  // );

  return (
    <>
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route path="/about">
              <Box my={2}>about</Box>
            </Route>
            <Route path="/users">
              <Box my={2}>user</Box>
            </Route>
            <Route path="/blogs/:blogId">
              <Blogs />
            </Route>
            <Route path="/">
              <Box my={2}>home</Box>
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

function Blogs() {
  let match = useRouteMatch();

  const { blogId } = match.params as { blogId: string };

  const [value, loading] = useDocumentData<{ title: string; content: string;  }>(
    firebase.firestore().collection("blog").doc(blogId)
  );

  return <>
    Title: {value?.title} <br />
    Content: {value?.content}
  </>;
}

export default App;
