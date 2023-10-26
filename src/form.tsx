import "./form.css";
function Form() {
  return (
    <>
      <main className="container">
        <div className="form-part">
          <p>Create Account</p>
          <form method="POST">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <button>Sign up</button>
          </form>
        </div>
        <div className="image-part">
          <img
            src="https://cdn.pixabay.com/photo/2016/05/25/18/02/maple-1415541_1280.jpg"
            alt="maple leaf"
          />
        </div>
      </main>
    </>
  );
}

export default Form;
