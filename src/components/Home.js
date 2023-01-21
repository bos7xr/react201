import Hero from './Hero';

const Home = () => {
    return (
      
      <h1>
        <Hero text='Welcome to REACT 201' />
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 offset-lg-2 my-5'>
              <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam, quasi dolorem dolorum, quos reiciendismaiores
               facilis tempore dolore nam cupiditate molestiae omnis placeat minus unde evenietnumquam voluptas ratione!Lorem 
               ipsum dolor sit amet consectetur adipisicing elit. Ex, quisquam, quasi dolorem dolorum, quos reiciendis
                maiores facilis tempore dolore nam cupiditate molestiae omnis placeat minus unde evenietnumquam voluptas ratione!
              </p>
            </div>
          </div>
        </div>
      </h1>
    )
  }

  export default Home;