import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  let formIsValid = false;
  //first name
  const {
    value: enteredFname,
    hasError: fnameHasError,
    valueChangeHandler: fnameChangeHandler,
    inputBlurHandler: fnameBlurHandler,
    isValid: fnameIsValid,
    reset: resetfNameInput,
  } = useInput((value) => value.trim() !== "");

  //last name
  const {
    value: enteredLname,
    hasError: lNameHasError,
    valueChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    isValid: lNameIsValid,
    reset: resetlNameInput,
  } = useInput((value) => value.trim() !== "");

  //email
  const {
    value: enteredEmail,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  if (fnameIsValid && lNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) return;

    resetfNameInput();
    resetlNameInput();
    resetEmailInput();
    console.log(`submitted`);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div>
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            className={`${fnameHasError ? "bg-red-500" : ""}`}
            type="text"
            id="name"
            onChange={fnameChangeHandler}
            onBlur={fnameBlurHandler}
            value={enteredFname}
          />
          {fnameHasError && <p>Please enter a first name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            className={`${lNameHasError ? "bg-red-500" : ""}`}
            type="text"
            id="name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={enteredLname}
          />
          {lNameHasError && <p>Please enter a last name</p>}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          className={`${emailHasError ? "bg-red-500" : ""}`}
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailHasError && <p>Please enter an email</p>}
      </div>
      <div className="form-actions">
        <button
          className={`${
            !formIsValid ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          disabled={!formIsValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
