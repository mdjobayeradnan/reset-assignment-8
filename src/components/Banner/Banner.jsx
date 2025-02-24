import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img 
      src="https://m.media-amazon.com/images/I/41yf2joE2+L._SY445_SX342_.jpg"
      className="w-[400px] h-[500px] rounded-lg shadow-2xl" />
    <div className="space-y-2">
      <h1 className="text-5xl font-bold w-[400px]">Book <span className="text-green-500">HAVEN</span></h1>
     
      <button className="btn bg-green-500 w-[200px]"> <Link to ="listedBooks">View The
      List</Link> </button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;