import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
// import BackButton from './common/BackButton';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
  card: {
    minWidth: 275,
    margin: `${theme.spacing.unit / 1.5}em ${theme.spacing.unit * 4}px ${theme.spacing.unit / 4}em`,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const NoAccess = ({ classes }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Sin acceso
        </Typography>
        <Typography variant="h5" component="h2">
          No tienes permisos para visualizar este recurso
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Consultar al administrador
        </Typography>
      </CardContent>
      {/* <BackButton onClick={() => ownProps.history.goBack()} /> */}
    </Card>
  );
};

export default withRouter(withStyles(styles)(NoAccess));
