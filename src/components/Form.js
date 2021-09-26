import React, {useState} from 'react'
import ErrorMessage from './ErrorMessage';
import Input from './Input';
import CheckBox from './CheckBox';
import Title from './Title';
import Button from './Button';
import { useHistory } from "react-router-dom";


function Form(props) {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [agree, setAgree] = useState(true)
  const [nameError, setNameError] = useState("")
  const [companyError, setCompanyError] = useState("")
  const [emailError, setEmailError] = useState("")
  const history = useHistory();

  const handleAgree = () => {
    setAgree(!agree)
  }
 
  function handleNewsletter(e) {
    e.preventDefault()
    if(name) {setNameError(name)} else {setNameError("ErrorMessage")}
    if(company) {setCompanyError(company)} else {setCompanyError("ErrorMessage")}
    if(email) {setEmailError(email)} else {setEmailError("ErrorMessage")}
    if(name && company && email && agree) {
      history.push("./success")
    }
  }

  function reset(e){
    e.preventDefault()
    setName("")
    setCompany("")
    setEmail("")
    setAgree(true)
  }



  return (

    <form onSubmit={handleNewsletter}>
      <Title  tag="h1" text="Subscribe to our Newsletter"/>
      <Title  tag="h6" text="Please fill in all the fields below"/>

      <Input  type="text" name="name" value= {name} onChange={e=>{setName(e.target.value); setNameError(e.target.value)}} placeHolder="Your Name" mandatory='true'/>
          {(nameError === "ErrorMessage")  && <ErrorMessage fieldName="Name" type="input" />}
      <Input  type="text" name="company" value= {company} onChange={e=>{setCompany(e.target.value); setCompanyError(e.target.value)}} placeHolder="Your Company" mandatory='true'/>
          {companyError === "ErrorMessage" && <ErrorMessage fieldName="Company" type="input" />}
      <Input  type="email" name="email" value= {email} onChange={e=>{setEmail(e.target.value)}} placeHolder="Your Email" mandatory='true'/>
          {emailError === "ErrorMessage" && <ErrorMessage fieldName="Email" type="input"/>}
      <CheckBox type="checkbox" name="agree"  checked={agree} onChange={handleAgree} labelText="I am agree to subscribe"/>
          {!agree && <ErrorMessage type="checkbox" />}

      <Button isInForm='true' type="Submit" text="Subscribe" design="primary" />
      <Button isInForm='true' type="Submit" text="Reset" design="primary" onClick={reset}/>
  </form>
  
  );
}

export default Form;
