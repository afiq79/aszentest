import React from 'react';
const Contact = () => {

  const sub = () => {
    alert('Your From Is Submmited')
  }

  return (
    <>
    <div className="main_from">
      <div className="container my-3">
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Mobile Number</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="+008945763487256" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">User Name</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="example_asdf_23" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Password</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="#$osj()*7jjjjjjj" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className="btn btn-success" onClick={sub}> Submit</button>
      </div>
      </div>
    </>
  );
}

export default Contact;