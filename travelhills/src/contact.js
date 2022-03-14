import React from 'react'

const Contact = () => {
    return (
        <div>
            <section className="contactus-section">
		<div className="container">
        <h1 className="main-heading  text-center fw-bolder">Contact Us</h1>
        		<div className="row">
		<div className="col-12 col-lg-10 mx-auto">
         
				<div class="row">
				<div className="contact-leftside col-12 col-lg-5">
                
					<h2 className="main-heading">
						Get in touch with <br /> with us.
					</h2>
					
					<figure>
						<img src="./images/5.jpg" alt="bookimg" className="img-fluid"/>
					</figure>
        </div>
        <div className="contact-rightside col-12 col-lg-7">
            <form method="post">
                    <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="text" name="" id="" placeholder="First name"/>
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="text" name="" id="" placeholder="Last name"/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="number" name="" id="" placeholder="Phone number"/>
                    </div>
                    <div className="col-12 col-lg-6 contact-input-field">
                        <input className="form-control" type="email" name="" id="" placeholder="Email"/>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-12 contact-input-field">
                            <input type="text" className="form-control" id="" placeholder="Your adress"/>
                        </div>
                    </div>

                    
                    <div className="row">
                        <div className="col-12">
                            <input type="text" className="form-control" id="" placeholder="Your Message"/>
                        </div>
                    </div>

                    <div class="form-check form-checkbox-style">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label" className="main-hero-para">
                        I agree that the travelhills may contact me at the
                        email address or phone number above.
                      </label>
                    </div>
                    <div class="frame">
              <button class="custom-btn btn-3"><span>Submit</span></button>
              </div>
            </form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        </div>

    )
}

export default Contact
