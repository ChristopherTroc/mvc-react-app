import Model from './Model';
/*
 * This class extend from parent Model, here you define a group of functions
 * by context, for example CRUD functions from Users backend api. This class must be
 * instantiated in the containers class components, inside constructor method and
 * have to passed an arguments calling globals (this.props.globals), this come from
 * redux store, and has an object with important global data like a base urls.
 */
class UserModel extends Model {
  constructor(globals) {
    super();
    this.globals = globals;
    this.url = globals.users;
    this.headers = globals.headers;
    //this.headers = ''; Uncoment this if your api dont require headers
  }
  /*
   * Example, Get function
   * Params: id
   * Return: object {}
   */
  getUser = async (id) => {
    let url = `${this.url}users/${id}`;
    let response = { name: "", lastname:"", age: 0, sports: {} }; //Must be a clone of response structure object
    try {
      response = await this.get(url, this.headers);
    } catch (e) {
      console.log(e);
    }
    return response.data;
  };
  /*
   * Example, Post function
   * Params: object {}
   * Return: data.status
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
  /*
   * Example, Put function
   * Params: object {}
   * Return: data.status Int
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

  /*
   * Example, Delete function
   * Params: id
   * Return: object {}
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
