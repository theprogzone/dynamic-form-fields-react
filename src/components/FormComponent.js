import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const FormComponent = () => {
  const [fieldList, setFieldList] = useState([
    { firstName: "", lastName: "", dateOfBirth: new Date(), email: "" },
  ]);

  const handleInputChange = (name, value, index) => {
    const list = [...fieldList];
    list[index][name] = value;
    setFieldList(list);
  };

  const handleRemove = (index) => {
    const list = [...fieldList];
    list.splice(index, 1);
    setFieldList(list);
  };

  const handleAdd = () => {
    setFieldList([
      ...fieldList,
      { firstName: "", lastName: "", dateOfBirth: new Date(), email: "" },
    ]);
  };

  const saveDetails = (e) => {
    e.preventDefault();
    console.log(fieldList);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h1 className="text-center">Dynamic Form</h1>
          <form>
            <div className="card-body">
              {fieldList.map((element, index) => {
                return (
                  <div key = {index}>
                    <div className="form-group mb-2">
                      <label className="form-label">First name : </label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        className="form-control"
                        value={element.firstName}
                        onChange={(e) =>
                          handleInputChange(
                            e.target.name,
                            e.target.value,
                            index
                          )
                        }
                      ></input>
                    </div>
                    <div className="form-group mb-2">
                      <label className="form-label">Last name : </label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        className="form-control"
                        value={element.lastName}
                        onChange={(e) =>
                          handleInputChange(
                            e.target.name,
                            e.target.value,
                            index
                          )
                        }
                      ></input>
                    </div>
                    <div className="form-group mb-2">
                      <label className="form-label">Date of Birth : </label>
                      <DatePicker
                        name="dateOfBirth"
                        selected={element.dateOfBirth}
                        className="form-control"
                        onChange={(e) =>
                          handleInputChange("dateOfBirth", e, index)
                        }
                      />
                    </div>
                    <div className="form-group mb-2">
                      <label className="form-label">Email : </label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        value={element.email}
                        onChange={(e) =>
                          handleInputChange(
                            e.target.name,
                            e.target.value,
                            index
                          )
                        }
                      ></input>
                    </div>
                    {fieldList.length > 1 && (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemove(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                );
              })}
              <br/>
              <div
                className="btn-toolbar justify-content-between"
                role="toolbar"
              >
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => handleAdd(e)}
                  >
                    Add
                  </button>
                </div>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-success"
                    onClick={(e) => saveDetails(e)}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
