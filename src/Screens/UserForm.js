import React, { useEffect, useState } from "react";
/* Implemented without using redux as it is an assessment*/

const UserForm = () => {
  const [stateObj, setStateObj] = useState({});
  const [idObj, setIdObj] = useState(1);
  const [fileObj, setFile] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${idObj}`)
      .then(response => response.json())
      .then(data => setStateObj(data));
  }, [idObj]);

  const handleChange = e => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="container">
      <form>
        <div className="card">
          {fileObj && (
            <div className="card-heading">Here is the image uploaded</div>
          )}
          <img
            alt=""
            className="w-25 h-15 img-responsive pull-right "
            src={fileObj}
          />
        </div>
        <div className="form-group mt-2  ">
          <label htmlFor="" className="font-weight-bold">
            Select to change the User:
          </label>
          <select
            type="text"
            className="form-control"
            onChange={e => setIdObj(e.target.value)}>
            <option value="1">ID : 1</option>
            <option value="2">ID : 2</option>
            <option value="3">ID : 3</option>
            <option value="4">ID : 4</option>
            <option value="5">ID : 5</option>
          </select>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <label htmlFor="name" className="font-weight-bold">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={stateObj.name}
              placeholder="Name"
            />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="email" className="font-weight-bold">
              Email:
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={stateObj?.email}
              placeholder="Email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-2">
            <label htmlFor="website" className="font-weight-bold">
              Website:
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={stateObj?.website}
              placeholder="Website"
            />
          </div>
          <div className="col-md-6 mt-2">
            <label htmlFor="phone" className="font-weight-bold">
              Phone:
            </label>
            <input
              type="text"
              className="form-control"
              defaultValue={stateObj?.phone}
              placeholder="phone"
            />
          </div>
        </div>
        <div className="form-group mt-2">
          <label htmlFor="company" className="font-weight-bold">
            Company:
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={stateObj?.company?.name}
            placeholder="Company"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="company" className="font-weight-bold">
            Image:
          </label>
          <input
            type="file"
            className="form-control"
            onChange={e => {
              handleChange(e);
            }}
            placeholder="Company"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
