import Hero from './Hero';


const AboutView = () => {
    return (
      
      <h2>
        <Hero text='About Us' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam, quasi dolorem dolorum, quos reiciendismaiores
               facilis tempore dolore nam cupiditate molestiae omnis placeat minus unde evenietnumquam voluptas ratione!Lorem 
              </p>
            </div>
          </div>
        </div>
      </h2>
    )
  }

export default AboutView;