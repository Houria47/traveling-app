import React from 'react'

import classes from './Contact.module.css'
import contactImg from './../../assets/contact.png'
import Title from '../../components/UI/Title'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <>
      <Title title="Contact" />
      <div className={classes.contact}>
        <div className={classes.imgBox}>
          <img src={contactImg} alt="" />
        </div>
        <ContactForm />
      </div>
    </>
  )
}

export default Contact
