import { Link } from "react-router-dom";


const Inspiring  = () => {
    return (
       <Link to="/inspiring">
         <div className="text-center text-2xl space-y-5 h-[650px] font-bold w-[1000px] mx-auto border-2">
        <p className="underline">1.A book is a dream you hold in your hands.
        </p>
        <p className="underline">2.Reading is a journey of the mind and soul.
        </p>
        <p className="underline">3.Books are a uniquely portable magic. — Stephen King
        </p>
        <p className="underline">4.Today a reader, tomorrow a leader. — Margaret Fuller
        </p>
        <p className="underline">5.Reading gives us someplace to go when we have to stay where we are. — Mason Cooley
        </p>
        <p className="underline">6.A reader lives a thousand lives before he dies. The man who never reads lives only one. — George R.R. Martin
        </p>
        <p className="underline">7.Books are mirrors: you only see in them what you already have inside you.— Carlos Ruiz Zafón
        </p>
        <p>8.Reading is to the mind what exercise is to the body. — Joseph Addison
        </p>
        <p className="underline">9.Lose yourself in a book, and you may find yourself in the process.
        </p>
        <p className="underline">10.The journey of a lifetime starts with the turning of a page.
        </p>  
        </div>
       </Link>
    );
};

export default Inspiring ;