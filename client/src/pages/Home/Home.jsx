
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="flex justify-center mt-4">
      <Link to="/adventures">
        <div className=" m-1 w-44 relative overflow-hidden rounded-md shadow-lg cursor-pointer flex justify-center items-center">
          <img
            className="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt="Orange canoe on a lake"
          />
          <div className="absolute">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
              Adventures
            </h4>
          </div>
        </div>
      </Link>
      <Link to="/culture">
        <div className=" m-1 w-44 relative overflow-hidden rounded-lg shadow-lg cursor-pointer flex justify-center items-center">
          <img
            className="object-cover w-full h-64"
            src="https://images.unsplash.com/photo-1550524514-efb9046e0fec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
            alt="Ballet dancer on a street"
          />
          <div className="absolute">
            <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">
              Culture
            </h4>
          </div>
        </div>
      </Link>
    </main>
  );
};

export default Home;
