import axios from 'axios';
/***
Base Parent Model, "All sub clases models have to extends from this class"
*/
class Model {
  /***
  Method: Get
  Param: url, null
  Return: Result [] or reject error
  */
  get = (url, headers) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, headers)
        .then((response) => {
          return resolve(response);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };
  /***
  Method:Post
  Param: url, []
  Return: Result [] or reject error
  */
  post = (url, argument = [], headers) => {
    return new Promise((resolve, reject) => {
      axios
        .post(url, argument, headers)
        .then((response) => {
          return resolve(response);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };
  /***
  Method: Put
  Param: url, []
  Return: Result [] or reject error
  */
  put = (url, argument = [], headers) => {
    return new Promise((resolve, reject) => {
      axios
        .put(url, argument, this.headers)
        .then((response) => {
          return resolve(response);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };
  /***
  Method: Delete
  Params: url, null
  Return: Result [] or reject error
  */
  delete = (url, headers) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(url, headers)
        .then((response) => {
          return resolve(response);
        })
        .catch(function(error) {
          return reject(error);
        });
    });
  };
} //End class

export default Model;
