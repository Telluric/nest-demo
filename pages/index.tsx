import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { NextPage, NextPageContext } from 'next';

// The component's props type
type PageProps = {
  title: string;
};

// extending the default next context type
type PageContext = NextPageContext & {
  query: PageProps;
};

const Home: NextPage<PageProps> = ({ title }) => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <h1>Hello World</h1>
      <Button variant="contained">Click Me</Button>
    </>
  );
};
// assigning the initial props to the component's props
Home.getInitialProps = (ctx: PageContext) => {
  console.log(ctx.query);
  return {
    title: ctx.query.title,
  };
};
export default Home;
