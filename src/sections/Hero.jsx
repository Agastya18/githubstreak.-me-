import background from '../assets/images/background.jpg';
import summmary from '../assets/images/summary.png';

const Hero = () => {

  return (
    <div className="hero min-h-[100vh] xl:min-h-screen mb-5 pt-16"
      style={{
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
    }}>
      <div className="md:container flex flex-col lg:flex-row items-center lg:items-center justify-between h-full px-6 py-12 gap-3 md:gap-6 sm:px-12 lg:px-16">
        <div className="text-left">
          <h1 className="pt-16 text-4xl font-extrabold sm:text-6xl md:text-6xl lg:text-7xl">
            Welcome to
            <span className="text-green-500"> Githubstreak</span>
          </h1>
          <h4 className="text-3xl font-bold md:text-5xl text-white mt-10">
            Improve your coding skills by solving real-world problems.
          </h4>
          <h5 className="text-xl text-white mb-10 mt-10">
            Join a community of developers who stay accountable to each other to stay consistent in their coding journey.
          </h5>
        </div>
        <div className="w-full md:w-auto h-auto">
          <img
            src={summmary}
            alt="GitHub Streak Cards"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
