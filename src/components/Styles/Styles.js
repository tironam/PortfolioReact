import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  pos: {
    marginBottom: 12,
  },
  section: {
    margin: 35,
  },
  card: {
    marginLeft: 0,
  },
  img: {
    maxHeight: 375,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 315,
    },
    borderRadius: 100,
    margin: 15,
    boxShadow: "20px 20px #2F3359",
  },
  profile: {
    width: 250,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    maxWidth: 600,
    [theme.breakpoints.down("xs")]: {
      maxWidth: 275,
    },
    background: "rgba(0,0,0,0.1)",
    boxShadow: "20px 20px #2F3359",
  },
  text: {
    margin: "30px",
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  name: {
    margin: theme.spacing(5),
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
  title: {
    margin: theme.spacing(5),
    color: "white",
    fontSize: 14,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  about: {
    margin: "20px 0px 20px 0px",
  },
  container: {
    maxWidth: "475px",
  },
  icon: {
    color: "white",
  },
  iconBtn: {
    color: "white",
    marginBottom: theme.spacing(5),
  },
  projects: {
    display: "flex",
    flexDirection: "row",
  },
  tech: {
    color: "white",
    maxWidth: "475px",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  contact: {
    marginBottom: theme.spacing(7),
  },
}));

export default useStyles
