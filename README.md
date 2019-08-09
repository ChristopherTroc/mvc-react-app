# MVC Philosophy React App

MVC philosophy, scalable structure, featured and utils. Full documentation project.

## MVC Structure

MVC come from model-view-controller architecture, but this time in the frontend abstraction
model-views-container.

### Models

Models live in /src/models folder. Next this is a high class Model base, and all model extends from him.

```javascript
import axios from 'axios';
/**
Base Parent Model, "All sub class models have to extends from this"
*/
class Model {
  /**
  Method: Get
  Param: url, null
  Return: Result [] or reject error
  */
  get = (url, headers) => {
    return axios
      .get(url, headers)
      .then((response) => {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  /**
  Method:Post
  Param: url, []
  Return: Result [] or reject error
  */
  post = (url, argument = [], headers) => {
    return axios
      .post(url, argument, headers)
      .then((response) => {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  /**
  Method: Put
  Param: url, []
  Return: Result [] or reject error
  */
  put = (url, argument = [], headers) => {
    return axios
      .put(url, argument, this.headers)
      .then((response) => {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
  /**
  Method: Delete
  Params: url, null
  Return: Result [] or reject error
  */
  delete = (url, headers) => {
    return axios
      .delete(url, headers)
      .then((response) => {
        return response;
      })
      .catch(function(error) {
        return error;
      });
  };
} //End class

export default Model;
```

This is a sub class Model Context and extends from Model.

```javascript
import Model from './Model';
/**
This class extend from parent Model, here you define a group of functions
by context, for example CRUD functions from Users backend api. This class must be
instantiated in the containers class components, inside constructor method and
have to passed an arguments calling globals (this.props.globals), this come from
redux store, and has an object with important global data like a base urls.
*/
class UserModel extends Model {
  constructor(globals) {
    super();
    this.globals = globals;
    this.url = globals.users;
    this.headers = globals.headers;
    //this.headers = ''; Uncoment this if your api dont require headers
  }
  /**
  Example, Get function
  Params: id
  Return: object {}
  */
  getUser = async (id) => {
    let url = `${this.url}users/${id}`;
    let response = { name: "", lastname:"", age: 0, sports: [{},] }; //Must be a clone of response structure object
    try {
      response = await this.get(url, this.headers);
    } catch (e) {
      console.log(e);
    }
    return response.data;
  };
   /**
   Example, Post function
   Params: object {}
   Return: data.status
   */
   addUser = async (user_data_object) => {
    let url = `${this.url}users/`;
    let response = { data: { status: 404 } };
    try {
      response = await this.post(url, this.headers, user_data_object);
    } catch (e) {
      console.log(e);
    }
    return response.data.status;
  };
  /**
  Example, Put function
  Params: object {}
  Return: data.status Int
  */
  updateUser = async (user_data_object) => {
    let url = `${this.url}users/`;
    let response = { data: { status: 404 } };
    try {
      response = await this.put(url, this.headers, user_data_object);
    } catch (e) {
      console.log(e);
    }
    return response.data.status;
  };

  /**
  Example, Delete function
  Params: id
  Return: object {}
  */
  dropUser = async (id) => {
    let url = `${this.url}users/${id}`;
    let response = { data: { status: 404 } };  //Must be a clone of response structure object
    try {
      response = await this.delete(url);
    } catch (e) {
      console.log(e);
    }
    return response.data.status;
  };

}

export default UserModel;
```

### Containers

Containers must be a react class component and manage negotiation principal logic.
Containers live in the src/components/contexComponent/ContainerContext.js, so next let see an example

```javascript
//React component
import React from 'react';
import { connect } from 'react-redux';
//View Components  
import SingleUser from '../views/SingleUser';
//Model Components
import UserModel from '../../models/UserModel';

class UserContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      single_user: {},
    };
    //Instantiate Model Class UserModel
    this.model = new UserModel(this.props.globals);
  }

  componentDidMount = () => {
    let user_id = 1;
    this.getUserById(user_id);
  }

  getUserById = (id) => {
    this.setState({ single_user: await this.model.getUser(id) });
  }

  render() {
    return(
      <>
        {this.state.single_user ? (
          <SingleUser user={this.state.single_user}/>
        ):(
          <p> No user data </p>
        )}
      </>
    );
  }

}//End class container

//Redux connect to globals var
const mapStateToProps = (state) => ({ globals: state.globals });
const wrapper = connect(mapStateToProps);

export default wrapper(UserContainer);
```

### Views

View must be a function react component, and the principal mission is display rendering.
This component don't manage negotiation logic and if needed manage some basic state please
use React Hooks helper.

```javascript
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

function singleUser(props) {
  return (
    <>
      <List dense={false}>
          <ListItem>
            <ListItemText primary={props.user.name} />
          </ListItem>
          <ListItem>
            <ListItemText primary={props.user.last} />
          </ListItem>
      </List>
      <Divider/>
      <List dense={false}>
        {props.user.sports.map((sport, index) => (
          <ListItem key={index} >
            <ListItemText primary={sport.name} />
          </ListItem>
        ))}
      </List>
    </>
  );
}
export default singleUser;
```

### Dev Dependencies

This project follow several code standard, like an airbnb code rules, eslint plugin and prettier.
The purpose of this is to help keep a clean, tidy, readable and very scalable code.

```javascript
"devDependencies": {
    "eslint-config-airbnb": "^17.1.0",
    "eslint-config-prettier": "^4.0.0",
    "eslint-config-react-app": "^3.0.5",
    "eslint-plugin-import": "^2.14.0",
    "eslint-plugin-jsx-a11y": "^6.1.2",
    "eslint-plugin-prettier": "^3.0.1",
    "eslint-plugin-react": "^7.11.1",
    "prettier": "^1.16.4",
    "react-addons-perf": "^15.4.2"
  }
```

### Project base Dependencies

The standard base project has essentials dependencies like a react-router, redux, redux-persist, Material UI and many other. all of them
are perfectly configured and ready to use. (enjoy the stack)

```javascript
"dependencies": {
    "@material-ui/core": "^4.2.0",
    "eslint-config-dev": "^2.0.0",
    "eslint-plugin-prettier": "^3.0.1",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-scripts": "3.0.1",
    "react-redux": "^6.0.0",
    "react-router-dom": "^4.3.1",
    "redux": "^4.0.1",
    "redux-persist": "^5.10.0",
    "react-google-login": "^5.0.4",
    "jsonwebtoken": "^8.5.1",
    "notistack": "^0.4.3"
  },
```

### Utils

The project has important utils helper and this live on src/utils folder.

* Access control components
* Helper functions (decode functions, format functions, many others functions) please check src/utils/index.js
* Material UI minimal imports (less code in containers)

### Redux

Redux store is ready to use and has a global variable declaration with several actions and reducers,
please check src/redux/ folder.


## Authors

* **Christopher Troc** - *Initial work* - [Bitbucket](https://bitbucket.org/ctroc/) [Github](https://github.com/ChristopherTroc)

## License

This project is licensed under the MIT License
